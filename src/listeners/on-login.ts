
import {  Contact, log } from 'wechaty'
import bick from '../functions/bike'
const schedule = require('node-schedule')
const  scheduleCronstyle = () => {

  // 每天的9点15分0秒触发
  schedule.scheduleJob('0 15 9 * * *', async () => {
    // eslint-disable-next-line no-console
    console.log('new Date~~~~~~~~', new Date())
    await bick()
    // eslint-disable-next-line no-console
    console.log('scheduleCronstyle:' + new Date())
  })
}
export default (user: Contact) => {
  log.info(`${user}登录了`)
  scheduleCronstyle()
}
