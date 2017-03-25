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
    title: `${type === 'create' ? '新建税务信息' : '修改税务信息'}`,
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
    action: '/InputSystem/DataService/api/v1/upload/shuiwu/'+item.KeyID,
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
        <FormItem label='月份：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Month', {
            initialValue: item.Month,
            rules: [
              {
                required: true,
                message: '请填写月份'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='国税：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('CountryTax', {
            initialValue: item.CountryTax,
            rules: [
              {
                required: false,
                message: '请填验资/认缴'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='地税' hasFeedback {...formItemLayout}>
          {getFieldDecorator('LocalTax', {
            initialValue: item.LocalTax,
            rules: [
              {
                required: false,
                message: '请填写金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='所得税：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('IncomeTax', {
            initialValue: item.IncomeTax,
            rules: [
              {
                required: false,
                message: '请填百分比'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='印花税：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('StampTax', {
            initialValue: item.StampTax,
            rules: [
              {
                required: false,
                message: '请填印花税'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='价调基金：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('AdjustFund', {
            initialValue: item.AdjustFund,
            rules: [
              {
                required: false,
                message: '请填价调基金'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='个人所得税：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PersonalTax', {
            initialValue: item.PersonalTax,
            rules: [
              {
                required: false,
                message: '请填个人所得税'
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
