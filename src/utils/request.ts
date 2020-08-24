import axios from 'axios'
const baseURL = 'https://kaier001.com'
// api/v1/music/list?pageIndex=1&pageSize=10&keywords=
// create an axios instance
const service = axios.create({
  baseURL,
  timeout: 5000, // request timeout
  withCredentials: true, // send cookies when cross-domain requests
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // eslint-disable-next-line no-console
    // console.log('response---', response)

    const res = response.data
    // eslint-disable-next-line no-console
    console.log('res---------', res)

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    if (res.code !== 0) {
      return Promise.reject(res.msg || 'error')
    } else {
      return res
    }
  },
  error => {
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000,
    // })
    return Promise.reject(error)
  }
)

export default service
