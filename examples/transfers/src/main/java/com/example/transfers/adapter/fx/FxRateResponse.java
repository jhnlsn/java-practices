package com.example.transfers.adapter.fx;

import java.math.BigDecimal;

/** Provider wire DTO — adapter-private, never leaks inward. */
record FxRateResponse(String base, String quote, BigDecimal rate) {}
