// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
function sT(e){return e==="aborted_streaming"||e==="aborted_tools"}function Hfe(e){if(e===void 0)return!1;switch(e){case"blocking_limit":case"rapid_refill_breaker":case"prompt_too_long":case"image_error":case"model_error":case"api_error":case"malformed_tool_use_exhausted":case"budget_exhausted":case"structured_output_retry_exhausted":case"tool_deferred_unavailable":case"turn_setup_failed":return!0;case"aborted_streaming":case"aborted_tools":case"stop_hook_prevented":case"hook_stopped":case"tool_deferred":case"max_turns":case"background_requested":case"completed":return!1;default:return!1}}function Ipl(e){return e.reason==="api_error"?`api_error_${e.errorKind??"unknown"}`:e.reason}function Hho(e){return sT(e)||Hfe(e)}
export{sT,Hfe,Ipl,Hho};
