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
import AqscxkzModal from '../components/companyFiles/aqscxkzModal'
import Aqscxkz from '../components/companyFiles/aqscxkz'
import KhxkzModal from '../components/companyFiles/khxkzModal'
import Khxkz from '../components/companyFiles/khxkz'
import ShuiwuModal from '../components/companyFiles/shuiwuModal'
import Shuiwu from '../components/companyFiles/shuiwu'
import QylsModal from '../components/companyFiles/qylsModal'
import Qyls from '../components/companyFiles/qyls'
import ShebaoModal from '../components/companyFiles/shebaoModal'
import Shebao from '../components/companyFiles/shebao'
import GongyingshangModal from '../components/purchaseProjects/gongyingshangModal'
import Gongyingshang from '../components/purchaseProjects/gongyingshang'
import KehuModal from '../components/purchaseProjects/kehuModal'
import Kehu from '../components/purchaseProjects/kehu'
import LszhongbiaoModal from '../components/purchaseProjects/lszhongbiaoModal'
import Lszhongbiao from '../components/purchaseProjects/lszhongbiao'
import GysfayuanModal from '../components/purchaseProjects/gysfayuanModal'
import Gysfayuan from '../components/purchaseProjects/gysfayuan'
import CheliangModal from '../components/personalFiles/cheliangModal'
import Cheliang from '../components/personalFiles/cheliang'
import FangchanModal from '../components/personalFiles/fangchanModal'
import Fangchan from '../components/personalFiles/fangchan'
import PoxingyongkaModal from '../components/personalFiles/poxingyongkaModal'
import Poxingyongka from '../components/personalFiles/poxingyongka'
import XingyongkaModal from '../components/personalFiles/xingyongkaModal'
import Xingyongka from '../components/personalFiles/xingyongka'
import PodaikuanModal from '../components/personalFiles/podaikuanModal'
import Podaikuan from '../components/personalFiles/podaikuan'
import GrdaikuanModal from '../components/personalFiles/grdaikuanModal'
import Grdaikuan from '../components/personalFiles/grdaikuan'
import ShenfenzhengModal from '../components/personalFiles/shenfenzhengModal'
import Shenfenzheng from '../components/personalFiles/shenfenzheng'
import HukoubenModal from '../components/personalFiles/hukoubenModal'
import Hukouben from '../components/personalFiles/hukouben'
import GrtyzhengxinModal from '../components/personalFiles/grtyzhengxinModal'
import Grtyzhengxin from '../components/personalFiles/grtyzhengxin'
import ZhengxinModal from '../components/personalFiles/zhengxinModal'
import Zhengxin from '../components/personalFiles/zhengxin'
import JiehunzhengModal from '../components/personalFiles/jiehunzhengModal'
import Jiehunzheng from '../components/personalFiles/jiehunzheng'
import GrlsModal from '../components/personalFiles/grlsModal'
import Grls from '../components/personalFiles/grls'
import QitaziliaoModal from '../components/personalFiles/qitaziliaoModal'
import Qitaziliao from '../components/personalFiles/qitaziliao'



import { Tabs, Icon,message,Tag,Collapse ,Spin} from 'antd';
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

function AddNewUser ({ location, dispatch, addNewUser }) {
  const { loading,Name,currentContent,gongshang,zhangcheng,zizhi ,fayuan,gerenfayuan,yingshou,yingfu,yushou,yufu,qitayingshou,qitayingfu,cunhuo,gudingzichan,daikuan,danbao,grdanbao,podanbao,aqscxkz,khxkz,qyls,shebao,gongyingshang,kehu,lszhongbiao,gysfayuan,cheliang,fangchan,shuiwu,poxingyongka,xingyongka,podaikuan,grdaikuan,shenfenzheng,hukouben,jiehunzheng,grtyzhengxin,zhengxin,grls,qitaziliao} = addNewUser;
  /*const { field, keyword } = location.query*/
  const qitaziliaoModalProps = {
    item: qitaziliao.modalType === 'create' ? {} : qitaziliao.currentItem,
    type: qitaziliao.modalType,
    visible: qitaziliao.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${qitaziliao.modalType}`,
        payload: {data:data,bizName:'qitaziliao',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'qitaziliao'}
      })
    }
  }

  const qitaziliaoProps = {
    dataSource: qitaziliao.list,
    loading,
    pagination: qitaziliao.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'qitaziliao',
          bizName:'qitaziliao'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'qitaziliao'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'qitaziliao'
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
            bizName:'qitaziliao'
          }
        })
      }}
  }

  const grlsModalProps = {
    item: grls.modalType === 'create' ? {} : grls.currentItem,
    type: grls.modalType,
    visible: grls.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${grls.modalType}`,
        payload: {data:data,bizName:'grls',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'grls'}
      })
    }
  }

  const grlsProps = {
    dataSource: grls.list,
    loading,
    pagination: grls.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'grls',
          bizName:'grls'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'grls'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'grls'
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
            bizName:'grls'
          }
        })
      }},
    onExcelAdd(data){
      let listArrayData=data;
      dispatch({
        type: 'addNewUser/queryExcelSuccess',
        payload: {
          list: listArrayData,
          pagination: {
            total: listArrayData.length,
            current: 1
          },
          bizName:'grls'
        }
      })
    }

  }


  const jiehunzhengModalProps = {
    item: jiehunzheng.modalType === 'create' ? {} : jiehunzheng.currentItem,
    type: jiehunzheng.modalType,
    visible: jiehunzheng.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${jiehunzheng.modalType}`,
        payload: {data:data,bizName:'jiehunzheng',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'jiehunzheng'}
      })
    }
  }

  const jiehunzhengProps = {
    dataSource: jiehunzheng.list,
    loading,
    pagination: jiehunzheng.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'jiehunzheng',
          bizName:'jiehunzheng'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'jiehunzheng'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'jiehunzheng'
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
            bizName:'jiehunzheng'
          }
        })
      }}
  }

  const zhengxinModalProps = {
    item: zhengxin.modalType === 'create' ? {} : zhengxin.currentItem,
    type: zhengxin.modalType,
    visible: zhengxin.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${zhengxin.modalType}`,
        payload: {data:data,bizName:'zhengxin',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'zhengxin'}
      })
    }
  }

  const zhengxinProps = {
    dataSource: zhengxin.list,
    loading,
    pagination: zhengxin.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'zhengxin',
          bizName:'zhengxin'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'zhengxin'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'zhengxin'
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
            bizName:'zhengxin'
          }
        })
      }}
  }

  const grtyzhengxinModalProps = {
    item: grtyzhengxin.modalType === 'create' ? {} : grtyzhengxin.currentItem,
    type: grtyzhengxin.modalType,
    visible: grtyzhengxin.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${grtyzhengxin.modalType}`,
        payload: {data:data,bizName:'grtyzhengxin',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'grtyzhengxin'}
      })
    }
  }

  const grtyzhengxinProps = {
    dataSource: grtyzhengxin.list,
    loading,
    pagination: grtyzhengxin.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'grtyzhengxin',
          bizName:'grtyzhengxin'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'grtyzhengxin'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'grtyzhengxin'
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
            bizName:'grtyzhengxin'
          }
        })
      }}
  }

  const hukoubenModalProps = {
    item: hukouben.modalType === 'create' ? {} : hukouben.currentItem,
    type: hukouben.modalType,
    visible: hukouben.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${hukouben.modalType}`,
        payload: {data:data,bizName:'hukouben',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'hukouben'}
      })
    }
  }

  const hukoubenProps = {
    dataSource: hukouben.list,
    loading,
    pagination: hukouben.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'hukouben',
          bizName:'hukouben'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'hukouben'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'hukouben'
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
            bizName:'hukouben'
          }
        })
      }}
  }

  const shenfenzhengModalProps = {
    item: shenfenzheng.modalType === 'create' ? {} : shenfenzheng.currentItem,
    type: shenfenzheng.modalType,
    visible: shenfenzheng.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${shenfenzheng.modalType}`,
        payload: {data:data,bizName:'shenfenzheng',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'shenfenzheng'}
      })
    }
  }

  const shenfenzhengProps = {
    dataSource: shenfenzheng.list,
    loading,
    pagination: shenfenzheng.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'shenfenzheng',
          bizName:'shenfenzheng'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'shenfenzheng'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'shenfenzheng'
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
            bizName:'shenfenzheng'
          }
        })
      }}
  }


  const grdaikuanModalProps = {
    item: grdaikuan.modalType === 'create' ? {} : grdaikuan.currentItem,
    type: grdaikuan.modalType,
    visible: grdaikuan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${grdaikuan.modalType}`,
        payload: {data:data,bizName:'grdaikuan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'grdaikuan'}
      })
    }
  }

  const grdaikuanProps = {
    dataSource: grdaikuan.list,
    loading,
    pagination: grdaikuan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'grdaikuan',
          bizName:'grdaikuan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'grdaikuan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'grdaikuan'
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
            bizName:'grdaikuan'
          }
        })
      }}
  }

  const podaikuanModalProps = {
    item: podaikuan.modalType === 'create' ? {} : podaikuan.currentItem,
    type: podaikuan.modalType,
    visible: podaikuan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${podaikuan.modalType}`,
        payload: {data:data,bizName:'podaikuan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'podaikuan'}
      })
    }
  }

  const podaikuanProps = {
    dataSource: podaikuan.list,
    loading,
    pagination: podaikuan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'podaikuan',
          bizName:'podaikuan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'podaikuan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'podaikuan'
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
            bizName:'podaikuan'
          }
        })
      }}
  }
  const xingyongkaModalProps = {
    item: xingyongka.modalType === 'create' ? {} : xingyongka.currentItem,
    type: xingyongka.modalType,
    visible: xingyongka.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${xingyongka.modalType}`,
        payload: {data:data,bizName:'xingyongka',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'xingyongka'}
      })
    }
  }

  const xingyongkaProps = {
    dataSource: xingyongka.list,
    loading,
    pagination: xingyongka.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'xingyongka',
          bizName:'xingyongka'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'xingyongka'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'xingyongka'
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
            bizName:'xingyongka'
          }
        })
      }}
  }

  const poxingyongkaModalProps = {
    item: poxingyongka.modalType === 'create' ? {} : poxingyongka.currentItem,
    type: poxingyongka.modalType,
    visible: poxingyongka.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${poxingyongka.modalType}`,
        payload: {data:data,bizName:'poxingyongka',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'poxingyongka'}
      })
    }
  }

  const poxingyongkaProps = {
    dataSource: poxingyongka.list,
    loading,
    pagination: poxingyongka.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'poxingyongka',
          bizName:'poxingyongka'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'poxingyongka'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'poxingyongka'
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
            bizName:'poxingyongka'
          }
        })
      }}
  }

  const fangchanModalProps = {
    item: fangchan.modalType === 'create' ? {} : fangchan.currentItem,
    type: fangchan.modalType,
    visible: fangchan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${fangchan.modalType}`,
        payload: {data:data,bizName:'fangchan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'fangchan'}
      })
    }
  }

  const fangchanProps = {
    dataSource: fangchan.list,
    loading,
    pagination: fangchan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'fangchan',
          bizName:'fangchan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'fangchan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'fangchan'
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
            bizName:'fangchan'
          }
        })
      }}
  }

  const cheliangModalProps = {
    item: cheliang.modalType === 'create' ? {} : cheliang.currentItem,
    type: cheliang.modalType,
    visible: cheliang.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${cheliang.modalType}`,
        payload: {data:data,bizName:'cheliang',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'cheliang'}
      })
    }
  }

  const cheliangProps = {
    dataSource: cheliang.list,
    loading,
    pagination: cheliang.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'cheliang',
          bizName:'cheliang'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'cheliang'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'cheliang'
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
            bizName:'cheliang'
          }
        })
      }}
  }

  const gysfayuanModalProps = {
    item: gysfayuan.modalType === 'create' ? {} : gysfayuan.currentItem,
    type: gysfayuan.modalType,
    visible: gysfayuan.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${gysfayuan.modalType}`,
        payload: {data:data,bizName:'gysfayuan',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'gysfayuan'}
      })
    }
  }

  const gysfayuanProps = {
    dataSource: gysfayuan.list,
    loading,
    pagination: gysfayuan.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'gysfayuan',
          bizName:'gysfayuan'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'gysfayuan'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'gysfayuan'
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
            bizName:'gysfayuan'
          }
        })
      }}
  }

  const lszhongbiaoModalProps = {
    item: lszhongbiao.modalType === 'create' ? {} : lszhongbiao.currentItem,
    type: lszhongbiao.modalType,
    visible: lszhongbiao.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${lszhongbiao.modalType}`,
        payload: {data:data,bizName:'lszhongbiao',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'lszhongbiao'}
      })
    }
  }

  const lszhongbiaoProps = {
    dataSource: lszhongbiao.list,
    loading,
    pagination: lszhongbiao.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'lszhongbiao',
          bizName:'lszhongbiao'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'lszhongbiao'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'lszhongbiao'
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
            bizName:'lszhongbiao'
          }
        })
      }}
  }

  const kehuModalProps = {
    item: kehu.modalType === 'create' ? {} : kehu.currentItem,
    type: kehu.modalType,
    visible: kehu.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${kehu.modalType}`,
        payload: {data:data,bizName:'kehu',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'kehu'}
      })
    }
  }

  const kehuProps = {
    dataSource: kehu.list,
    loading,
    pagination: kehu.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'kehu',
          bizName:'kehu'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'kehu'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'kehu'
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
            bizName:'kehu'
          }
        })
      }}
  }

  const gongyingshangModalProps = {
    second:gongyingshang.second,
    item: gongyingshang.modalType === 'create' ? {} : gongyingshang.currentItem,
    type: gongyingshang.modalType,
    visible: gongyingshang.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${gongyingshang.modalType}`,
        payload: {data:data,bizName:'gongyingshang',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'gongyingshang'}
      })
    }
  }

  const gongyingshangProps = {
    dataSource: gongyingshang.list,
    loading,
    pagination: gongyingshang.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'gongyingshang',
          bizName:'gongyingshang'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'gongyingshang'}
      })
    },
    onEditItem (item,second) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'gongyingshang',
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
            bizName:'gongyingshang',
            second:second
          }
        })
      }}
  }



  const shebaoModalProps = {
    item: shebao.modalType === 'create' ? {} : shebao.currentItem,
    type: shebao.modalType,
    visible: shebao.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${shebao.modalType}`,
        payload: {data:data,bizName:'shebao',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'shebao'}
      })
    }
  }

  const shebaoProps = {
    dataSource: shebao.list,
    loading,
    pagination: shebao.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'shebao',
          bizName:'shebao'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'shebao'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'shebao'
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
            bizName:'shebao'
          }
        })
      }}
  }


  const qylsModalProps = {
    item: qyls.modalType === 'create' ? {} : qyls.currentItem,
    type: qyls.modalType,
    visible: qyls.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${qyls.modalType}`,
        payload: {data:data,bizName:'qyls',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'qyls'}
      })
    }
  }

  const qylsProps = {
    dataSource: qyls.list,
    loading,
    pagination: qyls.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'qyls',
          bizName:'qyls'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'qyls'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'qyls'
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
            bizName:'qyls'
          }
        })
      }},
    onExcelAdd(data){
        let listArrayData=data;
        dispatch({
          type: 'addNewUser/queryExcelSuccess',
          payload: {
            list: listArrayData,
            pagination: {
              total: listArrayData.length,
              current: 1
            },
            bizName:'qyls'
          }
        })
    }

  }

  const shuiwuModalProps = {
    item: shuiwu.modalType === 'create' ? {} : shuiwu.currentItem,
    type: shuiwu.modalType,
    visible: shuiwu.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${shuiwu.modalType}`,
        payload: {data:data,bizName:'shuiwu',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'shuiwu'}
      })
    }
  }

  const shuiwuProps = {
    dataSource: shuiwu.list,
    loading,
    pagination: shuiwu.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'shuiwu',
          bizName:'shuiwu'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'shuiwu'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'shuiwu'
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
            bizName:'shuiwu'
          }
        })
      }}
  }

  const khxkzModalProps = {
    item: khxkz.modalType === 'create' ? {} : khxkz.currentItem,
    type: khxkz.modalType,
    visible: khxkz.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${khxkz.modalType}`,
        payload: {data:data,bizName:'khxkz',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'khxkz'}
      })
    }
  }

  const khxkzProps = {
    dataSource: khxkz.list,
    loading,
    pagination: khxkz.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'khxkz',
          bizName:'khxkz'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'khxkz'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'khxkz'
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
            bizName:'khxkz'
          }
        })
      }}
  }

  const aqscxkzModalProps = {
    item: aqscxkz.modalType === 'create' ? {} : aqscxkz.currentItem,
    type: aqscxkz.modalType,
    visible: aqscxkz.modalVisible,
    onOk (data) {
      dispatch({
        type: `addNewUser/${aqscxkz.modalType}`,
        payload: {data:data,bizName:'aqscxkz',gongshangID:gongshang.list[0].KeyID}
      })
    },
    onCancel () {
      dispatch({
        type: 'addNewUser/hideModal',
        payload: {bizName:'aqscxkz'}
      })
    }
  }

  const aqscxkzProps = {
    dataSource: aqscxkz.list,
    loading,
    pagination: aqscxkz.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'aqscxkz',
          bizName:'aqscxkz'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'addNewUser/delete',
        payload: {id:id,bizName:'aqscxkz'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'addNewUser/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'aqscxkz'
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
            bizName:'aqscxkz'
          }
        })
      }}
  }


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
  <div><QitaziliaoModal {...qitaziliaoModalProps}/><ShenfenzhengModal {...shenfenzhengModalProps}/> <HukoubenModal {...hukoubenModalProps}/> <GrtyzhengxinModal {...grtyzhengxinModalProps}/><JiehunzhengModal {...jiehunzhengModalProps}/> <ZhengxinModal {...zhengxinModalProps}/> <GrdaikuanModal {...grdaikuanModalProps}/> <PodaikuanModal {...podaikuanModalProps}/> <PoxingyongkaModal {...poxingyongkaModalProps}/> <XingyongkaModal {...xingyongkaModalProps}/><GrlsModal {...grlsModalProps}/><CheliangModal {...cheliangModalProps}/> <FangchanModal {...fangchanModalProps}/><GysfayuanModal {...gysfayuanModalProps}/><LszhongbiaoModal {...lszhongbiaoModalProps}/><KehuModal {...kehuModalProps}/><GongyingshangModal {...gongyingshangModalProps}/><ShebaoModal {...shebaoModalProps}/><QylsModal {...qylsModalProps}/><ShuiwuModal {...shuiwuModalProps}/>
    <KhxkzModal {...khxkzModalProps}/>
    <AqscxkzModal {...aqscxkzModalProps}/>
    <PodanbaoModal {...podanbaoModalProps}/><GrdanbaoModal {...grdanbaoModalProps}/><DanbaoModal {...danbaoModalProps}/><DaikuanModal {...daikuanModalProps}/><GudingzichanModal {...gudingzichanModalProps}/><CunhuoModal {...cunhuoModalProps}/><QitayingfuModal {...qitayingfuModalProps}/><QitayingshouModal {...qitayingshouModalProps}/><YufuModal {...yufuModalProps}/><YushouModal {...yushouModalProps}/><YingfuModal {...yingfuModalProps}/><YingshouModal {...yingshouModalProps}/><GerenfayuanModal {...gerenfayuanModalProps}/><FayuanModal {...fayuanModalProps}/><ZizhiModal Modal {...zizhiModalProps}/><ZhangchengModal {...zhangchengModalProps}/>< CompanyBaseInfoModal{...companyBaseInfoModalProps}/></div>

  return (
    <div className='content-inner'>
      <Tag color="orange">{Name?(currentContent+"  企业名称："+Name):(currentContent)}</Tag>
      <Spin spinning={loading} tip="请求数据中..." size="large">
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
              <Khxkz {...khxkzProps}/>
            </Panel>
            <Panel header="7.安全生产许可证" key="7">
              <Aqscxkz {...aqscxkzProps}/>
            </Panel>
            <Panel header="8.企业基本户一年流水" key="8">
              <Shuiwu {...shuiwuProps}/>
              <Qyls {...qylsProps}/>
              <Shebao {...shebaoProps}/>
            </Panel>
          </Collapse>



        </TabPane>
        <TabPane tab={<span><Icon type="laptop" />采购项目</span>} key="2">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="1.中标通知书+签约合同" key="1">
              <Kehu {...kehuProps}/>
            </Panel>
            <Panel header="2.上下游采购合同(3份以上)" key="2">
              <Gongyingshang {...gongyingshangProps} second={0}/>
              <Gongyingshang {...gongyingshangProps} second={1}/>
            </Panel>
            <Panel header="3.过往业务中标书" key="3">
              <Lszhongbiao {...lszhongbiaoProps}/>
            </Panel>
            <Panel header="4.法院执行信息" key="4">
              <Gysfayuan {...gysfayuanProps}/>
            </Panel>
          </Collapse>

        </TabPane>
        <TabPane tab={<span><Icon type="team" />个人资料</span>} key="3">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="1.身份证信息" key="1">
              <Shenfenzheng {...shenfenzhengProps}/>
            </Panel>
            <Panel header="2.户口本信息" key="2">
              <Hukouben {...hukoubenProps}/>
            </Panel>
            <Panel header="3.结婚证(法人代表)" key="3">
              <Jiehunzheng {...jiehunzhengProps}/>
            </Panel>
            <Panel header="4.个人同意征信查询书" key="4">
              <Grtyzhengxin {...grtyzhengxinProps}/>
            </Panel>
            <Panel header="5.个人征信回执单" key="5">
              <Zhengxin {...zhengxinProps}/>
              <Grdaikuan {...grdaikuanProps}/>
              <Podaikuan {...podaikuanProps}/>
              <Xingyongka {...xingyongkaProps}/>
              <Poxingyongka {...poxingyongkaProps}/>
            </Panel>
            <Panel header="6.个人银行流水一年" key="6">
              <Grls {...grlsProps}/>
            </Panel>
            <Panel header="7.资产证明：房产证+房产讯息调档+车辆行驶证" key="7">
              <Fangchan {...fangchanProps}/>
              <Cheliang {...cheliangProps}/>
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab={<span><Icon type="solution" />其他资料</span>} key="4">
          <Qitaziliao {...qitaziliaoProps}/>
        </TabPane>
      </Tabs>
      </Spin>
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


