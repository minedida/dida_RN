
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


export {
  prettyLog,
  isEmpty
}
