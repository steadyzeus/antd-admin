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
    title: `${type === 'create' ? '新建公司工商基本信息' : '修改公司工商基本信息'}`,
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
