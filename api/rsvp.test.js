import {test} from 'node:test';
import assert from 'node:assert/strict';
import handler,{validate} from './rsvp.js';
test('attendance and counts must agree',()=>{assert.ok(validate({name:'Guest',attendance:'yes',guests:2}));assert.ok(validate({name:'Guest',attendance:'no',guests:0}));for(const body of [{name:' ',attendance:'yes',guests:1},{name:'Guest',attendance:'no',guests:2},{name:'Guest',attendance:'yes',guests:99},{name:'Guest',attendance:'yes',guests:1,message:{}}])assert.equal(validate(body),false)});
test('unconfigured backend never claims to save a reply',async()=>{const saved={...process.env};delete process.env.SUPABASE_URL;delete process.env.SUPABASE_SERVICE_ROLE_KEY;const res={setHeader(){},status(c){this.code=c;return this},json(body){this.body=body}};await handler({method:'POST',body:{name:'Guest',attendance:'yes',guests:1}},res);assert.equal(res.code,503);assert.ok(res.body.error);Object.assign(process.env,saved)});
