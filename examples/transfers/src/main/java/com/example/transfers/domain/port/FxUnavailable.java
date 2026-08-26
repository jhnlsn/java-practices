package com.example.transfers.domain.port;

import com.example.transfers.domain.CurrencyPair;

/**
 * The port's declared failure mode: rates come from a boundary we don't own,
 * and that boundary can be down. An I/O failure aborts — it is never a
 * business decision, so it is an exception, not a result value.
 */
public class FxUnavailable extends RuntimeException {

    public FxUnavailable(CurrencyPair pair, Throwable cause) {
        super("FX rate unavailable for " + pair, cause);
    }

    public FxUnavailable(CurrencyPair pair, String detail) {
        super("FX rate unavailable for " + pair + ": " + detail);
    }
}
