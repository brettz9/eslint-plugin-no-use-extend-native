'use strict';
import noUseExtendNativeRule from '../rules/no-use-extend-native';
import {RuleTester} from 'eslint';

let ruleTester = new RuleTester();

ruleTester.run('no-use-native-extend', noUseExtendNativeRule, {
  valid: [
    'gulp.task();',
    'Custom.prototype.custom',
    'Array.prototype.map',
    'Array.prototype.map.call([1,2,3], function (x) { console.log(x); });',
    '[].push(1);',
    '({}).toString();',
    '/match_this/.test();',
    '\'string\'.toString();',
    '(1).toFixed();',
    '1..toFixed();',
    '1.0.toFixed();',
    '(\'str\' + \'ing\').toString();',
    '(\'str\' + \'i\' + \'ng\').toString();',
    '(1 + 1).valueOf();',
    '(1 + 1 + 1).valueOf();',
    '(1 + \'string\').toString();',
    '(/regex/ + /regex/).toString();',
    '(/regex/ + 1).toString();',
    '([1] + [2]).toString();',
    '(function testFunction() {}).toString();',
    'new Array().toString();',
    'new ArrayBuffer().constructor();',
    'new Boolean().toString();',
    'new DataView().buffer();',
    'new Date().getDate();',
    'new Error().message();',
    'new Error().stack;',
    'new Float32Array().values();',
    'new Float64Array().values();',
    'new Function().toString();',
    'new Int16Array().values();',
    'new Int32Array().values();',
    'new Int8Array().values();',
    'new Map().clear();',
    'new Number().toString();',
    'new Object().toString();',
    'new Object().toString;',
    'new Promise().then();',
    'new RegExp().test();',
    'new Set().values();',
    'new String().toString();',
    'new Symbol().toString();',
    'new Uint16Array().values();',
    'new Uint32Array().values();',
    'new Uint8ClampedArray().values();',
    'new WeakMap().get();',
    'new WeakSet().has();',
    'new Array()[\'length\']',
    'new Array()[\'toString\']()'
  ].map(code => ({code})),
  invalid: [
    'Array.prototype.custom;',
    '[].length();',
    '\'unicorn\'.green;',
    '[].custom();',
    '({}).custom();',
    '/match_this/.custom();',
    '\'string\'.custom();',
    '(\'str\' + \'ing\').custom();',
    '(\'str\' + \'i\' + \'ng\').custom();',
    '(1 + \'ing\').custom();',
    '(/regex/ + \'ing\').custom();',
    '(1 + 1).toLowerCase();',
    '(1 + 1 + 1).toLowerCase();',
    '(function testFunction() {}).custom();',
    'new Array().custom();',
    'new ArrayBuffer().custom();',
    'new Boolean().custom();',
    'new DataView().custom();',
    'new Date().custom();',
    'new Error().custom();',
    'new Float32Array().custom();',
    'new Float64Array().custom();',
    'new Function().custom();',
    'new Int16Array().custom();',
    'new Int32Array().custom();',
    'new Int8Array().custom();',
    'new Map().custom();',
    'new Number().custom();',
    'new Object().custom();',
    'new Promise().custom();',
    'new RegExp().custom();',
    'new Set().custom();',
    'new String().custom();',
    'new Symbol().custom();',
    'new Uint16Array().custom();',
    'new Uint32Array().custom();',
    'new Uint8Array().custom();',
    'new Uint8ClampedArray().custom();',
    'new WeakMap().custom();',
    'new WeakSet().custom();',
    'new Array()[\'custom\']',
    'new Array()[\'custom\']()'
  ].map(code => ({
    code,
    errors: [{message: 'Avoid using extended native objects'}]
  }))
});
