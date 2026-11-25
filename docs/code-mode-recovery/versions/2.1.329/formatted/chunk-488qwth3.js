// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import { N } from "/$bunfs/root/chunk-kgzzwvwc.js";
import { w } from "/$bunfs/root/chunk-avbzeyf3.js";
import {
  lq,
  VWe,
  _t,
  s8e,
  DSl,
  FSl,
  z_,
  o5,
  Xbl,
  Vbs,
  T$n,
  b,
  HF,
} from "/$bunfs/root/chunk-aq3ms068.js";
import { s } from "/$bunfs/root/chunk-gvhwnc7g.js";
import { t, _ } from "/$bunfs/root/chunk-c2c9kwmh.js";
import { i } from "/$bunfs/root/chunk-ht6e56zb.js";
import { f, l } from "/$bunfs/root/chunk-3mgc6ahd.js";
import { Ee, la } from "/$bunfs/root/chunk-cd3hqxcc.js";
import { Pr } from "/$bunfs/root/chunk-rqs3939j.js";
import { Me } from "/$bunfs/root/chunk-pwxp2pn6.js";
import { pn } from "/$bunfs/root/chunk-92h2y9s9.js";
import { dd, s0, sle } from "/$bunfs/root/chunk-2jhxnfds.js";
import { oc } from "/$bunfs/root/chunk-66cxqkc1.js";
import { RY } from "/$bunfs/root/chunk-jxsq6497.js";
import { ao } from "/$bunfs/root/chunk-megeryme.js";
import { jt } from "/$bunfs/root/chunk-bpdncsrm.js";
import { j } from "/$bunfs/root/chunk-z749tmkd.js";
import { createHash as U } from "crypto";
import { ADDRCONFIG as z, promises as B } from "dns";
import { Resolver as H } from "dns/promises";
import { gzipSync as q } from "zlib";
function Rps({ maxBatchSize: e, getFlushIntervalMs: n, post: r }) {
  let o = [],
    a = null;
  async function u() {
    if (o.length === 0) return;
    let h = o;
    ((o = []), await r(h));
  }
  function g() {
    if (a) (clearTimeout(a), (a = null));
  }
  function c() {
    u().catch(() => {});
  }
  function T() {
    if (a) return;
    a = setTimeout(() => {
      ((a = null), c());
    }, n()).unref();
  }
  return {
    enqueue(h) {
      if ((o.push(h), o.length >= e)) (g(), c());
      else T();
    },
    flush: u,
    async shutdown() {
      (g(), await u());
    },
    drainForTesting() {
      g();
      let h = o;
      return ((o = []), h);
    },
  };
}
var k = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs",
  xps = "pubea5604404508cdd34afb69e6f42a05bc",
  G = 15000,
  K = 100,
  W = 5000,
  S = 300000,
  x = [
    [
      "tengu_stream_loop_exited_after_watchdog",
      new Set(["model", "exit_delay_ms", "exit_path"]),
    ],
    ["tengu_streaming_error", new Set(["error_type"])],
    [
      "tengu_streaming_idle_timeout",
      new Set([
        "model",
        "timeout_ms",
        "tier",
        "bytes_received_before_stall",
        "time_to_first_byte_ms",
        "body_read_pending",
        "slept_ms",
      ]),
    ],
    [
      "tengu_streaming_watchdog_retry",
      new Set(["model", "retry_attempt", "after_thinking_only"]),
    ],
    [
      "tengu_thinking_signature_strip_retry",
      new Set([
        "model",
        "query_source",
        "stripped_signed_count",
        "stripped_unsigned_count",
      ]),
    ],
    ["tengu_tool_input_json_parse_fail", new Set(["inputLen"])],
  ],
  L = [
    [
      "tengu_repl_script_end",
      new Set([
        "outcome",
        "lane",
        "durationMs",
        "innerCallCount",
        "innerExecutedCount",
        "innerErrorCount",
        "innerDeclinedCount",
        "permissionMode",
        "hookContinueFalse",
      ]),
    ],
  ],
  V = new Set([
    "tengu_feature_ok",
    "tengu_feature_bad",
    "tengu_feature_sad",
    "tengu_teleport_menu",
    "tengu_teleport_permission_mode_refused",
    "tengu_tether_decision",
    "tengu_tether_live_outcome",
    "tengu_tether_echo_audit",
    "tengu_tether_unrecognised_400",
    "chrome_bridge_connection_succeeded",
    "chrome_bridge_connection_failed",
    "chrome_bridge_disconnected",
    "chrome_bridge_tool_call_completed",
    "chrome_bridge_tool_call_disconnected",
    "chrome_bridge_tool_call_error",
    "chrome_bridge_tool_call_lost",
    "chrome_bridge_tool_call_started",
    "chrome_bridge_tool_call_timeout",
    "tengu_api_error",
    "tengu_api_fallback_last_resort",
    "tengu_api_success",
    "tengu_upload_ahead",
    "tengu_typing_spell",
    "tengu_slow_prompt_hook",
    "tengu_artifact_disabled_session",
    "tengu_artifact_reject_breaker",
    "tengu_artifact_tool_recovered",
    "tengu_artifact_tool_withheld",
    "tengu_auto_mode_context_withheld",
    "tengu_auto_mode_decision",
    "tengu_auto_mode_local_classifier_call",
    "tengu_auto_mode_local_classifier_switched_off",
    "tengu_auto_mode_simulation_mark_wrong",
    "tengu_auto_mode_denial_limit_exceeded",
    "tengu_auto_mode_destructive_mcp_rule_allow",
    "tengu_auto_mode_fallback_to_ask",
    "tengu_auto_mode_malformed_tool_input",
    "tengu_auto_mode_reissue_exempt",
    "tengu_auto_mode_bash_prescreen_retry",
    "tengu_auto_mode_env_onboarding_accept",
    "tengu_auto_mode_env_onboarding_dismiss",
    "tengu_auto_mode_env_onboarding_later",
    "tengu_auto_mode_env_onboarding_shown",
    "tengu_auto_mode_outcome",
    "tengu_auto_mode_setup_wizard_answers",
    "tengu_auto_mode_setup_wizard_resolved",
    "tengu_auto_mode_setup_wizard_shown",
    "tengu_auto_mode_subsequent_approval",
    "tengu_bridge_token_absence_classified",
    "tengu_insights_auto_mode_recommendation",
    "tengu_brief_mode_enabled",
    "tengu_brief_mode_toggled",
    "tengu_brief_send",
    "tengu_cancel",
    "tengu_compact_after_prompt_too_long",
    "tengu_compact_failed",
    "tengu_copper_lantern",
    "tengu_deferred_tools_pool_change",
    "tengu_mcp_instructions_pool_change",
    "tengu_exit",
    "tengu_flicker",
    "tengu_headless_mcp_first_turn_join",
    "tengu_headless_mcp_launch_named_wait",
    "tengu_headless_mcp_prewait",
    "tengu_init",
    "tengu_mcp_degraded",
    "tengu_mcp_drive_file_reference_upload",
    "tengu_mcp_drive_file_reference_availability",
    "tengu_mcp_gmail_attachment_delivered",
    "tengu_mcp_gmail_attachment_not_saved",
    "tengu_mcp_gmail_attachment_used",
    "tengu_mcp_gmail_attachment_used_by_read",
    "tengu_mcp_gmail_attachment_used_by_shell",
    "tengu_mcp_gmail_attachment_used_by_send",
    "tengu_mcp_gmail_attachment_used_by_other",
    "tengu_mcp_gmail_get_message_not_read",
    "tengu_mcp_gmail_attachment_not_read",
    "tengu_mcp_gmail_file_reference_upload",
    "tengu_mcp_m365_file_reference_upload",
    "tengu_mcp_m365_read",
    "tengu_mcp_m365_read_retyped_likely",
    "tengu_mcp_m365_file_ask_availability",
    "tengu_mcp_m365_file_used",
    "tengu_mcp_m365_file_used_by_read",
    "tengu_mcp_m365_file_used_by_shell",
    "tengu_mcp_m365_file_used_by_send",
    "tengu_mcp_m365_file_used_by_other",
    "tengu_mcp_drive_download_kept_in_conversation",
    "tengu_mcp_drive_download_saved_as_text",
    "tengu_mcp_drive_download_cut_not_saved",
    "tengu_mcp_drive_download_save_failed",
    "tengu_mcp_drive_download_not_read_over_cap",
    "tengu_mcp_drive_download_not_read_malformed",
    "tengu_mcp_drive_download_retyped_likely",
    "tengu_mcp_first_tools_list",
    "tengu_mcp_list_changed",
    "tengu_mcp_listen_reopen",
    "tengu_mcp_message_stream_outcome",
    "tengu_mcp_listing_prior_rejected",
    "tengu_mcp_project_servers_approved",
    "tengu_mcp_sdk_generation",
    "tengu_mcp_server_connection_failed",
    "tengu_mcp_server_connection_succeeded",
    "tengu_mcp_tools_refreshed_mid_turn",
    "tengu_mcp_tripwire",
    "tengu_model_catalog_compare",
    "tengu_model_fallback_triggered",
    "tengu_live_model_switch",
    "tengu_refusal_fallback_triggered",
    "tengu_refusal_fallback_prompt_shown",
    "tengu_refusal_fallback_prompt_choice",
    "tengu_refusal_fallback_preference_prompt",
    "tengu_refusal_fallback_setting_changed",
    "tengu_refusal_fallback_suppressed",
    "tengu_refusal_fallback_dialog_suppressed",
    "tengu_refusal_fallback_supersedes",
    "tengu_refusal_fallback_route_declined",
    "tengu_refusal_fallback_notice_collapsed",
    "tengu_convolute_arcades_retry",
    "tengu_convolute_arcades_retry_outcome",
    "tengu_rotunda_pennant_applied",
    "tengu_rotunda_pennant_malformed",
    "tengu_rotunda_pennant_strip",
    "tengu_rotunda_pennant_credit_echoed",
    "tengu_rotunda_pennant_tools",
    "tengu_rotunda_pennant_chain_exhausted",
    "tengu_rotunda_pennant_esc",
    "tengu_refusal_retraction_evicted",
    "tengu_refusal_retraction_late_drop",
    "tengu_refusal_retraction_orphan_tool_result",
    "tengu_refusal_retraction_truncation_harvest",
    "tengu_refusal_retraction_unauthenticated_signal",
    "tengu_propose_skills",
    "tengu_propose_skills_kept_lines",
    "tengu_propose_skills_read_check",
    "tengu_oauth_error",
    "tengu_oauth_success",
    "tengu_oauth_token_refresh_failure",
    "tengu_oauth_token_refresh_success",
    "tengu_oauth_token_refresh_lock_acquiring",
    "tengu_oauth_token_refresh_lock_acquired",
    "tengu_oauth_token_refresh_starting",
    "tengu_oauth_token_refresh_lock_releasing",
    "tengu_oauth_token_refresh_lock_released",
    "tengu_oauth_token_refresh_lock_dead_holder_takeover",
    "tengu_policy_limits_cache_state_at_first_prompt",
    "tengu_policy_limits_fetch",
    "tengu_policy_limits_verdict_recovered",
    "tengu_projects_write_text_in_view",
    "tengu_ptl_surfaced_to_user",
    "tengu_query_error",
    "tengu_remote_tool_targets",
    "tengu_remote_tool_forward",
    "tengu_remote_tool_serve",
    "tengu_remote_tool_restart_adoption",
    "tengu_remote_tool_restart_adoption_dropped",
    "tengu_remote_tool_restart_adoption_unroutable",
    "tengu_remote_tool_verdict_hold",
    "tengu_remote_stream_regained",
    "tengu_sdk_oauth_refresh_unfulfilled",
    "tengu_rc_pill_clicked",
    "tengu_ranch_rc_shown",
    "tengu_ranch_rc_link_shown",
    "tengu_ccr_init_park_report",
    "tengu_orphaned_permission_applied",
    "tengu_orphaned_permission_closed_unrun",
    "tengu_orphaned_permission_unapplied_turn_end",
    "tengu_orphaned_permission_unapplied_turn_resumed",
    "tengu_turn_handoff_run",
    "tengu_turn_handoff_flag_wait",
    "tengu_turn_handoff_files_by_name",
    "tengu_turn_handoff_files_by_name_refresh",
    "tengu_turn_handoff_carried_writes",
    "tengu_turn_handoff_expired",
    "tengu_rewind_conversation_expired",
    "tengu_pending_action_republished",
    "tengu_resume_interrupted_turn",
    "tengu_resume_parked_permission",
    "tengu_resume_rescue_yield",
    "tengu_resume_stale_prompt_cancel",
    "tengu_resume_stale_turn_suppressed",
    "tengu_unattended_start",
    "tengu_request_user_dialog_implicit_cancel",
    "tengu_request_user_dialog_late_answer",
    "tengu_request_user_dialog_left_up",
    "tengu_request_user_dialog_requires_action",
    "tengu_request_user_dialog_response_ignored",
    "tengu_request_user_dialog_timeout",
    "tengu_chrome_setup_offered",
    "tengu_review_remote_teleport_failed",
    "tengu_supported_dialog_kinds_restored",
    "tengu_sdk_init_handshake",
    "tengu_sdk_mcp_false_unavailable",
    "tengu_sdk_result",
    "tengu_shutdown_pending_state",
    "tengu_sdk_schema_violation",
    "tengu_sdk_session_crash",
    "tengu_sdk_stall",
    "tengu_sdk_ttft",
    "tengu_session_file_read",
    "tengu_started",
    ...x.map(([e]) => e),
    ...L.map(([e]) => e),
    "tengu_tool_use_error",
    "tengu_tool_use_granted_in_prompt_permanent",
    "tengu_transcript_write_failed",
    "tengu_transcript_writer_recovered",
    "tengu_persistence_suppressed",
    "tengu_tool_use_granted_in_prompt_temporary",
    "tengu_tool_use_not_loaded",
    "tengu_tool_use_not_loaded_check_failed",
    "tengu_tool_use_rejected_in_prompt",
    "tengu_tool_use_success",
    "tengu_bash_tool_command_executed",
    "tengu_bash_tool_command_failed",
    "tengu_background_shell_settled",
    "tengu_uncaught_exception",
    "tengu_uncaught_exception_loop",
    "tengu_unhandled_rejection",
    "tengu_voice_recording_started",
    "tengu_voice_toggled",
    "tengu_vscode_sdk_stream_ended_no_result",
    "tengu_team_mem_sync_started",
    "tengu_timer",
    "tengu_bg_adopt",
    "tengu_bg_agent_action",
    "tengu_bg_agent_dispatch",
    "tengu_bg_agent_notification",
    "tengu_bg_agent_terminal",
    "tengu_bg_attach",
    "tengu_bg_attach_first_frame",
    "tengu_bg_attach_legacy_autorespawn",
    "tengu_bg_attach_outcome",
    "tengu_bg_classify",
    "tengu_bg_daemon_cold_start_ask",
    "tengu_bg_daemon_cold_start_ask_answer",
    "tengu_bg_daemon_install",
    "tengu_bg_daemon_service_poll_fallthrough",
    "tengu_bg_daemon_service_stale_exec",
    "tengu_bg_daemon_spawn_failed",
    "tengu_bg_daemon_wmi_fallback",
    "tengu_bg_daemon_zombie_false_positive",
    "tengu_bg_daemon_zombie_restart",
    "tengu_bg_dispatch",
    "tengu_bg_dispatch_fallback",
    "tengu_bg_dispatch_low_mem",
    "tengu_bg_dispatch_rescued",
    "tengu_bg_dispatch_sigkill_escalate",
    "tengu_bg_dispatch_stale_drop",
    "tengu_bg_exec_no_lastline",
    "tengu_bg_killjob_ctrl_fallback",
    "tengu_bg_orphan_reap",
    "tengu_bg_proto_mismatch",
    "tengu_bg_pty_unavailable",
    "tengu_bg_reply_outcome",
    "tengu_bg_respawn",
    "tengu_bg_respawn_downgrade_refused",
    "tengu_bg_respawn_exhausted",
    "tengu_bg_respawn_resume_conflict",
    "tengu_bg_prewarm_burst",
    "tengu_bg_respawn_stale",
    "tengu_bg_respawn_unconfirmed_bail",
    "tengu_bg_retired",
    "tengu_bg_roster_parse_failed",
    "tengu_bg_skew_nudge",
    "tengu_bg_spare_claim",
    "tengu_bg_spare_claim_fail",
    "tengu_bg_spare_spawn",
    "tengu_bg_worker_exit",
    "tengu_bg_worker_spawn",
    "tengu_daemon_config_reload",
    "tengu_daemon_exit",
    "tengu_daemon_idle_exit",
    "tengu_daemon_lease",
    "tengu_daemon_peer_uid_reject",
    "tengu_daemon_self_restart_on_upgrade",
    "tengu_daemon_start",
    "tengu_daemon_startup_crash",
    "tengu_daemon_upgrade_refused_stale_binary",
    "tengu_daemon_worker_crash",
    "tengu_daemon_worker_permanent_exit",
    "tengu_daemon_yield",
    "tengu_daemon_yield_takeover",
  ]),
  Y = new Map([
    ["tengu_auto_mode_context_withheld", new Set(["reason", "bytes"])],
    [
      "tengu_background_shell_settled",
      new Set([
        "outcome",
        "stop_cause",
        "stopped_by",
        "trigger",
        "subagent_owned",
        "unwanted",
        "elapsed_ms",
        "requested_timeout_ms",
        "deadline_ms",
        "duration_ms",
        "stall_duration_ms",
        "limit",
        "command_cpu_user_ms",
        "command_cpu_system_ms",
        "command_proc_cpu_ms",
        "command_cgroup_cpu_ms",
        "command_cgroup_shared",
        "reason",
        "left_process_running",
        "bash_command_kinds",
        "bash_programs",
        "bash_test_scope",
        "bash_test_outcome",
        "output_total_bytes",
        "triggered_note_rule",
        "triggered_note_shown",
        "repeat",
        "compared_statements",
        "changed_since_that_call",
        "earlier_test_outcome",
        "other_agent_repeat",
        "other_agent_direction",
        "other_agent_call_running_at_start",
        "other_agent_seconds_since_that_call",
        "other_agent_lines_changed_since_that_call",
        "other_agent_possible_writes_since_that_call",
        "other_agent_tests_and_lints_since_that_call",
        "other_agent_changed_since_that_call",
        "other_agent_earlier_call_outcome",
        "other_agent_ran_it_last",
        "other_agent_earlier_result_in_context",
      ]),
    ],
    ...x,
    ...L,
    [
      "tengu_remote_tool_forward",
      new Set([
        "outcome",
        "transport",
        "host_kind",
        "host_platform",
        "approval",
        "approved_by",
        "adoption",
        "refusal_code",
        "interface_agreed_version",
        "reconcile_trigger",
        "reconcile_result",
        "duration_ms",
        "time_to_terminal_ms",
        "asking_ms",
        "leg1_request_form",
        "leg1_call_envelope_why",
        "leg2_request_form",
        "leg2_call_envelope_why",
      ]),
    ],
    [
      "tengu_remote_tool_serve",
      new Set([
        "outcome",
        "op",
        "transport",
        "policy",
        "refusal_code",
        "failure_code",
        "disposition",
        "second_leg",
        "approval_decision",
        "session_interface",
        "interface_fit",
        "request_form",
        "shared_request_refusal",
        "part",
      ]),
    ],
    [
      "tengu_remote_tool_restart_adoption",
      new Set(["journaled", "adoptable", "adopted", "park_adopted"]),
    ],
    ["tengu_remote_tool_restart_adoption_dropped", new Set(["dropped"])],
    [
      "tengu_remote_tool_restart_adoption_unroutable",
      new Set(["where", "route_code", "parked_at_restart"]),
    ],
    [
      "tengu_remote_tool_verdict_hold",
      new Set([
        "mode",
        "scope",
        "decision",
        "outcome",
        "serverClassifierNoVerdict",
        "serverClassifierRole",
        "serverClassifierOffReason",
        "reason",
        "permissionMode",
        "isSubagent",
        "wait_ms",
      ]),
    ],
  ]);
function Z(e, n) {
  let r = Y.get(e);
  if (r === void 0) return n;
  return Pr(n, (o, a) => a === "sample_rate" || r.has(a));
}
var X = [
  "arch",
  "attach_cold",
  "daemon_booted",
  "first_frame_kind",
  "surface",
  "via",
  "classifierModel",
  "classifierStage",
  "clientType",
  "decision",
  "entrypoint",
  "errorKind",
  "errorType",
  "failureKind",
  "fastPath",
  "sessionKind",
  "dispatchEntrypoint",
  "http_status_range",
  "http_status",
  "model",
  "op",
  "outcome",
  "platform",
  "projectsRole",
  "remoteControlLane",
  "projectsSession",
  "provider",
  "reason",
  "replMode",
  "server_reason",
  "server_type",
  "source",
  "subscriptionType",
  "toolName",
  "uncoveredTailReason",
  "userBucket",
  "userType",
  "version",
  "versionBase",
];
function F(e) {
  return e.replace(/[A-Z]/g, (n) => `_${n.toLowerCase()}`);
}
var J = [
    "mcpServerName",
    "mcpServerBaseUrl",
    "mcpServerId",
    "toolUseContentLengths",
    "toolSchemaCharLengths",
    "toolSchemasHash",
    "errorMessageHash",
    "mcpServerKeyHash",
    "mcpToolName",
    "attributionMcpServer",
    "attributionMcpTool",
    "attributionSkill",
    "attributionMcpServerHash",
    "attributionMcpToolHash",
    "attributionSkillHash",
    "attributionAgentHash",
    "attributionPluginHash",
    "mcpServerNameHash",
    "mcpToolNameHash",
    "toolNameHash",
    "errorDetailsHash",
    "rh",
    "baseUrl",
    "skill_name_hash",
    "plugin_id_hash",
    "plugin_name_redacted",
    "marketplace_name_redacted",
    "plugin_name_previous",
    "plugin_id_hash_previous",
    "server_plugin_id",
    "plugin_version_sha",
    "skill_name_hashes",
    "parent_skill_name_hash",
    "item_name_hash",
    "pluginHookCountsByHash",
    "attachmentTypesSeen",
    "bash_places",
  ],
  Q = new Set(J.map(F)),
  ee = new Set(["is_repl_mode", "repl_mode_decision"]);
function te(e, n) {
  for (let r of Object.keys(e)) {
    let o = n(r);
    if (Q.has(o) || ee.has(o)) delete e[r];
    else if (o === "bash_command_kinds") {
      let a = e[r];
      if (typeof a === "string")
        e[r] = a
          .split(",")
          .filter((u) => u !== "searches_whole_disk")
          .join(",");
    }
  }
}
function _e(e, n) {
  if (e.startsWith("mcp__")) return "mcp";
  if (n && !Xbl(e)) return "mcp";
  return e;
}
var ne = [
  "tengu_mcp_list_changed",
  "tengu_mcp_degraded",
  "tengu_mcp_server_connection_succeeded",
  "tengu_mcp_server_connection_failed",
  "tengu_mcp_first_tools_list",
  "tengu_mcp_listen_reopen",
  "tengu_mcp_message_stream_outcome",
];
function re(e) {
  return ne.includes(e);
}
var oe = 10,
  ae = 60000,
  se = 200;
function ie(e, n, r, o) {
  let a = `${n}\x00${r ?? "(no-server)"}`,
    u = e.get(a);
  if (!u) {
    if (e.size >= se) {
      let c = e.keys().next().value;
      if (c !== void 0) e.delete(c);
    }
    ((u = { windowStartMs: 0, forwardedInWindow: 0, droppedSinceForward: 0 }),
      e.set(a, u));
  }
  if (o - u.windowStartMs >= ae)
    ((u.windowStartMs = o), (u.forwardedInWindow = 0));
  if (u.forwardedInWindow >= oe)
    return (
      u.droppedSinceForward++,
      { admitted: !1, droppedSinceLastForward: 0 }
    );
  u.forwardedInWindow++;
  let g = u.droppedSinceForward;
  return (
    (u.droppedSinceForward = 0),
    { admitted: !0, droppedSinceLastForward: g }
  );
}
async function ue(e, n) {
  if (n.isPausedByEgressRefusal()) return !1;
  let r = n.gzip !== "refused" && (s.CLAUDE_CODE_GZIP_DATADOG_LOGS ?? pn());
  try {
    await oc.post(k, r ? q(_(e)) : e, {
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": xps,
        ...(r && { "Content-Encoding": "gzip" }),
      },
      timeout: W,
    });
  } catch (o) {
    t(`Failed to flush logs to Datadog: ${o}`, { level: "error" });
    let a = dd(o) ? o.response : void 0,
      u = s0(o);
    if (
      (a && RY(a.status, a.headers)) ||
      (a?.status === 403 && a.headers["x-proxy-error"] !== void 0) ||
      (u?.connectStatus === 403 &&
        (u.headers["x-deny-reason"] ?? "host_not_allowed") ===
          "host_not_allowed") ||
      (pn() && w(o) === "ENOTFOUND" && (await I()))
    )
      return (
        t(
          `Logs are paused for ${S / 60000} minutes and dropped unsent until then: a proxy refused the post to the logs host, or the host's name was not found on a second lookup`,
          { level: "warn" },
        ),
        (n.egressRefusalUnconfirmed = !1),
        (n.egressRefusedAt = Date.now()),
        !1
      );
    let g = a?.status;
    if (!r || g === 429) return !1;
    let c = g === void 0 ? "no_response" : `http_${g}`;
    return (
      t(
        `Datadog did not take a gzipped log batch (${c}); resending it uncompressed, and sending later batches from this process uncompressed`,
        { level: "error" },
      ),
      (n.gzip = "refused"),
      (n.unreportedGzipFailure ??= c),
      n.postCurrent(e)
    );
  }
  if (n.unreportedGzipFailure !== void 0) {
    let o = n.unreportedGzipFailure;
    ((n.unreportedGzipFailure = void 0), l("datadog_logs_gzip", o));
  }
  if (r && n.gzip === "untried")
    ((n.gzip = "accepted"), f("datadog_logs_gzip"));
  return !0;
}
var de = 30,
  le = 2048;
class O {
  datadogInitialized = null;
  egressRefusedAt = -1 / 0;
  egressRefusalUnconfirmed = !1;
  lookAheadStarted = !1;
  gzip = "untried";
  unreportedGzipFailure;
  builtUnredacted = new WeakSet();
  sender = Rps({
    maxBatchSize: K,
    getFlushIntervalMs: C,
    post: async (e) => {
      try {
        await this.postCurrent(e);
      } catch (n) {
        t(`Datadog log flush threw: ${n}`, { level: "error" });
      }
    },
  });
  isPausedByEgressRefusal() {
    let e = Date.now() - this.egressRefusedAt;
    if (e < 0) return ((this.egressRefusedAt = -1 / 0), !1);
    return e < (this.egressRefusalUnconfirmed ? A() : S);
  }
  async askResolverAheadOfLogs() {
    if (
      (this.lookAheadStarted && this.egressRefusedAt === -1 / 0) ||
      this.isPausedByEgressRefusal()
    )
      return;
    let e = this.egressRefusedAt !== -1 / 0,
      n = e && this.egressRefusalUnconfirmed;
    ((this.lookAheadStarted = !0), (this.egressRefusedAt = -1 / 0));
    try {
      if (!pn() || !P()) return;
      let [r, o] = await Promise.all([
        B.lookup(new URL(k).hostname, { hints: z }).then(() => "found", w),
        I(),
      ]);
      if (!P() || this.isPausedByEgressRefusal()) return;
      if (r !== "ENOTFOUND" || !o) {
        if (n)
          l(
            "logs_host_lookup",
            r === "found" ? "name_found" : "no_clear_answer",
          );
        return;
      }
      ((this.egressRefusalUnconfirmed = !e),
        (this.egressRefusedAt = Date.now()));
      let a = e ? `${S / 60000} minutes` : `${A() / 1000} seconds`;
      t(
        `Logs are paused for ${a} and dropped until then: DNS gives no address for the logs host`,
        { level: "warn" },
      );
    } catch (r) {
      i(r);
    }
  }
  postCurrent(e) {
    if (o5()) return Promise.resolve(!1);
    let n = s8e() ? e.filter((r) => !this.builtUnredacted.has(r)) : e;
    return n.length > 0 ? ue(n, this) : Promise.resolve(!1);
  }
  initializeDatadog = ao(async () => {
    if (z_() || FSl()) return ((this.datadogInitialized = !1), !1);
    try {
      return ((this.datadogInitialized = !0), !0);
    } catch (e) {
      return (i(e), (this.datadogInitialized = !1), !1);
    }
  });
  getUserBucket = ao(() => {
    let e = HF(),
      n = U("sha256").update(e).digest("hex");
    return parseInt(n.slice(0, 8), 16) % de;
  });
  peerRateWindows = new Map();
  #e = new Map();
  get snakeCaseKeyCount() {
    return this.#e.size;
  }
  toSnakeCase = (e) => {
    let n = this.#e.get(e);
    if (n === void 0) {
      if (((n = F(e)), this.#e.size < le)) this.#e.set(e, n);
    }
    return n;
  };
}
var D = new j(() => new O());
function IHi() {
  let e = D.of(N().host);
  (e.initializeDatadog.cache?.clear?.(), (e.datadogInitialized = null));
}
async function Cyr() {
  await D.of(N().host).sender.shutdown();
}
function ge(e) {
  return e.replace(
    /^(\d+\.\d+\.\d+-(?:dev|engine|aot)\.\d{8})\.t\d+\.sha[a-f0-9]+$/,
    "$1",
  );
}
function ce(e, { isTrustedAnt: n, onAnthropicHost: r }) {
  if (typeof e !== "string") return null;
  if (n) return e;
  if (e === lq && r) return e;
  if (!e.toLowerCase().includes("claude")) return null;
  let o = _t(jt(e), { identity: !0 });
  return o in VWe ? o : "other";
}
function pe(e, n) {
  let r = n.feature_name;
  if (e !== "tengu_feature_ok" || r === void 0) return n;
  let o = b("tengu_agile_glade", null),
    a = Me(o) ? o[r] : void 0;
  if (typeof a !== "number") return n;
  let u = n.sample_rate,
    g = typeof u === "number" && u > 0 && u < 1 ? u : 1,
    c = T$n(a / g);
  if (c === null) return n;
  if (c === 0) return null;
  return { ...n, sample_rate: a };
}
async function CNn(e, n) {
  if (Ee() !== "firstParty") return;
  let r = D.of(N().host),
    o = r.datadogInitialized;
  if (o === null) o = await r.initializeDatadog();
  if (!o || !V.has(e)) return;
  if (r.isPausedByEgressRefusal()) return;
  let a = pe(e, n);
  if (a === null) return;
  let u;
  if (re(e)) {
    let g = a.mcpServerKeyHash ?? a.mcpServerBaseUrl,
      c = ie(
        r.peerRateWindows,
        e,
        g === void 0 ? void 0 : String(g),
        Date.now(),
      );
    if (!c.admitted) return;
    if (c.droppedSinceLastForward > 0) u = c.droppedSinceLastForward;
  }
  r.askResolverAheadOfLogs();
  try {
    let g = await Vbs({ model: a.model, betas: a.betas }),
      {
        envContext: c,
        head_sha: T,
        is_clean_tree_at_start: h,
        changed_file_count_at_start: me,
        untracked_file_count_at_start: fe,
        ...M
      } = g,
      d = {
        ...M,
        ...c,
        ...Z(e, a),
        userBucket: r.getUserBucket(),
        ...(u !== void 0 && { droppedSinceLastForward: u }),
      };
    if ((te(d, r.toSnakeCase), typeof d.toolName === "string"))
      d.toolName = _e(d.toolName, d.isMcp === !0);
    if (d.model !== void 0) {
      let p = la(),
        m = ce(d.model, { isTrustedAnt: !1, onAnthropicHost: p });
      if (m === null) return;
      d.model = m;
    }
    if (typeof d.version === "string") d.version = ge(d.version);
    if (d.status !== void 0 && d.status !== null) {
      let p = String(d.status);
      d.http_status = p;
      let m = p.charAt(0);
      if (m >= "1" && m <= "5") d.http_status_range = `${m}xx`;
      delete d.status;
    }
    let R = s8e(),
      y = R ? DSl(d) : d,
      E = {
        ddsource: "nodejs",
        ddtags: [
          `event:${e}`,
          ...X.filter((p) => y[p] !== void 0 && y[p] !== null).map(
            (p) => `${r.toSnakeCase(p)}:${y[p]}`,
          ),
        ].join(","),
        message: e,
        service: "claude-code",
        hostname: "claude-code",
        env: "external",
      };
    for (let [p, m] of Object.entries(y))
      if (m !== void 0 && m !== null) E[r.toSnakeCase(p)] = m;
    if (!R) r.builtUnredacted.add(E);
    r.sender.enqueue(E);
  } catch (g) {
    i(g);
  }
}
function A() {
  return C() + 5000;
}
function C() {
  return s.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || G;
}
async function I() {
  try {
    return (
      await new H({ timeout: 1000, tries: 1 }).resolve4(new URL(k).hostname),
      !1
    );
  } catch (e) {
    return w(e) === "ENOTFOUND";
  }
}
function P() {
  return sle(k) === void 0;
}
export { Rps, xps, IHi, Cyr, CNn };
