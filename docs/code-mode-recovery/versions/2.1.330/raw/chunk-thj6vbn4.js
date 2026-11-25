// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.330
import{D}from"/$bunfs/root/chunk-jv7av99m.js";import{i}from"/$bunfs/root/chunk-k449cc64.js";import{ce}from"/$bunfs/root/chunk-865at33z.js";import{tX}from"/$bunfs/root/chunk-hrmqj4hy.js";import{IYe}from"/$bunfs/root/chunk-vcnr02by.js";import{nZ}from"/$bunfs/root/chunk-zddv3vvj.js";import{fSr}from"/$bunfs/root/chunk-z2xw6net.js";import{yd}from"/$bunfs/root/chunk-59mwkeke.js";function n(){try{return nZ()&&fSr()}catch(r){return i(D(r)),!0}}function K2(r){try{let o=ce(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&tX()&&fSr()}catch(o){return i(D(o)),!0}}function kDt({isRunReached:r}){try{return n()||ce().loadedModules.some((o)=>!yd(o)&&IYe(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return i(D(o)),!0}}function h6(){let r=ce();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}
export{K2,kDt,h6};
