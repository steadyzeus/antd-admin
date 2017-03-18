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
    title: `${type === 'create' ? '新建信用卡信息' : '修改信用卡信息'}`,
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
    action: '/InputSystem/DataService/api/v1/upload/xingyongka/'+item.KeyID,
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
        <FormItem label='所属银行：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('BankName', {
            initialValue: item.BankName,
            rules: [
              {
                required: true,
                message: '请填所属银行'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='授信额度：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('TotalAccount', {
            initialValue: item.TotalAccount,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='已使用额度：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('UsedAccount', {
            initialValue: item.UsedAccount,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='最大使用额度：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('MaxUsedAccount', {
            initialValue: item.MaxUsedAccount,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='是否逾期：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('OverTime', {
            initialValue: item.OverTime,
            rules: [
              {
                required: false,
                message: '请填金额'
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
