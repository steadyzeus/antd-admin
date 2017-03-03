import { request } from '../utils'

export async function queryBizName (params) {
  return request('http://139.196.139.211/InputSystem/DataService/api/v1/list/'+'corp/1', {
    method: 'get',
    cross: true,
    data: params
  })
}

export async function createBizName (params) {
  return request('/api/users', {
    method: 'post',
    cross: true,
    data: params
  })
}
