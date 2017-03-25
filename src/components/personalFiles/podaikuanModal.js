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
    title: `${type === 'create' ? '新建配偶个人贷款信息' : '修改配偶个人贷款信息'}`,
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
    action: '/InputSystem/DataService/api/v1/upload/podaikuan/'+item.KeyID,
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
    onChange: handleChange
  };

  const upload=<div style={{paddingLeft: "8px"}}>
    <Upload {...props}>
      <Button>
        <Icon type="upload" />上传文件
      </Button>
    </Upload>
    <div style={{marginTop:"10px",color:'red'}}>注意：只允许上传一张图片，第二次上传会覆盖上一张</div>
  </div>;
  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='贷款类别：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('LoanName', {
            initialValue: item.LoanName,
            rules: [
              {
                required: true,
                message: '请填贷款类别'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='金额：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Account', {
            initialValue: item.Account,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='到期时间：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('OverTime', {
            initialValue: moment(item.OverTime) || moment(new Date()),
            rules: [
              {
                required: false,
                message: '请填写合同日期'
              }
            ]
          })(<DatePicker style={{width:'284px'}} showTime format="YYYY-MM-DD HH:mm:ss"/>)}
        </FormItem>
        <FormItem label='未还余额：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Debt', {
            initialValue: item.Debt,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='担保事务：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Guarantee', {
            initialValue: item.Guarantee,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='有无逾期' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Timeout', {
            initialValue: item.Timeout,
            rules: [
              {
                required: false,
                message: '请填写状态'
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
