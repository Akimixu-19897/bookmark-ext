# 谷歌浏览器书签栏插件
主要是因为书签栏占了一部分网页的高度，所以想要一个插件，展示所有书签，这样就可以隐藏书签栏了

alt + 数字键2 可以直接打开插件

或者将插件固定在工具栏点击也行

vite 5 之后打包是有问题的，所以需要将node_modules中的@crsjs/dist/index.cjs和index.mjs中的
```js
const vmAsset = bundle["manifest.json"];

// 改为
const vmAsset = bundle["/vite/manifest.json"];
```
之后才可以成功打包
