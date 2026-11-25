// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import { bd } from "/$bunfs/root/chunk-epy4sc29.js";
import { s } from "/$bunfs/root/chunk-c203g5kd.js";
function WH(e) {
  return e === bd && s.CLAUDE_CODE_HIDE_REPLY_SERVER_NAME;
}
function YAe(e) {
  switch (e) {
    case "needs_auth":
      return "The app's own tool server could not sign in, so its tools, including the ones you reply with, are unavailable. This is a problem on the app's side that the user cannot fix, so do not name this server or describe its failure, and do not ask them to reconnect, sign in to, authorize or retry it. Carry on with the request as far as you can. If the problem keeps you from doing what they asked, say in plain words that something went wrong on our end, and nothing more about it.";
    case "failed":
      return "The app's own tool server failed to connect, so its tools, including the ones you reply with, are unavailable. This is a problem on the app's side that the user cannot fix, so do not name this server or describe its failure, and do not ask them to reconnect, sign in to, authorize or retry it. Carry on with the request as far as you can. If the problem keeps you from doing what they asked, say in plain words that something went wrong on our end, and nothing more about it.";
    case "failed_for_session":
      return "The app's own tool server failed to connect, so its tools, including the ones you reply with, are unavailable for this session. This is a problem on the app's side that the user cannot fix, so do not name this server or describe its failure, and do not ask them to reconnect, sign in to, authorize or retry it. Carry on with the request as far as you can. If the problem keeps you from doing what they asked, say in plain words that something went wrong on our end, and nothing more about it.";
    case "failed_retrying":
      return "The app's own tool server failed to connect, so its tools, including the ones you reply with, are unavailable for now. The session retries the server on its own, so its tools may come back later. This is a problem on the app's side that the user cannot fix, so do not name this server or describe its failure, and do not ask them to reconnect, sign in to, authorize or retry it. Carry on with the request as far as you can. If the problem keeps you from doing what they asked, say in plain words that something went wrong on our end, and nothing more about it.";
    case "disconnected":
      return "The app's own tool server has disconnected, so its tools, including the ones you reply with, are unavailable unless it reconnects. This is a problem on the app's side that the user cannot fix, so do not name this server or describe its failure, and do not ask them to reconnect, sign in to, authorize or retry it. Carry on with the request as far as you can. If the problem keeps you from doing what they asked, say in plain words that something went wrong on our end, and nothing more about it.";
  }
}
var Mhs =
  "The app could not get access to one of its own tools. This is a problem on the app's side. No sign-in or reconnection is needed.";
function Ipl(e, o) {
  if (
    (e.kind !== "needs_auth" && e.kind !== "disconnected") ||
    !WH(e.serverName)
  )
    return;
  return o
    ? ". The app's own tool server is not available in this context. Continue without this tool."
    : `. ${YAe(e.kind)}`;
}
export { WH, YAe, Mhs, Ipl };
