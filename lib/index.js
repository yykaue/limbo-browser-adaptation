/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
import { getBrowserVersion } from '../src/tools'
import AbortController from './modules/AbortController'
import allSettled from './modules/allSettled'
import arrValues from './modules/arrValues'
import flat from './modules/flat'
import globalThis from './modules/globalThis'
import fromEntries from './modules/fromEntries'

const functions = {
  AbortController,
  allSettled,
  arrValues,
  flat,
  globalThis,
  fromEntries
}

console.log('引入了浏览器兼容')
const { browser, version } = getBrowserVersion()

// modules下文件名需和apiVersion的key全匹配
const apiVersion = {
  AbortController: { Chrome: 67, Edge: 16, Firefox: 57, Opera: 53, Safari: 12.1 },
  flat: { Chrome: 69, Edge: 79, Firefox: 62, Opera: 56, Safari: 12 },
  arrValues: { Chrome: 66, Edge: 14, Firefox: 60, Opera: 53, Safari: 9 },
  allSettled: { Chrome: 76, Edge: 79, Firefox: 71, Opera: 63, Safari: 13 },
  globalThis: { Chrome: 71, Edge: 79, Firefox: 65, Opera: 58, Safari: 12.1 },
  fromEntries: { Chrome: 73, Edge: 79, Firefox: 63, Opera: 60, Safari: 12.1 },
}

const getModulesFiles = () => {
  // const modulesFiles = require.context('./modules', true, /\.js$/)

  // modulesFiles.keys().forEach(modulePath => {
    Obkect.keys(functions).forEach(modulePath => {
    if (apiVersion[modulePath] && apiVersion[modulePath][browser] > version) {
      functions[modulePath].default()
    }
  })
}

export default getModulesFiles
