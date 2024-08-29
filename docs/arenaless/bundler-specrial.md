---
title: 构建工具特性
sidebar_position: 6
---
# ArenaLess-Bunder的特性
ArenaLess使用ArenaLess-Bundler项目作为构建工具。[开源链接](https://github.com/Box3TRC/ArenaLess-Bundler/)。
## 介绍
ArenaLess-Bundler是一个基于Rollup的构建工具，可以直接在前端网页运行，为ArenaLess的使用进行优化，而且加了一些特性。

## 有哪些特性？
### 1. 网络导入（独有）
如果你用过`deno`，你会发现十分的熟悉。在ArenaLess中，你可以从URL或者`xxx:yyyy@...`中导入模块。
```typescript
import JSON5 from "npm:json5";
import JSON5 from "https://esm.sh/json5";
```
目前支持的前缀如下：
- `npm:...` -> `https://esm.sh/...`
- `jsr:...` -> `https://esm.sh/jsr/...`
- `http:`和`https:`

### 2. 虚拟的文件系统
为了实现在web环境可以打包构建，ArenaLess提供了一个虚拟文件系统。

### 3. 导入本地模块的特殊后缀（独有）
目前此功能只能支持本地模块，在线的模块用不了。
#### ?binary 二进制导入
导入一个`Uint8Array`形式的二进制文件。
```typescript
import xxx from "xxx?binary";
```
#### ?text 文本导入
导入一个`string`形式的文本文件。
```typescript
import xxx from "xxx?text";
```
#### ?base64 base64导入
以`base64`的`string`导入一个文件。 
```typescript
import xxx from "xxx?base64";
```
#### ?wasm 导入wasm实例
导入一个`Promise<WebAssembly.Instance>`形式的wasm文件。
> 这个相关的东西你可以到`examples/wasm-hello-world`查看
```typescript
import hellowasm from "hellowasm.wasm?wasm";
hellowasm().then((instance:WebAssembly.Instance)=>{
    console.log(instance.exports.add(1,100));
})
```
### 4. 默认的JSON格式导入（AP兼容）
ArenaLess默认支持JSON的导入，你可以直接导入一个JSON文件。
```json
// xxx.json
{"yyy":100,"zzz":"hello"}
```
```typescript
import xxx from "xxx.json";
console.log(xxx.yyy);
```
