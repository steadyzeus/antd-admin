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
    title: `${type === 'create' ? '新建结婚证信息' : '修改结婚证信息'}`,
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
    action: '/InputSystem/DataService/api/v1/upload/jiehunzheng/'+item.KeyID,
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
        <FormItem label='姓名：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Name', {
            initialValue: item.Name,
            rules: [
              {
                required: true,
                message: '请填姓名'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='身份证号码：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('PID', {
            initialValue: item.PID,
            rules: [
              {
                required: false,
                message: '请填金额'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='法人婚姻证明类型：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('HunyinType', {
            initialValue: item.HunyinType,
            rules: [
              {
                required: true,
                message: '请选择是否有违法信息'
              }
            ]
          })(
            <Radio.Group>
              <Radio value={0}>结婚证</Radio>
              <Radio value={1}>未婚：单身说明书</Radio>
              <Radio value={2}>离婚：离婚证+单身说明书</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label='备注信息：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Remark', {
            initialValue: item.Remark,
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
