import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import UserList from '../components/userAdmin/list'
import UserModal from '../components/userAdmin/modal'


function Users ({ location, dispatch, userAdmin }) {
  const { loading, list, pagination, currentItem, modalVisible, modalType } = userAdmin

  const userModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk (data) {
      dispatch({
        type: `userAdmin/${modalType}`,
        payload: {data:data,bizName:'yonghu'}
      })
    },
    onCancel () {
      dispatch({
        type: 'userAdmin/hideModal'
      })
    }
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onDeleteItem (id) {
      dispatch({
        type: 'userAdmin/delete',
        payload: {id:id,bizName:'yonghu'}
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'userAdmin/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
          bizName:'yonghu'
        }
      })
    },
    onAdd () {
        dispatch({
          type: 'userAdmin/showModal',
          payload: {
            modalType: 'create',
            bizName:'yonghu'
          }
        })
      }
  }

  const UserModalGen = () =>
    <UserModal {...userModalProps} />

  return (
    <div className='content-inner'>
      <UserList {...userListProps} />
      <UserModalGen />
    </div>
  )
}

Users.propTypes = {
  userAdmin: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps ({ userAdmin }) {
  return { userAdmin }
}

export default connect(mapStateToProps)(Users)
