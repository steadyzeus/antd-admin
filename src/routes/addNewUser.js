import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import CompanyBaseInfoModal from '../components/companyFiles/companyBaseInfoModal'
import CompanyBaseInfo from '../components/companyFiles/companyBaseInfo'
import ZhangchengModal from '../components/companyFiles/zhangchengModal'
import Zhangcheng from '../components/companyFiles/zhangcheng'
import Zizhi from '../components/companyFiles/zizhi'
import ZizhiModal from '../components/companyFiles/zizhiModal'
import FayuanModal from '../components/companyFiles/fayuanModal'
import Fayuan from '../components/companyFiles/fayuan'
import GerenfayuanModal from '../components/companyFiles/gerenfayuanModal'
import Gerenfayuan from '../components/companyFiles/gerenfayuan'
import YingshouModal from '../components/companyFiles/yingshouModal'
import Yingshou from '../components/companyFiles/yingshou'
import YingfuModal from '../components/companyFiles/yingfuModal'
import Yingfu from '../components/companyFiles/yingfu'
import YushouModal from '../components/companyFiles/yushouModal'
import Yushou from '../components/companyFiles/yushou'
import YufuModal from '../components/companyFiles/yufuModal'
import Yufu from '../components/companyFiles/yufu'
import QitayingshouModal from '../components/companyFiles/qitayingshouModal'
import Qitayingshou from '../components/companyFiles/qitayingshou'
import QitayingfuModal from '../components/companyFiles/qitayingfuModal'
import Qitayingfu from '../components/companyFiles/qitayingfu'
import CunhuoModal from '../components/companyFiles/cunhuoModal'
import Cunhuo from '../components/companyFiles/cunhuo'
import GudingzichanModal from '../components/companyFiles/gudingzichanModal'
import Gudingzichan from '../components/companyFiles/gudingzichan'
import DaikuanModal from '../components/companyFiles/daikuanModal'
import Daikuan from '../components/companyFiles/daikuan'
import DanbaoModal from '../components/companyFiles/danbaoModal'
import Danbao from '../components/companyFiles/danbao'
import GrdanbaoModal from '../components/companyFiles/grdanbaoModal'
import Grdanbao from '../components/companyFiles/grdanbao'
import PodanbaoModal from '../components/companyFiles/podanbaoModal'
import Podanbao from '../components/companyFiles/podanbao'



import { Tabs, Icon,message,Tag,Collapse } from 'antd';
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

function AddNewUser ({ location, dispatch, addNewUser }) {
  const { loading,Name,currentContent,gongshang,zhangcheng,zizhi ,fayuan,gerenfayuan,yingshou,yingfu,yushou,yufu,qitayingshou,qitayingfu,cunhuo,gudingzichan,daikuan,danbao,grdanbao,podanbao} = addNewUser;
  /*const { field, keyword } = location.query*/
  const podanbaoModalProps = {
    item: podanbao.modalType === 'create' ? {} : podanbao.currentItem,
    type: podanbao.modalType,
    visible: podanbao.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${podanbao.modalType}`,
        payload: {data:data,bizName:'podanbao',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'podanbao'}
      })
    }
  }

  const podanbaoProps = {
    dataSource: podanbao.list,
    loading,
    pagination: podanbao.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'podanbao',
          bizName:'podanbao'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'podanbao'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'podanbao'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'podanbao'
          }
        })
      }}
  }

  const grdanbaoModalProps = {
    item: grdanbao.modalType === 'create' ? {} : grdanbao.currentItem,
    type: grdanbao.modalType,
    visible: grdanbao.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${grdanbao.modalType}`,
        payload: {data:data,bizName:'grdanbao',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'grdanbao'}
      })
    }
  }

  const grdanbaoProps = {
    dataSource: grdanbao.list,
    loading,
    pagination: grdanbao.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'grdanbao',
          bizName:'grdanbao'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'grdanbao'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'grdanbao'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'grdanbao'
          }
        })
      }}
  }

  const danbaoModalProps = {
    item: danbao.modalType === 'create' ? {} : danbao.currentItem,
    type: danbao.modalType,
    visible: danbao.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${danbao.modalType}`,
        payload: {data:data,bizName:'danbao',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'danbao'}
      })
    }
  }

  const danbaoProps = {
    dataSource: danbao.list,
    loading,
    pagination: danbao.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'danbao',
          bizName:'danbao'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'danbao'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'danbao'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'danbao'
          }
        })
      }}
  }

  const daikuanModalProps = {
    item: daikuan.modalType === 'create' ? {} : daikuan.currentItem,
    type: daikuan.modalType,
    visible: daikuan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${daikuan.modalType}`,
        payload: {data:data,bizName:'daikuan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'daikuan'}
      })
    }
  }

  const daikuanProps = {
    dataSource: daikuan.list,
    loading,
    pagination: daikuan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'daikuan',
          bizName:'daikuan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'daikuan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'daikuan'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'daikuan'
          }
        })
      }}
  }
  const gudingzichanModalProps = {
    second:gudingzichan.second,
    item: gudingzichan.modalType === 'create' ? {} : gudingzichan.currentItem,
    type: gudingzichan.modalType,
    visible: gudingzichan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${gudingzichan.modalType}`,
        payload: {data:data,bizName:'gudingzichan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'gudingzichan'}
      })
    }
  }

  const gudingzichanProps = {
    dataSource: gudingzichan.list,
    loading,
    pagination: gudingzichan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'gudingzichan',
          bizName:'gudingzichan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'gudingzichan'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'gudingzichan',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'gudingzichan',
            second:second
          }
        })
      }}
  }

  const cunhuoModalProps = {
    second:cunhuo.second,
    item: cunhuo.modalType === 'create' ? {} : cunhuo.currentItem,
    type: cunhuo.modalType,
    visible: cunhuo.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${cunhuo.modalType}`,
        payload: {data:data,bizName:'cunhuo',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'cunhuo'}
      })
    }
  }

  const cunhuoProps = {
    dataSource: cunhuo.list,
    loading,
    pagination: cunhuo.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'cunhuo',
          bizName:'cunhuo'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'cunhuo'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'cunhuo',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'cunhuo',
            second:second
          }
        })
      }}
  }


  const qitayingfuModalProps = {
    second:qitayingfu.second,
    item: qitayingfu.modalType === 'create' ? {} : qitayingfu.currentItem,
    type: qitayingfu.modalType,
    visible: qitayingfu.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${qitayingfu.modalType}`,
        payload: {data:data,bizName:'qitayingfu',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'qitayingfu'}
      })
    }
  }

  const qitayingfuProps = {
    dataSource: qitayingfu.list,
    loading,
    pagination: qitayingfu.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'qitayingfu',
          bizName:'qitayingfu'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'qitayingfu'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'qitayingfu',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'qitayingfu',
            second:second
          }
        })
      }}
  }

  const qitayingshouModalProps = {
    second:qitayingshou.second,
    item: qitayingshou.modalType === 'create' ? {} : qitayingshou.currentItem,
    type: qitayingshou.modalType,
    visible: qitayingshou.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${qitayingshou.modalType}`,
        payload: {data:data,bizName:'qitayingshou',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'qitayingshou'}
      })
    }
  }

  const qitayingshouProps = {
    dataSource: qitayingshou.list,
    loading,
    pagination: qitayingshou.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'qitayingshou',
          bizName:'qitayingshou'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'qitayingshou'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'qitayingshou',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'qitayingshou',
            second:second
          }
        })
      }}
  }

  const companyBaseInfoModalProps = {
    item: gongshang.modalType === 'create' ? {} : gongshang.currentItem,
    type: gongshang.modalType,
    visible: gongshang.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${gongshang.modalType}`,
        payload: {data:data,bizName:'gongshang'}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'gongshang'}
      })
    }
  }

  const companyBaseInfoProps = {
    dataSource: gongshang.list,
    loading,
    pagination: gongshang.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'gongshang',
          bizName:'gongshang'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'gongshang'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'gongshang'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==1){
        message.warn('当前工商信息只允许添加一条！');
      }
      else{
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'create',
          bizName:'gongshang'
        }
      })
    }}
  }

  const zhangchengModalProps = {
    item: zhangcheng.modalType === 'create' ? {} : zhangcheng.currentItem,
    type: zhangcheng.modalType,
    visible: zhangcheng.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${zhangcheng.modalType}`,
        payload: {data:data,bizName:'zhangcheng',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'zhangcheng'}
      })
    }
  }

  const zhangchengProps = {
    dataSource: zhangcheng.list,
    loading,
    pagination: zhangcheng.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'zhangcheng',
          bizName:'zhangcheng'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'zhangcheng'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'zhangcheng'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'zhangcheng'
          }
        })
      }}
  }

  const zizhiModalProps = {
    item: zizhi.modalType === 'create' ? {} : zizhi.currentItem,
    type: zizhi.modalType,
    visible: zizhi.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${zizhi.modalType}`,
        payload: {data:data,bizName:'zizhi',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'zizhi'}
      })
    }
  }

  const zizhiProps = {
    dataSource: zizhi.list,
    loading,
    pagination: zizhi.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'zizhi',
          bizName:'zizhi'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'zizhi'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'zizhi'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'zizhi'
          }
        })
      }}
  }

  const fayuanModalProps = {
    item: fayuan.modalType === 'create' ? {} : fayuan.currentItem,
    type: fayuan.modalType,
    visible: fayuan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${fayuan.modalType}`,
        payload: {data:data,bizName:'fayuan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'fayuan'}
      })
    }
  }

  const fayuanProps = {
    dataSource: fayuan.list,
    loading,
    pagination: fayuan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'fayuan',
          bizName:'fayuan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'fayuan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'fayuan'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'fayuan'
          }
        })
      }}
  }

  const gerenfayuanModalProps = {
    item: gerenfayuan.modalType === 'create' ? {} : gerenfayuan.currentItem,
    type: gerenfayuan.modalType,
    visible: gerenfayuan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${gerenfayuan.modalType}`,
        payload: {data:data,bizName:'gerenfayuan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'gerenfayuan'}
      })
    }
  }

  const gerenfayuanProps = {
    dataSource: gerenfayuan.list,
    loading,
    pagination: gerenfayuan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'gerenfayuan',
          bizName:'gerenfayuan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'gerenfayuan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'gerenfayuan'
        }
      })
    },
    onAdd () {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'gerenfayuan'
          }
        })
      }}
  }

  const yingshouModalProps = {
    second:yingshou.second,
    item: yingshou.modalType === 'create' ? {} : yingshou.currentItem,
    type: yingshou.modalType,
    visible: yingshou.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${yingshou.modalType}`,
        payload: {data:data,bizName:'yingshou',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'yingshou'}
      })
    }
  }

  const yingshouProps = {
    dataSource: yingshou.list,
    loading,
    pagination: yingshou.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'yingshou',
          bizName:'yingshou'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'yingshou'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'yingshou',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'yingshou',
            second:second
          }
        })
      }}
  }

  const yingfuModalProps = {
    second:yingfu.second,
    item: yingfu.modalType === 'create' ? {} : yingfu.currentItem,
    type: yingfu.modalType,
    visible: yingfu.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${yingfu.modalType}`,
        payload: {data:data,bizName:'yingfu',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'yingfu'}
      })
    }
  }

  const yingfuProps = {
    dataSource: yingfu.list,
    loading,
    pagination: yingfu.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'yingfu',
          bizName:'yingfu'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'yingfu'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'yingfu',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'yingfu',
            second:second
          }
        })
      }}
  }

  const yushouModalProps = {
    second:yushou.second,
    item: yushou.modalType === 'create' ? {} : yushou.currentItem,
    type: yushou.modalType,
    visible: yushou.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${yushou.modalType}`,
        payload: {data:data,bizName:'yushou',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'yushou'}
      })
    }
  }

  const yushouProps = {
    dataSource: yushou.list,
    loading,
    pagination: yushou.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'yushou',
          bizName:'yushou'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'yushou'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'yushou',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'yushou',
            second:second
          }
        })
      }}
  }

  const yufuModalProps = {
    second:yufu.second,
    item: yufu.modalType === 'create' ? {} : yufu.currentItem,
    type: yufu.modalType,
    visible: yufu.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${yufu.modalType}`,
        payload: {data:data,bizName:'yufu',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'yufu'}
      })
    }
  }

  const yufuProps = {
    dataSource: yufu.list,
    loading,
    pagination: yufu.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'yufu',
          bizName:'yufu'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'yufu'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'yufu',
          second:second
        }
      })
    },
    onAdd (second) {
      if(gongshang.list.length==0){
        message.warn('请先填写录入:工商信息！');
      }
      else{
        dispatch({
          type: 'addNewUser/showModal',
          payload: {
            modalType: 'create',
            bizName:'yufu',
            second:second
          }
        })
      }}
  }


  const UserModalGen = () =>
  <div><PodanbaoModal {...podanbaoModalProps}/><GrdanbaoModal {...grdanbaoModalProps}/><DanbaoModal {...danbaoModalProps}/><DaikuanModal {...daikuanModalProps}/><GudingzichanModal {...gudingzichanModalProps}/><CunhuoModal {...cunhuoModalProps}/><QitayingfuModal {...qitayingfuModalProps}/><QitayingshouModal {...qitayingshouModalProps}/><YufuModal {...yufuModalProps}/><YushouModal {...yushouModalProps}/><YingfuModal {...yingfuModalProps}/><YingshouModal {...yingshouModalProps}/><GerenfayuanModal {...gerenfayuanModalProps}/><FayuanModal {...fayuanModalProps}/><ZizhiModal Modal {...zizhiModalProps}/><ZhangchengModal {...zhangchengModalProps}/>< CompanyBaseInfoModal{...companyBaseInfoModalProps}/></div>

  return (
    <div className='content-inner'>
      <Tag color="orange">{Name?(currentContent+"  企业名称："+Name):(currentContent)}</Tag>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Icon type="book" />企业资料</span>} key="1">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="1.营业执照正、副本(三合一)或营业执照、组织机构代码证、税务登记证" key="1">
              <CompanyBaseInfo {...companyBaseInfoProps}/>
            </Panel>
            <Panel header="2.公司章程正本" key="2">
              <Zhangcheng {...zhangchengProps}/>
              <Zizhi {...zizhiProps}/>
              <Fayuan {...fayuanProps}/>
              <Gerenfayuan {...gerenfayuanProps}/>
            </Panel>
            <Panel header="3.近两年审计报告或财报" key="3">
              <Yingshou {...yingshouProps} second={0}/>
              <Yingfu {...yingfuProps} second={0}/>
              <Yushou {...yushouProps} second={0}/>
              <Yufu {...yufuProps} second={0}/>
              <Qitayingshou {...qitayingshouProps} second={0}/>
              <Qitayingfu {...qitayingfuProps} second={0}/>
              <Cunhuo {...cunhuoProps} second={0}/>
              <Gudingzichan {...gudingzichanProps} second={0}/>
            </Panel>
            <Panel header="4.近一季度审计报告或财报" key="4">
              <Yingshou {...yingshouProps} second={1}/>
              <Yingfu {...yingfuProps} second={1}/>
              <Yushou {...yushouProps} second={1}/>
              <Yufu {...yufuProps} second={1}/>
              <Qitayingshou {...qitayingshouProps} second={1}/>
              <Qitayingfu {...qitayingfuProps} second={1}/>
              <Cunhuo {...cunhuoProps} second={1}/>
              <Gudingzichan {...gudingzichanProps} second={1}/>
            </Panel>
            <Panel header="5.企业征信表" key="5">
              <Daikuan {...daikuanProps}/>
              <Danbao {...danbaoProps}/>
              <Grdanbao {...grdanbaoProps}/>
              <Podanbao {...podanbaoProps}/>
            </Panel>
            <Panel header="6.开户许可证" key="6">

            </Panel>
            <Panel header="7.安全生产许可证" key="7">

            </Panel>
            <Panel header="8.企业基本户一年流水" key="8">

            </Panel>
          </Collapse>



        </TabPane>
        <TabPane tab={<span><Icon type="laptop" />采购项目</span>} key="2">
          Tab 2
        </TabPane>
        <TabPane tab={<span><Icon type="team" />个人资料</span>} key="3">
          Tab 3
        </TabPane>
        <TabPane tab={<span><Icon type="solution" />其他资料</span>} key="4">
          Tab 4
        </TabPane>
      </Tabs>
      <UserModalGen />
    </div>
  )
}

AddNewUser.propTypes = {
  userDetails: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps ({ addNewUser }) {
  return { addNewUser }
}

export default connect(mapStateToProps)(AddNewUser)


