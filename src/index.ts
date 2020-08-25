import { Wechaty, log } from 'wechaty'
import { token } from './config'
import onScan from './listeners/on-scan'
import onLogin from './listeners/on-login'
import onMessage from './listeners/on-message'
import onLogout from './listeners/on-logout'

const { PuppetPadplus } = require('wechaty-puppet-padplus') // padplus协议包
// eslint-disable-next-line no-console
console.log('new Date~~~~~~~~', new Date())

const bot = new Wechaty({
  name: 'chat',
  puppet: new PuppetPadplus({ // pad协议
    token,
  }),
})

bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))

export default bot
