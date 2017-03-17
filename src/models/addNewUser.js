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
    zizhi:{
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
    fayuan:{
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
    gerenfayuan:{
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
    yingshou:{
      list:[],
      second:0,
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
    yingfu:{
      list:[],
      second:0,
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
    yufu:{
      list:[],
      second:0,
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
    yushou:{
      list:[],
      second:0,
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
    qitayingshou:{
      list:[],
      second:0,
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
    qitayingfu:{
      list:[],
      second:0,
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
    cunhuo:{
      list:[],
      second:0,
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
    gudingzichan:{
      list:[],
      second:0,
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
    daikuan:{
      list:[],
      second:0,
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
    danbao:{
      list:[],
      second:0,
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
    grdanbao:{
      list:[],
      second:0,
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
    podanbao:{
      list:[],
      second:0,
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
    aqscxkz:{
      list:[],
      second:0,
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
    khxkz:{
      list:[],
      second:0,
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
    shuiwu:{
      list:[],
      second:0,
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
    qyls:{
      list:[],
      second:0,
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
    shebao:{
      list:[],
      second:0,
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
    gongyingshang:{
      list:[],
      second:0,
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
    currentContent:"添加新客户信息",
    Name:""
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        //暂时命中
        if (location.pathname === '/userDetails') {
          dispatch({
            type: 'query',
            payload: {...location.query,currentContent:'客户详细信息'}
          })
        }
        if(location.pathname === '/addNewUser'){
          dispatch({
            type: 'clean',
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
        let corpMaterial =allData.CorpMaterial.DataList,
        BuyProject=allData.BuyProject.DataList,
          PersonalMaterial=allData.PersonalMaterial.DataList,
        OtherMaterial=allData.OtherMaterial.DataList;
        let corpObject={};
        ///加上其他表
        for(let item of corpMaterial){
          corpObject[item.BizName]={list:JSON.parse(item.Data),currentItem: {},
            modalVisible: false,
            modalType: 'create',
            pagination: {
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: corpMaterial => `共 ${corpMaterial.length} 条`,
              current: 1,
              total: null
            }};
        }
        for(let item of BuyProject){
          corpObject[item.BizName]={list:JSON.parse(item.Data),currentItem: {},
            modalVisible: false,
            modalType: 'create',
            pagination: {
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: BuyProject => `共 ${BuyProject.length} 条`,
              current: 1,
              total: null
            }};
        }
        /*for(let item of PersonalMaterial){
          corpObject[item.BizName]={list:JSON.parse(item.Data),currentItem: {},
            modalVisible: false,
            modalType: 'create',
            pagination: {
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: PersonalMaterial => `共 ${PersonalMaterial.length} 条`,
              current: 1,
              total: null
            }};
        }
        for(let item of OtherMaterial){
          corpObject[item.BizName]={list:JSON.parse(item.Data),currentItem: {},
            modalVisible: false,
            modalType: 'create',
            pagination: {
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: OtherMaterial => `共 ${OtherMaterial.length} 条`,
              current: 1,
              total: null
            }};
        }*/
        yield put({
          type: 'queryAllDataSuccess',
          payload: {
            allBizName: corpObject,
            pagination: {"current": 1, "total": '',"pageSize":20},
            currentContent:payload.currentContent,
            Name:payload.Name
          }
        })
      }
    },
    *'delete' ({ payload }, { select,call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(deleteBizNameByID, { record: payload })
      const currentBizData = yield select(({ addNewUser }) => addNewUser[payload.bizName].list);

      if (data && data.Message=="success") {
        for(let index in currentBizData){
          if(currentBizData[Number(index)].KeyID==payload.id){
            currentBizData.splice(Number(index),1);
          }
        }
        yield put({
          type: 'deleteSuccess',
          payload: {
            list: currentBizData,
            bizName:payload.bizName
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
    clean(state){
      return {gongshang:{
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
        zizhi:{
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
        fayuan:{
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
        gerenfayuan:{
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
        yingshou:{
          list:[],
          second:0,
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
        yingfu:{
          list:[],
          second:0,
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
        yufu:{
          list:[],
          second:0,
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
        yushou:{
          list:[],
          second:0,
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
        qitayingshou:{
          list:[],
          second:0,
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
        qitayingfu:{
          list:[],
          second:0,
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
        cunhuo:{
          list:[],
          second:0,
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
        gudingzichan:{
          list:[],
          second:0,
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
        daikuan:{
          list:[],
          second:0,
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
        danbao:{
          list:[],
          second:0,
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
        grdanbao:{
          list:[],
          second:0,
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
        podanbao:{
          list:[],
          second:0,
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
        aqscxkz:{
        list:[],
          second:0,
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
      khxkz:{
        list:[],
          second:0,
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
      shuiwu:{
        list:[],
          second:0,
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
      qyls:{
        list:[],
          second:0,
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
      shebao:{
        list:[],
          second:0,
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
        gongyingshang:{
          list:[],
          second:0,
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
        currentContent:"添加新客户信息",
        Name:""
      }
    },
    queryAllDataSuccess (state, action) {
      const {allBizName, pagination,currentContent,Name} = action.payload
      return {
        ...state,...allBizName,loading: false,currentContent:currentContent,Name:Name
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
    deleteSuccess(state,action){
      const {list, bizName} = action.payload
      return {
        ...state, loading: false, [bizName]: {...state[bizName], list: list}
      }
    },
    queryExcelSuccess (state, action) {
      const {list, pagination, bizName} = action.payload
      return {
        ...state, loading: false,[bizName]:{...state[bizName],list:[...state[bizName].list,...list],
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
