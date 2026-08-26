package com.example.transfers.adapter.web;

import com.example.transfers.domain.RejectionReason;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
record TransferResponse(String status, String reason) {

    static TransferResponse completed() {
        return new TransferResponse("COMPLETED", null);
    }

    static TransferResponse rejected(RejectionReason reason) {
        return new TransferResponse("REJECTED", reason.name());
    }
}
