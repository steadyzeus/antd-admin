import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal } from 'antd'
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
    debugger;
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
    title: `${type === 'create' ? '新建用户' : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='用户名：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('UserName', {
            initialValue: item.UserName,
            rules: [
              {
                required: true,
                message: '用户名未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='密码：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Password', {
            initialValue: item.Password,
            rules: [
              {
                required: true,
                message: '密码未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='是否是管理员' hasFeedback {...formItemLayout}>
          {getFieldDecorator('IsAdmin', {
            initialValue: item.IsAdmin,
            rules: [
              {
                required: true,
                message: '请选择是否是管理员'
              }
            ]
          })(
            <Radio.Group>
              <Radio value={0}>不是</Radio>
              <Radio value={1}>是</Radio>
            </Radio.Group>
          )}
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
