// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{s}from"/$bunfs/root/chunk-gvhwnc7g.js";import{x}from"/$bunfs/root/chunk-kg2zehkt.js";import{homedir as r}from"os";import{join as o}from"path";function _Js(){if(x()==="windows"&&s.APPDATA)return o(s.APPDATA,"gcloud");return o(r(),".config","gcloud")}function Vqr(){return s.CLOUDSDK_CONFIG||_Js()}
export{_Js,Vqr};
