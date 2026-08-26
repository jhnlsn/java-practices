package com.example.transfers.adapter.fx;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.http.client.ClientHttpRequestFactoryBuilder;
import org.springframework.boot.http.client.ClientHttpRequestFactorySettings;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

import com.example.transfers.domain.CurrencyPair;
import com.example.transfers.domain.ExchangeRate;
import com.example.transfers.domain.port.FxRates;
import com.example.transfers.domain.port.FxUnavailable;

/**
 * Implements the {@link FxRates} port over the provider's HTTP API. Translate
 * and delegate only: HTTP vocabulary stays on this side of the port, and
 * provider failures become the port's declared {@link FxUnavailable}.
 */
@Component
class HttpFxRates implements FxRates {

    private final RestClient client;

    HttpFxRates(RestClient.Builder builder,
                @Value("${fx.base-url}") String baseUrl,
                @Value("${fx.read-timeout:2s}") Duration readTimeout) {
        var settings = ClientHttpRequestFactorySettings.defaults().withReadTimeout(readTimeout);
        this.client = builder
                .baseUrl(baseUrl)
                .requestFactory(ClientHttpRequestFactoryBuilder.detect().build(settings))
                .build();
    }

    @Override
    public ExchangeRate rateFor(CurrencyPair pair) {
        FxRateResponse dto;
        try {
            dto = client.get()
                    .uri("/rates/{base}/{quote}",
                            pair.from().getCurrencyCode(), pair.to().getCurrencyCode())
                    .retrieve()
                    .body(FxRateResponse.class);
        } catch (RestClientException e) {
            throw new FxUnavailable(pair, e);
        }
        if (dto == null || dto.rate() == null) {
            throw new FxUnavailable(pair, "provider returned an empty rate");
        }
        return new ExchangeRate(pair, dto.rate());
    }
}
