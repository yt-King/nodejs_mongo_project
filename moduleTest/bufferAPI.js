/**
 * buffer是用来处理二进制数据流的
 * buffer示例类似数组，大小是固定的
 * 使用c++代码在v8堆外分配的物理内存
 * buffer是一个全局变量
 */

 // 创建长度为 10 的以零填充的缓冲区。
 const buf1 = Buffer.alloc(10);
 console.log(buf1)

 // 创建长度为 10 的缓冲区，
 // 使用值为 `1` 的字节填充。
 const buf2 = Buffer.alloc(10, 1);
 console.log(buf2)

 // 创建长度为 10 的未初始化的缓冲区。
 // 这比调用 Buffer.alloc() 快，
 // 但返回的缓冲区实例可能包含旧数据，
 // 需要使用 fill()、write() 、
 // 或其他填充缓冲区内容的函数重写。
 const buf3 = Buffer.allocUnsafe(10);
 console.log(buf2)

 // 创建包含字节 [1, 2, 3] 的缓冲区。
 const buf4 = Buffer.from([1, 2, 3]);
  console.log(buf4)

 // 创建包含字节 [1, 1, 1, 1] 的缓冲区，
 // 所有条目都使用 `(value & 255)` 截断以符合范围 0–255。
 const buf5 = Buffer.from([257, 257.5, -255, '1']);
 console.log(buf5)

 // 创建包含字符串 'tést' 的 UTF-8 编码字节的缓冲区：
 // [0x74, 0xc3, 0xa9, 0x73, 0x74]（十六进制）
 // [116, 195, 169, 115, 116]（十进制）
 const buf6 = Buffer.from('tést');
 console.log(buf6)

 // 创建包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的缓冲区。
 const buf7 = Buffer.from('tést', 'latin1');
 console.log(buf7)
