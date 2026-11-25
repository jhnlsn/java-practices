// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{s}from"/$bunfs/root/chunk-c203g5kd.js";import{x}from"/$bunfs/root/chunk-cg8dqz0a.js";import{homedir as r}from"os";import{join as o}from"path";function cai(){if(x()==="windows"&&s.APPDATA)return o(s.APPDATA,"gcloud");return o(r(),".config","gcloud")}function BXr(){return s.CLOUDSDK_CONFIG||cai()}
export{cai,BXr};
