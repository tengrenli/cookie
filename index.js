import docCookie from './docCookie'

// 返回当日凌晨00:00:00 时间
const dateOfWeeHours = () => {
  return new Date(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0)
  )
}

export default {
  docCookie,
  dateOfWeeHours
}
