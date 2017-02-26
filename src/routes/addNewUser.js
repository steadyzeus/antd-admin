import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import UserList from '../components/usersManagement/list'
import UserSearch from '../components/usersManagement/search'
import UserModal from '../components/usersManagement/modal'
import CompanyBaseInfo from '../components/companyFiles/companyBaseInfo'
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

function AddNewUser ({ location, dispatch, companyFiles }) {
  const { loading } = companyFiles,companyBaseInfo=companyFiles.companyBaseInfo;
  /*const { field, keyword } = location.query

  const userModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk (data) {
      dispatch({
        type: `usersManagement/${modalType}`,
        payload: data
      })
    },
    onCancel () {
      dispatch({
        type: 'usersManagement/hideModal'
      })
    }
  }*/

  const companyBaseInfoProps = {
    dataSource: companyBaseInfo.list,
    loading,
    pagination: companyBaseInfo.pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
          dataType:'companyBaseInfo'
        }
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'companyFiles/delete',
        payload: id
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'companyFiles/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
  }

  /*const userSearchProps = {
    field,
    keyword,
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/usersManagement',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword
        }
      })) : dispatch(routerRedux.push({
        pathname: '/usersManagement'
      }))
    },
    onAdd () {
      dispatch({
        type: 'usersManagement/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }*/

  /*const UserModalGen = () =>
    <UserModal {...userModalProps} />*/

  return (
    <div className='content-inner'>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Icon type="book" />企业资料</span>} key="1">
          <CompanyBaseInfo {...companyBaseInfoProps}/>
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
      {/*<UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModalGen />*/}
    </div>
  )
}

AddNewUser.propTypes = {
  userDetails: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps ({ companyFiles }) {
  return { companyFiles }
}

export default connect(mapStateToProps)(AddNewUser)


