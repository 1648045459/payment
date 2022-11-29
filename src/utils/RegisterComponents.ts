/*
 * @Descripttion: 
 * @Date: 2022-11-23 16:26:22
 * @LastEditTime: 2022-11-23 16:26:22
 */
/*
 * @Descripttion: 
 * @Date: 2022-10-31 17:13:44
 * @LastEditTime: 2022-11-07 14:55:28
 */
// ----- start （注册常用组件）
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 组件文件夹的相对路径
  '../components',
  // 是否查找子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

// ----- end （注册常用组件）
export const registerComponents = (app: any) => {
  requireComponent.keys().forEach(fileName => {
    if (fileName) {
      // 获取组件配置
      const componentConfig = requireComponent(fileName)
      let param = fileName?.split('/') //.pop().replace(/\.\w+$/, '')
      let param2 = param?.pop()
      let param3 = param2?.replace(/\.\w+$/, '')
      // // 获取组件的 PascalCase 名
      const componentName = upperFirst(camelCase(param3))
      app.component(
        componentName,
        componentConfig.default || componentConfig
      )
    }
  })
};
