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
  second,
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
        SupplierType:second,
        ScanFile:currentImgUrl
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? (second?"新建下"+"游采购合同":"新建上"+"游采购合同") : (second?"修改下"+"游采购合同":"修改上"+"游采购合同") }`,
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
    action: '/InputSystem/DataService/api/v1/upload/gongyingshang/'+item.KeyID,
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
                message: '请填写项目名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='供应商名称：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('SupplierName', {
            initialValue: item.SupplierName,
            rules: [
              {
                required: false,
                message: '请填写合同金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='产品' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Product', {
            initialValue: item.Product,
            rules: [
              {
                required: false,
                message: '请填写合同金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='单价：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('UnitPrice', {
            initialValue: item.UnitPrice,
            rules: [
              {
                required: false,
                message: '请填写账期'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='付款时间：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('PayTime', {
            initialValue: moment(item.PayTime) || moment(new Date()),
            rules: [
              {
                required: false,
                message: '请填写合同日期'
              }
            ]
          })(<DatePicker style={{width:'284px'}} showTime format="YYYY-MM-DD HH:mm:ss"/>)}
        </FormItem>
        <FormItem label='预付款金额' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PrePayMoney', {
            initialValue: item.PrePayMoney,
            rules: [
              {
                required: false,
                message: '请填写合同金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='付款方式' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PayWay', {
            initialValue: item.PayWay,
            rules: [
              {
                required: false,
                message: '请填写合同金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='实际付款时间：' hasFeedback {...formItemLayout} >
          {getFieldDecorator('ActualPayTime', {
            initialValue: moment(item.ActualPayTime) || moment(new Date()),
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
