---
title: JavaScript支持 ⚠不推荐
sidebar_position: 5
---
# JavaScript支持(不推荐)
`ArenaLess`默认是TypeScript的，但是也支持JavaScript。
> ⚠⚠⚠ 请注意 这是一个**不推荐**的选项！JavaScript的支持**不会收到维护的保证**。

> ArenaPro是否支持JavaScript还未得到验证，开启此功能可能会丢失兼容性

> tips：开启此功能后JavaScript也有补全功能，但你会丢失TypeScript的类型检查。启用后ts和js应该是可以混用的，你在js文件中依然可以导入ts。

## 启用教程
### 第一步 修改两个tsconfig.json
项目目录下有两个tsconfig，一个位于`server/tsconfig.json`，另一个位于`client/tsconfig.json`。
你需要在这**两个文件**的`"compilerOptions"`下面增加`"allowJS": true`
```jsonc
{
    "compilerOptions": {
        "allowJs": true,
        ....省略下面已有内容....
```
### 第二步 重命名文件
1. `server/src/App.ts` -> `server/src/App.js`
2. `client/src/clientApp.ts` -> `client/src/clientApp.js`

### 第三步 修改入口点
重命名文件后，`dao3.config.json`的入口点配置也要改文件名。
1. `ArenaPro.file.typescript.server.entry`中的`src/App.ts`改为`src/App.js`
2. `ArenaPro.file.typescript.client.entry`中的`src/clientApp.ts`改为`src/clientApp.js`

### 第四步 修改ts代码
删除ts相关代码，以下是`App.js`的示例，你可以直接复制以下代码替换掉原有内容：
```javascript
import Component, { componentObjByUuid } from "component";
export class App extends Component {
  onStart() {
    
  }
  onUpdate(deltaTime) {
    
  }
}
```