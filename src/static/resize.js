/**
 * rem运用时的换算
 * @param {Object} doc
 * @param {Object} win
 */
(function (doc, win) {
  let docEl = doc.documentElement;
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  let recalc = function () {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 640) {
      docEl.style.fontSize = '10px'
    } else {
      docEl.style.fontSize = 10 * (clientWidth / 640) + 'px'
    }
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  // DOM文档加载的步骤为
  // 1）解析HTML结构。
  // 2）加载外部脚本和样式表文件。
  // 3）解析并执行脚本代码。
  // 4）DOM树构建完成。//DOMContentLoaded
  // 5）加载图片等外部文件。
  // 6) 页面加载完毕。//load
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);
