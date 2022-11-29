/*
 * @Descripttion: 
 * @Date: 2022-08-10 11:28:44
 * @LastEditTime: 2022-11-23 15:53:50
 */

//调用翻译对象

// import { ElMessage } from 'element-plus';
import i18n from '../locales'
const { t } = i18n.global

// 复制文本字符串
export function copyText(
  textString: string,
  successInfo?: string,
  errorInfo?: string
) {
  if (!successInfo) successInfo = t("lang.copySuccess");
  if (!errorInfo) errorInfo = t("lang.copyError");
  const textarea = document.createElement('input'); //创建input对象
  // const currentFocus = document.activeElement; //当前获得焦点的元素
  document.body.appendChild(textarea); //添加元素
  textarea.value = textString;
  textarea.focus();
  if (textarea.setSelectionRange)
    textarea.setSelectionRange(0, textarea.value.length);
  //获取光标起始位置到结束位置
  else textarea.select();
  let flag = false;
  try {
    flag = document.execCommand('copy'); //执行复制
  } catch (eo) {
    flag = false;
  }
  document.body.removeChild(textarea); //删除元素
  // if (currentFocus) {
  //   currentFocus.focus();
  // }

  if (flag) {
    // Toast({
    //   message: successInfo,
    //   icon: 'passed',
    // });
    // ElMessage({
    //   showClose: true,
    //   message: successInfo,
    //   type: 'success'
    // });
  } else {
    // Toast({
    //   message: errorInfo,
    //   icon: 'close',
    // });
  }
}

/**
 * @name:
 * @test: test font
 * @msg: 复制带html样式的文本
 * @param {*} url：需要复制的URL地址
 * @param {*} successInfo：复制成功后的提示
 * @param {*} extractCode：需要复制的提取码
 * @return {*}
 */
// export function copyShareMsg(url, successInfo, extractCode = null) {
//   Vue.prototype.$nextTick(function() {
//     const selection1 = window.getSelection();
//     selection1.removeAllRanges(); //清之前其他的复制缓存

//     if (!successInfo) successInfo = i18n.t("lang.copy-success");
//     if (!url) {
//       Vue.prototype.$message({
//         showClose: true,
//         message: i18n.t("lang.copy-error"),
//         type: "success"
//       });
//     }

//     // 动态设置链接
//     const _a = document.getElementById("copyHtmlTxt");
//     if (extractCode) {
//       // 复制链接，有提取码布局  http://localhost:1024/sf/077baa81-7e31-4ba4-8167-65fdea67a88e#0k7241mb
//       _a.innerHTML =
//         "<div>" +
//         i18n.t("lang.link") +
//         "<a href='" +
//         url +
//         "#" +
//         extractCode +
//         "' target='_blank'>" +
//         url +
//         "#" +
//         extractCode +
//         "</a></div>" +
//         "<div>" +
//         i18n.t("lang.click-share-link") +
//         "</div>";
//     } else {
//       // 复制链接默认布局, 没有提取码 http://localhost:1024/sf/077baa81-7e31-4ba4-8167-65fdea67a88e
//       _a.innerHTML =
//         "<div>" +
//         i18n.t("lang.link") +
//         "<a href='" +
//         url +
//         "' target='_blank'>" +
//         url +
//         "</a></div>" +
//         "<div>" +
//         i18n.t("lang.click-share-link") +
//         "</div>";
//     }

//     //nextTick,当前dom渲染完毕的回调
//     const selection = window.getSelection();
//     const range = document.createRange();

//     range.selectNode(document.getElementById("copyHtmlTxt")); //传入dom
//     selection.addRange(range);
//     document.execCommand("copy"); //copy是复制

//     Vue.prototype.$message({
//       showClose: true,
//       message: successInfo,
//       type: "success"
//     });

//     selection.removeAllRanges(); // 清除缓存;

//     // 清空动态复制链接布局
//     const _a_1 = document.getElementById("copyHtmlTxt");
//     _a_1.innerHTML = "";
//   });
// }
