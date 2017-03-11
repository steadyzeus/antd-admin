import { queryBizName,createBizName,deleteBizNameByID,updateBizName,queryUserDetailsBygongshangID} from '../services/addNewUser'
import { parse } from 'qs'
import {message} from 'antd'

export default {

  namespace: 'addNewUser',

  state: {
    gongshang:{
      list:[],
      currentItem: {},
      modalVisible: false,
      modalType: 'create',
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `共 ${total} 条`,
        current: 1,
        total: null
      }},
    zhangcheng:{
      list:[],
      currentItem: {},
      modalVisible: false,
      modalType: 'create',
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `共 ${total} 条`,
        current: 1,
        total: null
      }},
    loading: false,
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        //暂时命中
        if (location.pathname === '/userDetails') {
          dispatch({
            type: 'query',
            payload: {...location.query}
          })
        }
      })
    }
  },

  effects: {
    *query ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(queryUserDetailsBygongshangID, parse(payload))
      if (data) {
        const allData=JSON.parse(data.Data);
        let corpMaterial =allData.CorpMaterial.DataList;
        let corpObject={};
        for(let item of corpMaterial){
          corpObject[item.BizName]={list:JSON.parse(item.Data)};
        }
        yield put({
          type: 'queryAllDataSuccess',
          payload: {
            allBizName: corpObject,
            pagination: {"current": 1, "total": '',"pageSize":20}
          }
        })
      }
    },
    *'delete' ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(deleteBizNameByID, { id: payload })
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
            }
          }
        })
      }
    },
    *create ({ payload }, { call, put }) {
      yield put({ type: 'hideModal' ,payload})
      yield put({ type: 'showLoading' })
      if(payload.bizName!="gongshang"){
        payload.data.LoanId=payload.gongshangID;
      }
      const data = yield call(createBizName, payload)
      if (data && data.Message=="success") {
        const listData=JSON.parse(data.Data);

        yield put({
          type: 'queryCreatSuccess',
          payload: {
            list: listData,
            pagination: {
              total: listData.length,
              current: 1
            },
            bizName:payload.bizName
          }
        })
      }
      else{
        yield put({ type: 'hideLoading' })
        message.error(data.Message);
      }
    },
    *update ({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' ,payload})
      yield put({ type: 'showLoading' })
      const currentItem = yield select(({ addNewUser }) => addNewUser[payload.bizName].currentItem);
      const newData = {...currentItem, ...payload.data }
      payload.newData=newData;
      debugger;
      const data = yield call(updateBizName, payload)
      if (data && data.Message=="success") {
        const listData=JSON.parse(data.Data);
        /*yield put({
          type: 'querySuccess',
          payload: {
            list: listData,
            pagination: {
              total: listData.length,
              current: 1
            },
            bizName:payload.bizName
          }
        })*/
        Object.assign(currentItem, listData);
        yield put({ type: 'hideLoading' })
      }
      else{
        yield put({ type: 'hideLoading' })
        message.error(data.Message);
      }
    }
  },
  reducers: {
    showLoading (state) {
      return { ...state, loading: true }
    },
    querySuccess (state, action) {
      const {list, pagination, bizName} = action.payload
      const listData=JSON.parse(list);
      return {
        ...state, loading: false,[bizName]:{list:listData,
        pagination: {
      ...state.pagination,
      ...pagination
      }}
      }
    },
    queryAllDataSuccess (state, action) {
      const {allBizName, pagination} = action.payload
      return {
        ...state,...allBizName,loading: false
      }
    },
    queryCreatSuccess (state, action) {
      const {list, pagination, bizName} = action.payload
      return {
        ...state, loading: false,[bizName]:{...state[bizName],list:[...state[bizName].list,list],
          pagination: {
            ...state.pagination,
            ...pagination
          }}
      }
    },
    showModal (state, action) {
      const {bizName}=action.payload;
      return { ...state, [bizName]:{...state[bizName],...action.payload,modalVisible: true}}
    },
    hideModal (state,action) {
      const {bizName,modalType}=action.payload;
      return { ...state, [bizName]:{...state[bizName],modalVisible: false,modalType:modalType }}
    },
    hideLoading (state) {
      return { ...state, loading: false }
    },
  }

}
