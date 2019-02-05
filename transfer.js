// 将schema拷贝到 page-design/src/components/schema 目录下
const path = require('path')
const { exec } = require('child_process')

const originPath = path.resolve(__dirname, './src/components/schema')
const targetPath = path.resolve(__dirname, '../pages-design/src/components')

exec(`cp -rf ${originPath} ${targetPath}`, err => {
  if (err) throw err
  else console.log('完成')
})
