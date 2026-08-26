package com.example.transfers.adapter.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.transfers.application.TransferResult;
import com.example.transfers.application.TransferUseCase;

import jakarta.validation.Valid;

/**
 * Development playbook §3.5 — translate, delegate, nothing else. Wire DTOs
 * never leak inward; domain types never leak outward. Package-private: no
 * other adapter may reach in.
 */
@RestController
class TransferController {

    private final TransferUseCase useCase;

    TransferController(TransferUseCase useCase) {
        this.useCase = useCase;
    }

    @PostMapping("/transfers")
    ResponseEntity<TransferResponse> transfer(@Valid @RequestBody TransferRequest request) {
        var result = useCase.transfer(request.fromId(), request.toId(), request.toMoney());
        return switch (result) {
            case TransferResult.Completed() ->
                    ResponseEntity.status(HttpStatus.CREATED).body(TransferResponse.completed());
            case TransferResult.Rejected(var reason) ->
                    ResponseEntity.unprocessableEntity().body(TransferResponse.rejected(reason));
        };
    }
}
