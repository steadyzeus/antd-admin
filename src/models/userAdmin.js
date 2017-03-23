//import { create, remove, update, query } from '../services/users'
import { queryUserAdmin,deleteBizNameByID,createBizName,updateBizName} from '../services/addNewUser'
import { parse } from 'qs'
import {message} from 'antd'

export default {

  namespace: 'userAdmin',

  state: {
    list: [],
    loading: false,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    message:"",
    pagination: {
      showSizeChanger: false,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null
    }
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/userAdmin') {
          dispatch({
            type: 'query',
            payload: location.query
          })
        }
      })
    }
  },

  effects: {
    *query ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(queryUserAdmin, parse(payload))
      if (data) {
        const listData=JSON.parse(data.Data);
        yield put({
          type: 'querySuccess',
          payload: {
            list: listData
          }
        })
      }
    },
    *'delete' ({ payload }, {call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(deleteBizNameByID, { record: payload })
      if (data && data.Message=="success") {
        yield put({
          type: 'query',
          payload: location.query
        })
      }
      else{
        yield put({ type: 'hideLoading' })
        message.error(data.Message);
      }
    },
    *create ({ payload }, { call, put }) {
      yield put({ type: 'hideModal' ,payload})
      yield put({ type: 'showLoading' })
      const data = yield call(createBizName, payload)
      if (data && data.Message=="success") {
        const listData=JSON.parse(data.Data);

        yield put({
          type: 'query'
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
      const currentItem = yield select(({ userAdmin }) => userAdmin.currentItem);
      const newData = {...currentItem, ...payload.data }
      payload.newData=newData;
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
      const {list} = action.payload
      return {
        ...state,
        list: list,
        loading: false
      }
    },
    showModal (state, action) {
      return { ...state, ...action.payload, modalVisible: true }
    },
    hideModal (state) {
      return { ...state, modalVisible: false }
    },
    hideLoading (state) {
      return { ...state, loading: false }
    },
  }

}
