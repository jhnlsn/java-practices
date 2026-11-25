// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.329
import{D}from"/$bunfs/root/chunk-avbzeyf3.js";import{i}from"/$bunfs/root/chunk-ht6e56zb.js";import{ce}from"/$bunfs/root/chunk-aq3ms068.js";import{Wie}from"/$bunfs/root/chunk-bj9p89mj.js";import{U5e}from"/$bunfs/root/chunk-q0j6490d.js";import{lJ}from"/$bunfs/root/chunk-c9fmfd5h.js";import{sfr}from"/$bunfs/root/chunk-c76p2516.js";import{yc}from"/$bunfs/root/chunk-gcxkm24x.js";function n(){try{return lJ()&&sfr()}catch(r){return i(D(r)),!0}}function Lj(r){try{let o=ce(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&Wie()&&sfr()}catch(o){return i(D(o)),!0}}function hOt({isRunReached:r}){try{return n()||ce().loadedModules.some((o)=>!yc(o)&&U5e(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return i(D(o)),!0}}function KG(){let r=ce();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}
export{Lj,hOt,KG};
