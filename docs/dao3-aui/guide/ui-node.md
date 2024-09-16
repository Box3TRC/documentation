---
title: UI组件
sidebar_position: 1
---
# UI组件
Dao3-AUI 有一些标签组件，连接到的是岛三的UI组件。

## 组件基本使用
- 组件长这样：`<ui-xxx></ui-xxx>`
- 组件有： ui-text,ui-image,ui-box,ui-input，对应岛三的UI组件类型
- 组件的属性就是原有岛三属性的横杠形式，例如：
    - `textContent(岛三UI)` -> `text-content(组件)`
    - `textColor(岛三UI)` -> `text-color(组件)`
    - `backgroundColor(岛三UI)` -> `background-color(组件)`
```tsx
<ui-text
    text-content="hello world"
    text-color="red"
    text-x-alignment="Left"
    background-color="green"
    background-opacity="50%"
></ui-text>
```

## 组件属性类型
### 位置/尺寸 属性
- 指定位置的属性：`x`,`y`
- 指定尺寸的属性：`width`,`height`
#### 格式
可以是很多个值，用加号连接，offset的值为??px，scale的值为??%。举例：
- `x="50px+50%"` x在50%的scale基础上再加50px的offset
- ⚠`x="50%+-50px"` 负数目前也需要带+在前面
### 其他属性
| 属性类型 | 描述 | 举例 |
| --- | --- | --- |
| string | 文本类型 | `text-content="hello world"` |
| number | 数字类型 | `text-font-size="20"` |
| boolean | 布尔类型 | `text-bold="true"` |
| color | 颜色类型(css颜色) | `text-color="red"` `background-color="green"` <br/> 也可以用rgb(r,g,b)和#rrggbb这样格式的颜色 |
| enum | 枚举类型 | 目前仅 `pointerEventBehavior="ENABLE"`，见[岛三API](https://box3.yuque.com/staff-khn556/wupvz3/ksy9e996672upyqp) |
| vec2 | 二维向量类型 | 暂无属性，格式为`x,y` |
| anchor-vec2 | 二维锚点向量类型 | `anchor="50%,50%"` |
| percent | 百分比类型 | `background-opacity="50%"` |
