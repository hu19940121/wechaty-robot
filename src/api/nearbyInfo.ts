import request from '../utils/request'
const qs  = require('qs')
export function nearbyBikeInfo (data?:Object) :Promise<any> {
  return request({
    data: qs.stringify(data),
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'post',
    url:'https://portal-portm.meituan.com/weapp/mobike/proxy/mwx/nearby/nearbyBikeInfo',
  })
}
