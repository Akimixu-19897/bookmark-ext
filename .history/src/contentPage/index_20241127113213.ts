/**
 * 初始化 iframe 数据
 */
const init = () => {
  /**
   * 添加 iframe
   * @param {string} id iframe id
   * @param {string} pagePath iframe 路径
   */
  const addIframe = (id: string, pagePath: string) => {
    const contentIframe = document.createElement("iframe");
    contentIframe.id = id;
    contentIframe.style.cssText =
      "width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; z-index: 10000004; border: none; box-shadow: 0px 6px 16px -8px rgba(0,0,0,0.15); background-color: rgba(0, 0, 0, 0.01)";
    const getContentPage = chrome.runtime.getURL(pagePath);
    contentIframe.src = getContentPage;
    document.body.appendChild(contentIframe);
  };

  addIframe("content-iframe", "contentPage/index.html");
};

// 判断 window.top 和 self 是否相等，如果不相等，则不注入 iframe
if (window.top == window.self) {
  init();
}
