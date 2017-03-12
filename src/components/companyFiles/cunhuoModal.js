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
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
        Timing:second
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建存货信息' : '修改存货信息'}`,
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
    action: '/InputSystem/DataService/api/v1/upload/cunhuo/'+item.KeyID,
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
        <FormItem label='存货名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('StockName', {
            initialValue: item.StockName,
            rules: [
              {
                required: true,
                message: '请填写存货名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='账面价值：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('BookValue', {
            initialValue: item.BookValue,
            rules: [
              {
                required: false,
                message: '请填写账面价值'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='市场价值' hasFeedback {...formItemLayout}>
          {getFieldDecorator('MarketValue', {
            initialValue: item.MarketValue,
            rules: [
              {
                required: false,
                message: '请填写市场价值'
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
