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

import { Tabs, Icon,message,Tag } from 'antd';
const TabPane = Tabs.TabPane;

function AddNewUser ({ location, dispatch, addNewUser }) {
  const { loading,Name,currentContent,gongshang,zhangcheng,zizhi ,fayuan} = addNewUser;
  /*const { field, keyword } = location.query*/

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

  const UserModalGen = () =>
  <div><FayuanModal {...fayuanModalProps}/><ZizhiModal Modal {...zizhiModalProps}/><ZhangchengModal {...zhangchengModalProps}/>< CompanyBaseInfoModal{...companyBaseInfoModalProps}/></div>

  return (
    <div className='content-inner'>
      <Tag color="orange">{Name?(currentContent+"  企业名称："+Name):(currentContent)}</Tag>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Icon type="book" />企业资料</span>} key="1">
          <CompanyBaseInfo {...companyBaseInfoProps}/>
          <Zhangcheng {...zhangchengProps}/>
          <Zizhi {...zizhiProps}/>
          <Fayuan {...fayuanProps}/>
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


