import {
  Message,
  log,
  UrlLink,
} from 'wechaty'
import { getMusic } from '../api/music'
import bot from '../index'
import { noticeAdminParams } from '../interface/index'
/**
 * 通知管理员去更新曲库
 * @param obj noticeAdminParams
 *
 */
async function noticeAdmin (obj:noticeAdminParams) {
  const contact:any = await bot.Contact.find({ name:obj.name })
  await contact.say(`管理员你好，${obj.listener}让你去添加“${obj.musicName}”`)
}
export default async (msg: Message) => {
  if (msg.self() || msg.from()?.name() === '微信团队') { // 过滤掉微信团队微信号
    log.info('走这里了-------------------')
    return
  }

  log.info(`${msg.from()?.name()}说了${msg.text()}`)
  const res:any = await getMusic({
    keywords: msg.text(),
    pageIndex: 1,
    pageSize: 10,
  })
  const { list } = res.data
  if (list.length > 0) {
    const musicObj = list[0] // 先取第一个
    const linkPayload = new UrlLink({
      description : musicObj.artist,
      thumbnailUrl: musicObj.pic,
      title       : musicObj.title,
      url         : musicObj.src,
    })
    await msg.say(linkPayload)
  } else {
    await msg.say('SORRY 曲库没有此歌曲 已通知管理员去添加啦！')
    await noticeAdmin({ listener: msg.from()?.name(), musicName:msg.text(),  name:'梦如南笙'  })
  }
}
