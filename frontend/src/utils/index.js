import axios from 'axios'

const host = 'http://127.0.0.1:7001/api'
export { host }

function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    return axios({
      method: method,
      url: host + url,
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      }
    }).then((res) => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export function get (url, data) {
  return request(url, 'GET', data)
}

export function post (url, data) {
  return request(url, 'POST', data)
}
