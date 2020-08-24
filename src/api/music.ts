import request from '../utils/request'
export function getMusic (data?:Object) {
  return request({
    method: 'get',
    params: data,
    url:'/api/v1/music/list',
  })
}
// export function addRoom (data) {
//   return request({
//     url: '/api/v1/room/add',
//     method: 'post',
//     data,
//   })
// }
