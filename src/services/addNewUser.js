import { request } from '../utils'

export async function queryBizName (params) {
  return request('http://p.cdito.cn:8118/InputSystem/DataService/api/v1/list/'+'corp/'+(params.page||1), {
    method: 'get',
    data: params
  })
}

export async function deleteBizNameByID (params) {
  var data=JSON.stringify({'KeyID':params.record.id,'BizName':params.record.bizName});
  return request('http://p.cdito.cn:8118/InputSystem/DataService/api/v1/delete', {
    method: 'post',
    data: JSON.stringify({'BizName':'gongshang','Data':data})
  })
}

export async function createBizName (params) {
  var data=JSON.stringify(params.data);
  return request('http://p.cdito.cn:8118/InputSystem/DataService/api/v1/add', {
    method: 'post',
    data: JSON.stringify({'BizName':params.bizName,'Data':data})
  })
}

export async function updateBizName (params) {
  var data=JSON.stringify(params.newData);
  return request('http://p.cdito.cn:8118/InputSystem/DataService/api/v1/update', {
    method: 'post',
    data: JSON.stringify({'BizName':params.bizName,'Data':data})
  })
}

export async function queryUserDetailsBygongshangID (params) {
  return request('http://p.cdito.cn:8118/InputSystem/DataService/api/v1/corp/detail/'+params.KeyID , {
    method: 'get',
    data: params
  })
}
