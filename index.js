import docCookie from './docCookie'

// 返回当日凌晨00:00:00 时间
const dateOfWeeHours = () => {
  return new Date(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0)
  )
}
/**
 * @是否为当天:
 * @param {date} 日期
 * @return {boolean}
 * @Author: @[TengRenLi](at@lang.so)
 * @Date: 2020-09-29 16:20:06
 */
// const isToday = str => {
//   return new Date(str).toDateString() === new Date().toDateString()
// }
const isToday = str => {
  // 时间戳
  return new Date(str).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)
}
export default {
  docCookie,
  dateOfWeeHours,
  isToday
}
