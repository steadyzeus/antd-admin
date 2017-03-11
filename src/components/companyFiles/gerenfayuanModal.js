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
    title: `${type === 'create' ? '新建个人法院执行信息' : '修改个人法院执行信息'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='实际控制人：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Controller', {
            initialValue: item.Controller,
            rules: [
              {
                required: true,
                message: '请填写实际控制人'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='法人：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Owner', {
            initialValue: item.Owner,
            rules: [
              {
                required: false,
                message: '请填写法人'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='身份证号' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PID', {
            initialValue: item.PID,
            rules: [
              {
                required: false,
                message: '请填写身份证号'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='有无法院执行信息：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Law', {
            initialValue: item.Law,
            rules: [
              {
                required: false,
                message: '有无法院执行信息'
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
