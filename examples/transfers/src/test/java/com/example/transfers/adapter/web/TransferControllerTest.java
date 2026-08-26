package com.example.transfers.adapter.web;

import static com.example.transfers.support.Monies.usd;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import com.example.transfers.application.AccountNotFound;
import com.example.transfers.application.TransferResult;
import com.example.transfers.application.TransferUseCase;
import com.example.transfers.domain.AccountId;
import com.example.transfers.domain.RejectionReason;

/**
 * Testing playbook §4.2 — web slice test: HTTP concerns only (status codes,
 * validation, serialization). The use case is a port boundary, so mocking it
 * here is the sanctioned §6.3 exception; its behavior has its own
 * integration tests.
 */
@WebMvcTest(TransferController.class)
class TransferControllerTest {

    @Autowired MockMvc mvc;
    @MockitoBean TransferUseCase transferUseCase; // port boundary — allowed, see §6.3

    @Test
    void returns201WithStatusWhenTransferCompletes() throws Exception {
        when(transferUseCase.transfer(new AccountId("A"), new AccountId("B"), usd("40.00")))
                .thenReturn(TransferResult.completed());

        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                        """))
           .andExpect(status().isCreated())
           .andExpect(jsonPath("$.status").value("COMPLETED"));
    }

    @Test
    void returns422WithReasonWhenTransferIsRejected() throws Exception {
        when(transferUseCase.transfer(any(), any(), any()))
                .thenReturn(TransferResult.rejected(RejectionReason.INSUFFICIENT_FUNDS));

        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"B","amount":40.00,"currency":"USD"}
                        """))
           .andExpect(status().isUnprocessableEntity())
           .andExpect(jsonPath("$.reason").value("INSUFFICIENT_FUNDS"));
    }

    @Test
    void returns422WhenAmountIsNegative() throws Exception {
        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"B","amount":-10,"currency":"USD"}
                        """))
           .andExpect(status().isUnprocessableEntity());
    }

    @Test
    void returns422WhenSourceAndTargetAreTheSameAccount() throws Exception {
        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"A","amount":10,"currency":"USD"}
                        """))
           .andExpect(status().isUnprocessableEntity());
    }

    @Test
    void returns422WhenCurrencyIsUnknown() throws Exception {
        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"B","amount":10,"currency":"ZZZ"}
                        """))
           .andExpect(status().isUnprocessableEntity());
    }

    @Test
    void returns404WhenAccountIsUnknown() throws Exception {
        when(transferUseCase.transfer(any(), any(), any()))
                .thenThrow(new AccountNotFound(new AccountId("A")));

        mvc.perform(post("/transfers")
                .contentType(APPLICATION_JSON)
                .content("""
                        {"from":"A","to":"B","amount":10,"currency":"USD"}
                        """))
           .andExpect(status().isNotFound());
    }
}
