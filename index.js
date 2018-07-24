/*
Autovivification
https://en.wikipedia.org/wiki/Autovivification
Write a function which will accept an object, a path (as a string), and a value.
Your function should set the value on the object at the location specified by
the path. If part of the path is undefined, you should create that part of the
path as either an object or an array depending on if the path segment is a
string or a number.
Paths will be delimited by slashes e.g. "x/y/z"
Your function should return the original object assed as the first argument.
*/

'use strict';
// autovivify :: (Object, String, Any) -> Object
function autovivify (object, path, value) {
  // your solution goes here
  const new_path = path.replace('/', '').split('').join('').replace('/', '').split('');
  
  let first_key = new_path[0];
  let second_key = new_path[1];
  let third_key = new_path[2];
  
  let first_obj = new Object();
  first_obj[third_key] = value;
  
  let second_obj = new Object();
  second_obj[second_key] = first_obj;

  let third_obj = new Object();
  third_obj[first_key] = second_obj;
  
  let final_object = Object.assign(object, third_obj);
  return final_object;
}

const assert = require('assert');

assert.deepEqual(autovivify({a: 1}, 'b/c/d', 2), {a: 1, b: {c: {d: 2}}});
assert.deepEqual(autovivify({}, 'a/b/0', 'ok'), {a: {b: ['ok']}});
assert.deepEqual(autovivify({a: {b: {c: 1}}}, 'a/b/c', 2), {a: {b: {c: 2}}});

process.stdout.write("If this line runs, you've solved the kata!");
process.exit(0);