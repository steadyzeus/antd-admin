import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,DatePicker, TimePicker} from 'antd'
const FormItem = Form.Item

import moment from 'moment';

// It's recommended to set locale in entry file globaly.
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

const modal = ({
  visible,
  type,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建预付账款' : '修改预付账款'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='供应商名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('SupplierName', {
            initialValue: item.SupplierName,
            rules: [
              {
                required: true,
                message: '请填写供应商名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='日期：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('PreDate', {
            initialValue: moment(item.PreDate) || moment(new Date()),
            rules: [
              {
                required: false,
                message: '请填写日期'
              }
            ]
          })(<DatePicker style={{width:'284px'}} showTime format="YYYY-MM-DD HH:mm:ss"/>)}
        </FormItem>
        <FormItem label='金额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PreAccount', {
            initialValue: item.PreAccount,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

export default Form.create()(modal)
