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
    title: `${type === 'create' ? '新建应收账款' : '修改应收账款'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='客户名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('CustomerName', {
            initialValue: item.CustomerName,
            rules: [
              {
                required: true,
                message: '请填写客户名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='合同日期：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('ContractDate', {
            initialValue: moment(item.ContractDate) || moment(new Date()),
            rules: [
              {
                required: false,
                message: '请填写合同日期'
              }
            ]
          })(<DatePicker style={{width:'284px'}} showTime format="YYYY-MM-DD HH:mm:ss"/>)}
        </FormItem>
        <FormItem label='合同金额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('ContractAccount', {
            initialValue: item.ContractAccount,
            rules: [
              {
                required: false,
                message: '请填写合同金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='账期：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('AccountPeriod', {
            initialValue: item.AccountPeriod,
            rules: [
              {
                required: false,
                message: '请填写账期'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='结算方式：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PayMethod', {
            initialValue: item.PayMethod,
            rules: [
              {
                required: false,
                message: '请填写结算方式'
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
