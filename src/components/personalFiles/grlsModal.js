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

import moment from 'moment';

// It's recommended to set locale in entry file globaly.
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

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
  let currentImgUrl=item.ScanFile;
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
        ScanFile:currentImgUrl
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建个人流水' : '修改个人流水'}`,
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
    action: '/InputSystem/DataService/api/v1/upload/grls/'+item.KeyID,
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
        <FormItem label='交易日期' hasFeedback {...formItemLayout}>
          {getFieldDecorator('JYDate', {
            initialValue: item.JYDate,
            rules: [
              {
                required: true,
                message: '请填写交易日期'
              }
            ]
          })(<Input />)}
        </FormItem>
          <FormItem label='交易时间' hasFeedback {...formItemLayout}>
            {getFieldDecorator('JYTime', {
              initialValue: item.JYTime,
              rules: [
                {
                  required: false,
                  message: '请填写金额'
                }
              ]
            })(<Input />)}
          </FormItem>
        <FormItem label='收入金额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('InMoney', {
            initialValue: item.InMoney,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='支出金额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('OutMoney', {
            initialValue: item.OutMoney,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='本次余额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Balance', {
            initialValue: item.Balance,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='对方账号' hasFeedback {...formItemLayout}>
          {getFieldDecorator('DFAccount', {
            initialValue: item.DFAccount,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='对方户名' hasFeedback {...formItemLayout}>
          {getFieldDecorator('DFName', {
            initialValue: item.DFName,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
            <FormItem label='交易行名' hasFeedback {...formItemLayout}>
              {getFieldDecorator('JYBank', {
                initialValue: item.JYBank,
                rules: [
                  {
                    required: false,
                    message: '请填写金额'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label='交易方式' hasFeedback {...formItemLayout}>
              {getFieldDecorator('JYType', {
                initialValue: item.JYType,
                rules: [
                  {
                    required: false,
                    message: '请填写金额'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label='交易渠道' hasFeedback {...formItemLayout}>
              {getFieldDecorator('JYChannel', {
                initialValue: item.JYChannel,
                rules: [
                  {
                    required: false,
                    message: '请填写金额'
                  }
                ]
              })(<Input />)}
            </FormItem>
        <FormItem label='转账用途' hasFeedback {...formItemLayout}>
          {getFieldDecorator('TransReason', {
            initialValue: item.TransReason,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem label='交易说明' hasFeedback {...formItemLayout}>
          {getFieldDecorator('JYRemark', {
            initialValue: item.JYRemark,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='交易摘要' hasFeedback {...formItemLayout}>
          {getFieldDecorator('JYSummary', {
            initialValue: item.JYSummary,
            rules: [
              {
                required: false,
                message: '请填写金额'
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
