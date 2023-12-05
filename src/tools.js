/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
// 获取用户代理字符串
const userAgent = navigator.userAgent

// 判断浏览器版本
function getBrowserVersion () {
  let browser = null
  let version = null

  if (/MSIE (\d+\.\d+);/.test(userAgent)) {
    browser = 'IE'
    version = parseFloat(RegExp.$1)
  } else if (/Firefox\/([\d.]+)/.test(userAgent)) {
    browser = 'Firefox'
    version = parseFloat(RegExp.$1)
  } else if (/Chrome\/([\d.]+)/.test(userAgent)) {
    browser = 'Chrome'
    version = parseFloat(RegExp.$1)
  } else if (/Version\/([\d.]+).*Safari/.test(userAgent)) {
    browser = 'Safari'
    version = parseFloat(RegExp.$1)
  } else if (/Opera\/([\d.]+)/.test(userAgent)) {
    browser = 'Opera'
    version = parseFloat(RegExp.$1)
  }

  return {
    browser,
    version
  }
}

// 判断浏览器内核
function getBrowserEngine () {
  let engine = null

  if (/Trident\/([\d.]+)/.test(userAgent)) { // 匹配Trident内核（IE浏览器）
    engine = 'Trident'
  } else if (/Gecko\/([\d.]+)/.test(userAgent)) { // 匹配Gecko内核（Firefox浏览器）
    engine = 'Gecko'
  } else if (/AppleWebKit\/([\d.]+)/.test(userAgent)) { // 匹配Webkit内核（Chrome、Safari浏览器）
    engine = 'Webkit'
  } else if (/Presto\/([\d.]+)/.test(userAgent)) { // 匹配Presto内核（Opera浏览器）
    engine = 'Presto'
  }

  return engine
}

export {
  getBrowserVersion,
  getBrowserEngine
}
