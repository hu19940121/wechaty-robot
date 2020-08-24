
import bot from '../index'
import { nearbyBikeInfo } from '../api/nearbyInfo'

export default async ():Promise<any> => {
  const contact:any = await bot.Contact.find({ name:'梦如南笙' })
  const data = {
    biketype:0,
    citycode: '0571',
    errMsg:'getMapCenterLocation:ok',
    latitude:30.199550,
    longitude:120.217541,
    userid:5044362021422930878464396132,
  }
  nearbyBikeInfo(data).then(async (res) => {
    const object = res.object
    // eslint-disable-next-line no-console
    // console.log('object---', res)

    if (object.length > 0) {
      const zuijin = object[0]
      const zuiyuan = object[object.length - 1]
      return await contact.say(`有单车 最近${zuijin.distance}米, 最远${zuiyuan.distance}`)
    } else {
      return await contact.say('fuck 滨河路附近没有单车了 - -')
    }
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.log('err', err)
  })
}
