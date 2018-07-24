# autovivify_challenge

  Write a function which will accept an object, a path (as a string), and a value.
  Your function should set the value on the object at the location specified by
  the path. If part of the path is undefined, you should create that part of the
  path as either an object or an array depending on if the path segment is a
  string or a number.
  Paths will be delimited by slashes e.g. "x/y/z"
  Your function should return the original object assed as the first argument.