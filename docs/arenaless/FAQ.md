---
title: 常见问题
sidebar_position: 2
---
# 常见问题
## 我想用npm的包，怎么办？
由于`ArenaLess`是为了兼容`vscode web版(vscode.dev)`设计的，在这种环境里，npm是无法使用的。所以ArenaLess引入了一种新的方法：支持从网络引入库，支持`npm:`前缀。
```typescript
// 网络引用库
import ... from 'https://xxxxx/xxxx';

// 那npm怎么办呢？ArenaLess提供了一个npm:前缀，这个前缀就是下面esm.sh链接的缩写
// 前缀列表可以在后面看
import ... from "npm:xxx"
import ... from "npm:xxx@1.0.0"//版本号
import ... from "npm:yyy/路径"

// esm.sh 是一个将npm/jsr/gh上的包转换为es格式的cdn服务
// 以下的用法都可用，在导入的后面你还可以增加路径以导入某个特定的文件。
import ... from "https://esm.sh/npm的包名";
import ... from "https://esm.sh/npm的包名(@版本号)";// https://esm.sh/PKG@SEMVER[/PATH]
import ... from "https://esm.sh/gh/OWNER/REPO[@TAG]/PATH"// github的也可以
import ... from "https://esm.sh/jsr/OWNER/REPO[@TAG]/PATH"// jsr.io的也可以

// 比如说我想用JSON5来解析有注释的JSON文件
import JSON5 from "https://esm.sh/json5";
import JSON5 from "npm:json5";// 也可以
const json=JSON5.parse(`{
    "foo":"bar"// 注释在这里
}`);
```
目前这个操作还可能存在不稳定。

#### 为什么编辑器提示红色了？
因为TypeScript语言支持并不支持网络导入，但是ArenaLess修改了打包器的逻辑实现了此功能。如果你看不惯这个红色提示的的话，在这行之上加一行`// @ts-ignore`即可。
```typescript
// @ts-ignore
import JSON5 from "https://esm.sh/json5";
```

## 网络导入/前缀导入没法兼容ArenaPro怎么办？！
细心的用户可以发现，根目录下有一个`importMap.arenaless.jsonc`，这是用来指定ArenaLess专属导入库的别名的。
通过它我们就可以实现兼容。
```jsonc
{
    "imports":{
        "包名":"导入的地址/带前缀符号的包",
        // 例子
        "json5":"npm:json5"
    }
}
```
```typescript
// 例子
import JSON5 from "json5";// 由于你上面指定了json5->npm:json5的别名，所以可以直接用json5
// 你在桌面环境用npm install json5 --save 安装json5，然后你会发现代码在ArenaPro中也能运行了。
```
这样指定以后arenaless中就可以直接写`import ... from "包名"`了，你可以更改一下`package.json`，用`npm install xxx`安装相应的包。

## 前缀列表
1. `npm:xxx` -> `https://esm.sh/xxx`
2. `jsr:xxx` -> `https://esm.sh/jsr/xxx`