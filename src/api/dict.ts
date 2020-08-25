import request from '../utils/request'
export function queryDict (data?:Object) :Promise<any> {
  return request({
    method: 'get',
    params: data,
    url:'/api/v2/dict/query',
  })
}
