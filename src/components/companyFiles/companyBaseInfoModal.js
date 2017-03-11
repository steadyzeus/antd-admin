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
        <FormItem label='公司名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Name', {
            initialValue: item.Name,
            rules: [
              {
                required: true,
                message: '请填写公司名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='统一代码证：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Code', {
            initialValue: item.Code,
            rules: [
              {
                required: true,
                message: '请填写统一代码证'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='法人' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Owner', {
            initialValue: item.Owner,
            rules: [
              {
                required: true,
                message: '请填写法人'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='股东：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Partner', {
            initialValue: item.Partner,
            rules: [
              {
                required: true,
                message: '请填写股东'
              }
            ]
          })(<Input />)}
        </FormItem>
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
        <FormItem label='关联企业：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('RelationCorp', {
            initialValue: item.RelationCorp,
            rules: [
              {
                required: false,
                message: '请填关联企业'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='是否有违法信息：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Illegal', {
            initialValue: item.Illegal,
            rules: [
              {
                required: true,
                message: '请选择是否有违法信息'
              }
            ]
          })(
            <Radio.Group>
              <Radio value={'有'}>有</Radio>
              <Radio value={'无'}>无</Radio>
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
