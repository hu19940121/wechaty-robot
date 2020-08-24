
import {
  Contact,
  log,
} from 'wechaty'
export default function  (user: Contact) {
  log.info(`${user}登出了`)
}
