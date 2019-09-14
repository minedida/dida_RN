
function prettyLog(args: any, key: string = '', color = 'black') {
  const formatJson = require('format-json')
  if (arguments.length === 1) {
    __DEV__ && console.log(`%c${formatJson.plain(args)}`, `color: ${color}`)
  }
  __DEV__ && console.log(key ? `%c${key}:${formatJson.plain(args)}` : formatJson.plain(args), `color: ${color}`)
}

function isEmpty(arg: object | string | number | Array<any> | boolean) {
  const lodash = require('lodash')
  return lodash.isEmpty(arg)
}

function getCmpName(cmp) {
  // get injected component by mobx displayName or plain Component's name
  let name = cmp.displayName || cmp.name
  if (name.indexOf('inject') > -1) {
    name = name.split('-')[1];
    return name;
  }
  return name;
}


export {
  prettyLog,
  isEmpty,
  getCmpName
}
