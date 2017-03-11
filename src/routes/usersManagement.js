import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import UserList from '../components/usersManagement/list'
import UserSearch from '../components/usersManagement/search'
import UserModal from '../components/usersManagement/modal'

function UsersManagement ({ location, dispatch, usersManagement }) {
  const { loading, list, pagination, currentItem, modalVisible, modalType } = usersManagement
  const { field, keyword } = location.query

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
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize
        }
      }))
    },
    onDeleteItem (record) {
      dispatch({
        type: 'usersManagement/delete',
        payload: record
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'usersManagement/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    },
    onClickDetail (record) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: 'userDetails',
        query: {
          ...query,
          KeyID:record.KeyID,
          Name:record.Name
        }
      }))
    }
  }

  const userSearchProps = {
    field,
    keyword,
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/usersManagement',
        query: {
          field: fieldsValue.field,
          corpname: fieldsValue.keyword
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
  }

  const UserModalGen = () =>
    <UserModal {...userModalProps} />

  return (
    <div className='content-inner'>
      <UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModalGen />
    </div>
  )
}

UsersManagement.propTypes = {
  usersManagement: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps ({ usersManagement }) {
  return { usersManagement }
}

export default connect(mapStateToProps)(UsersManagement)
