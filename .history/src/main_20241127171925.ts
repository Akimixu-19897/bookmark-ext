import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

// 监听键盘事件
chrome.commands.onCommand.addListener((command) => {
  console.log("🚀这是command的输出：", command);
});

app.use(ElementPlus);
app.mount("#app");
