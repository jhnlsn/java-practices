package com.example.transfers.adapter.web;

/**
 * A request that passed shape validation but can't be represented as domain
 * values (unknown currency, sub-cent precision). Deliberately distinct from
 * {@link IllegalArgumentException} so the error handler never converts a
 * genuine bug elsewhere in the request path into a polite 422.
 */
class MalformedTransferRequest extends RuntimeException {

    MalformedTransferRequest(String message) {
        super(message);
    }
}
