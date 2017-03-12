import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,DatePicker, TimePicker} from 'antd'
const FormItem = Form.Item
import { Upload, Button, Icon,message } from 'antd';
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
  const fileList = [];

  if(item.ScanFile){
    let file= {
      uid: item.KeyID,
      name: item.ScanFile,
      status: 'done',
      url: 'http://p.cdito.cn:8118'+item.ScanFile,
      thumbUrl: 'http://p.cdito.cn:8118'+item.ScanFile,
    }
    fileList.push(file);
  }

  function handleChange (info){
    let fileListNow = info.fileList;
    let lastFile = fileListNow[(fileListNow.length-1)?(fileListNow.length-1):0] ;

    let firstFile=fileListNow[0];
    if (firstFile.status == "done") {
      fileListNow.shift();
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败`);
    }

  }

  const props = {
    action: '/InputSystem/DataService/api/v1/upload/gongshang/'+item.KeyID,
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
    onChange: handleChange
  };

  const upload=<div style={{paddingLeft: "8px"}}>
    <Upload {...props}>
      <Button>
        <Icon type="upload" />上传图片
      </Button>
    </Upload>
    <div style={{marginTop:"10px",color:'red'}}>注意：只允许上传一张图片，第二次上传会覆盖上一张</div>
  </div>;
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
      {type=="create"?[]:upload}
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
