package com.example.transfers.domain.port;

import com.example.transfers.domain.CurrencyPair;
import com.example.transfers.domain.ExchangeRate;

/**
 * Development playbook §3.3 — port for an external boundary we don't own.
 * Domain types in the signature, no HTTP vocabulary: the fact that rates come
 * from a remote API is the adapter's secret.
 */
public interface FxRates {

    ExchangeRate rateFor(CurrencyPair pair);
}
