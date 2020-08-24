
import {
  ScanStatus,
} from 'wechaty'
import { generate } from 'qrcode-terminal'

export default (qrcode: string, status: ScanStatus) => {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    // eslint-disable-next-line no-console
    generate(qrcode)  // 控制台显示二维码
    // const qrcodeImageUrl = [
    //   'https://wechaty.github.io/qrcode/',
    //   encodeURIComponent(qrcode),
    // ].join('')
  } else {
    // eslint-disable-next-line no-console
    console.log('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
}
