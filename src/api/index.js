import axios from 'axios'

const api = {
  id1: '/id1',
  id2: '/id2'
}
export function fetchItem (id) {
  const url = 'http://10.11.61.25:3001/api?'
  const params = {
    'id': api[id]
  }
  return new Promise((resolve, reject) => axios.get(url, params)
    .then(({ data }) => {
      if (+data.errno === 0) {
        resolve(data.data)
      } else {
        reject(data.errmsg || '接口请求出错！')
      }
    })
    .catch((err) => {
      reject(err || '接口错误！')
    }))
}
