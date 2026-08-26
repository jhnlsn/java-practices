package com.example.transfers.adapter.fx;

import static com.example.transfers.support.Monies.EUR;
import static com.example.transfers.support.Monies.USD;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.okJson;
import static com.github.tomakehurst.wiremock.client.WireMock.urlPathEqualTo;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import com.example.transfers.domain.CurrencyPair;
import com.example.transfers.domain.ExchangeRate;
import com.example.transfers.domain.port.FxRates;
import com.example.transfers.domain.port.FxUnavailable;
import com.example.transfers.support.IntegrationTest;
import com.github.tomakehurst.wiremock.junit5.WireMockExtension;

/**
 * Testing playbook §4.4 — a double for an external HTTP boundary we don't
 * own, at the wire level. The test exercises the real adapter (real
 * RestClient, real serialization, real timeouts) against a fake provider.
 */
@IntegrationTest
class FxRateClientIT {

    @RegisterExtension
    static WireMockExtension fxApi = WireMockExtension.newInstance()
            .options(wireMockConfig().dynamicPort())
            .build();

    @DynamicPropertySource
    static void fxProperties(DynamicPropertyRegistry registry) {
        registry.add("fx.base-url", fxApi::baseUrl);
        registry.add("fx.read-timeout", () -> "1s");
    }

    @Autowired FxRates fxRates;

    private final CurrencyPair usdToEur = new CurrencyPair(USD, EUR);

    @Test
    void mapsProviderResponseToDomainExchangeRate() {
        fxApi.stubFor(get(urlPathEqualTo("/rates/USD/EUR"))
                .willReturn(okJson("""
                        {"base":"USD","quote":"EUR","rate":0.9143}
                        """)));

        assertThat(fxRates.rateFor(usdToEur))
                .isEqualTo(new ExchangeRate(usdToEur, new BigDecimal("0.9143")));
    }

    @Test
    void translatesProviderTimeoutIntoThePortsFailureMode() {
        fxApi.stubFor(get(urlPathEqualTo("/rates/USD/EUR"))
                .willReturn(okJson("""
                        {"base":"USD","quote":"EUR","rate":0.9143}
                        """).withFixedDelay(3_000)));

        assertThatThrownBy(() -> fxRates.rateFor(usdToEur))
                .isInstanceOf(FxUnavailable.class);
    }
}
