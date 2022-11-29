/*
 * @Descripttion: 
 * @Date: 2022-04-19 11:59:49
 * @LastEditTime: 2022-11-23 15:43:01
 */
import dayjs from 'dayjs';


/**
 * 格式化时间
 */
export function formatTime(
  date?: string | number | Date | dayjs.Dayjs | null | undefined,
  template?: string | undefined
) {
  return dayjs(date).format(template);
}

/**
 * 类型检查
 */

export function typeCheck(param: any) {
  return Object.prototype.toString.call(param);
}
/**
 * @description: 批量修改stage
 * @param {Object}
 * @return:
 */
export function batchUpdateState(state: any, payload: any) {
  if (
    typeCheck(state) === "[object Object]" &&
    typeCheck(payload) === "[object Object]"
  ) {
    for (let key in payload) {
      state[key] = "";
      state[key] = payload[key];
    }
  } else {
    console.error("expected plain Object");
  }
}





