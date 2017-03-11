import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,DatePicker, TimePicker} from 'antd'
const FormItem = Form.Item

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
    title: `${type === 'create' ? '新建公司工商基本信息' : '修改公司工商基本信息'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='姓名：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Name', {
            initialValue: item.Name,
            rules: [
              {
                required: true,
                message: '请填写姓名'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='验资/认缴：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('BankRoll', {
            initialValue: item.BankRoll,
            rules: [
              {
                required: false,
                message: '请填验资/认缴'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='金额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Owner', {
            initialValue: item.Owner,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='百分比：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Partner', {
            initialValue: item.Partner,
            rules: [
              {
                required: false,
                message: '请填百分比'
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
