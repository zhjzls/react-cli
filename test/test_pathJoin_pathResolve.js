const path = require('path')

console.log('resolve不传入参数', path.resolve());                                           // E:\CODE\react\react-cli\test\
// console.log('join不传入参数', path.join());


console.log('resolve传入参数 [/bar, /foo]', path.resolve("/bar", "/foo"));                  // E:/foo
console.log('resolve传入参数 [/bar, /foo, /zoo]', path.resolve("/bar", "/foo", "/zoo"));    // E:/zoo
console.log('resolve传入参数 [/bar, /foo, zoo]', path.resolve("/bar", "/foo", "zoo"));      // E:/foo/zoo
console.log('resolve传入参数 [/bar, /foo, ..]', path.resolve("/bar", "/foo", ".."));        // E:
console.log('resolve传入参数 [./bar, ./foo]', path.resolve("./bar", "./foo"));              // E:\CODE\react\react-cli\test\bar\foo
console.log('resolve传入参数 [bar, ./foo]', path.resolve("bar", "./foo"));                  // E:\CODE\react\react-cli\test\bar\foo
console.log('resolve传入参数 [/bar, ./foo]', path.resolve("/bar", "./foo"));                // E:\bar\foo
console.log('resolve传入参数 [./bar, /foo, zoo]', path.resolve("/bar", "/foo", "zoo"));     // E:\foo\zoo
console.log('resolve传入参数 [./bar, /foo, ./zoo]', path.resolve("/bar", "/foo", "./zoo")); // E:\foo\zoo

console.log("resolve将传入的所有pathSegments 最终处理为一个绝对路径，解析时从后往前，如果遇到绝对路径(/<path>), 直接返回该路径； 如果遇到相对路径('./<path>', <path>), 则继续向前解析，直到遇到绝对路径的pathSegment，如果传入的path片段中不含绝对路径，则将当前工作目录作为默认绝对路径传入来解析")
console.log("")
console.log('\n')

// console.log('join传入参数 [/bar, /foo]', path.join("/bar", "/foo"));                        // /bar/foo
// console.log('join传入参数 [/bar, /foo, ./zoo]', path.join("/bar", "/foo", "./zoo"));         // /bar/foo/zoo
// console.log('join传入参数 [/bar, /foo, /zoo]', path.join("/bar", "/foo", "/zoo"));          // /bar/foo/zoo
// console.log('join传入参数 [/bar, /foo, zoo]', path.join("/bar", "/foo", "zoo"));            // /bar/foo/zoo
// console.log('join传入参数 [/bar, /foo, ..]', path.join("/bar", "/foo", ".."));              // /bar 
// console.log('join传入参数 [/bar, /foo, ../zoo]', path.join("/bar", "/foo", ".."));          // /bar/zoo 

// console.log('join传入参数 [bar, /foo]', path.join("bar", "/foo"));          // bar/zoo
// console.log('join传入参数 [/bar, /foo]', path.join("/bar", "/foo"));          // /bar/zoo
// console.log('join传入参数 [./bar, /foo]', path.join("./bar", "/foo"));          // bar/zoo
// console.log('join传入参数 [../bar, /foo]', path.join("../bar", "/foo"));          // ../bar/foo
