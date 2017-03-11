//import { create, remove, update, query } from '../services/users'
import { queryBizName,deleteBizNameByID } from '../services/addNewUser'
import { parse } from 'qs'
import {message} from 'antd'

export default {

  namespace: 'usersManagement',

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
        if (location.pathname === '/usersManagement') {
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
      const data = yield call(queryBizName, parse(payload))
      if (data) {
        const listData=JSON.parse(data.Data);
        yield put({
          type: 'querySuccess',
          payload: {
            list: listData,
            pagination: {"current":Number(parse(payload).page)||1,"total": listData.TotalLine,"pageSize":20}
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
    *update ({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
      const id = yield select(({ users }) => users.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(update, newUser)
      if (data && data.Message=="success") {
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
    }
  },

  reducers: {
    showLoading (state) {
      return { ...state, loading: true }
    },
    querySuccess (state, action) {
      const {list, pagination} = action.payload
      const listData=list.CorpList;
      /*const paginationData={...paginationData,}*/
      return { ...state,
        list:listData,
        loading: false,
        pagination: {
          ...state.pagination,
          ...pagination
        }}
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
