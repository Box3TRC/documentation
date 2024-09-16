---
title: UI事件
sidebar_position: 2
---
# UI事件
## onClick 点击事件
任意ui组件可以通过onClick属性来绑定点击事件
```tsx
<ui-text
    textContent="click me"
    onClick={() => {
        console.log("clicked!")
    }}
></ui-text>
```
## onInput 文本输入事件
输入框组件`<ui-input></ui-input>`可以通过onInput属性来绑定文本输入事件
```tsx
<ui-input textContent="这是默认的文本"
    onInput={(event)=>{
        // 获取并输出输入框的文本
        console.log(event.target.getAttribute("text-content"));
    }}
></ui-input>
```
### 示例
```tsx title="client/src/clientApp.tsx"
import { AUIApp, hooks } from "dao3-aui";
let aui = new AUIApp();

function App() {
  // 调用setName会引发状态更新。更新name状态，下面的ui-text会随之改变（实时）
  const [name,setName]=hooks.useState("默认文字");
  // 关于useState的详细用法，请见React文档
  // https://zh-hans.react.dev/reference/react/useState
  return (<>
    <ui-text
      x="0px" y="0px" height="50px" width="200px" text-content={"你输入了： " + name}
      background-color="#000000"
      text-color="#ffffff"
      background-opacity="100%"
    ></ui-text>
    <ui-input
      x="0px" y="50px" width="200px" height="50px" placeholder="在这里输入文字，上面会实时更新"
      // 检测输入事件，更新name为文本框内容
      onInput={(e)=>setName(e.target.getAttribute("text-content"))}
      // 同时文本框内容也是name
      text-content={name}
    ></ui-input>
  </>);
}
aui.mount(<App />, ui);
```