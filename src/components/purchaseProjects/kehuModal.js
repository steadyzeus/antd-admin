import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal,DatePicker, TimePicker} from 'antd'
const FormItem = Form.Item
import { Upload, Button, Icon,message } from 'antd';

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
  second,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  let currentImgUrl=item.ScanFile;
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
        Timing:second,
        ScanFile:currentImgUrl
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建中标客户信息' : '修改中标客户信息'}`,
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
      if(info.file.response.Message === 'success'){
        message.success(`${info.file.name} 上传成功`);
        currentImgUrl=info.file.response.Data;
        handleOk();
      }else {
        message.error(`${info.file.name} 上传失败`);
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败`);
    }

  }

  const props = {
    action: '/InputSystem/DataService/api/v1/upload/kehu/'+item.KeyID,
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
        <FormItem label='项目名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('ProjectName', {
            initialValue: item.ProjectName,
            rules: [
              {
                required: true,
                message: '请填项目名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='客户名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('CustomerName', {
            initialValue: item.CustomerName,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='中标时间：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('BidTime', {
            initialValue: item.BidTime,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='产品：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Product', {
            initialValue: item.Product,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='中标金额：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('BidMoney', {
            initialValue: item.BidMoney,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='收款时间' hasFeedback {...formItemLayout}>
          {getFieldDecorator('ReceiveTime', {
            initialValue: item.ReceiveTime,
            rules: [
              {
                required: false,
                message: '请填写状态'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='预收金额：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PreMoney', {
            initialValue: item.PreMoney,
            rules: [
              {
                required: false,
                message: '请填余额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='项目状态：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Status', {
            initialValue: item.Status,
            rules: [
              {
                required: false,
                message: '请填余额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='余额：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Balance', {
            initialValue: item.Balance,
            rules: [
              {
                required: false,
                message: '请填余额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='截止日期：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('OverDate', {
            initialValue: moment(item.OverDate) || moment(new Date()),
            rules: [
              {
                required: false,
                message: '请填写合同日期'
              }
            ]
          })(<DatePicker style={{width:'284px'}} showTime format="YYYY-MM-DD HH:mm:ss"/>)}
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
