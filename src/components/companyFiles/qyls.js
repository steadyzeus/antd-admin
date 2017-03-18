import React from 'react'
import {Table, Popconfirm,Button,message,Upload,Icon} from 'antd'
import {TweenOneGroup} from 'rc-tween-one'
import styles from './companyFiles.less'
const Mock = require('mockjs')
import { connect } from 'dva'
class zhangcheng extends React.Component {
  constructor (props) {
    super(props)
    this.enterAnim = [
      {
        opacity: 0,
        x: 30,
        backgroundColor: '#fffeee',
        duration: 0
      }, {
        height: 0,
        duration: 200,
        type: 'from',
        delay: 250,
        ease: 'easeOutQuad',
        onComplete: this.onEnd
      }, {
        opacity: 1,
        x: 0,
        duration: 250,
        ease: 'easeOutQuad'
      }, {
        delay: 1000,
        backgroundColor: '#fff'
      }
    ]
    this.leaveAnim = [
      {
        duration: 250,
        opacity: 0
      }, {
        height: 0,
        duration: 200,
        ease: 'easeOutQuad'
      }
    ]
    const {current} = this.props.pagination
    this.currentPage = current
    this.newPage = current
  }

  getBodyWrapper = (body) => {
    // 切换分页去除动画;
    if (this.currentPage !== this.newPage) {
      this.currentPage = this.newPage
      return body
    }
    return (
      <TweenOneGroup component='tbody' className={body.props.className} enter={this.enterAnim} leave={this.leaveAnim} appear={false}>
        {body.props.children}
      </TweenOneGroup>
    )
  }


/*  if(gongshang.list.length==0){
  message.warn('请先填写录入:工商信息！');
}*/

  onEnd = (e) => {
    e.target.style.height = 'auto'
  }

  async pageChange (pagination) {
    await this.props.onPageChange(pagination)
    this.newPage = pagination.current
  }


  render () {
    const {
      dataSource,
      pagination,
      onExcelAdd,
      onAdd,
      onDeleteItem,
      onEditItem,
      addNewUser
    } = this.props
    const {gongshang}=addNewUser;
    let currentKeyID= "";
    if(gongshang.list.length>0){
      currentKeyID=gongshang.list[0].KeyID;
    }
    let total=dataSource.length;
    let currentPagination={
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      total: dataSource.length
    }

    function handleChange (info){
      if (info.file.status === 'done') {
        if(info.file.response.Message === 'success'){
          message.success(`${info.file.name} 上传成功`);
          let listData=JSON.parse(info.file.response.Data);
          debugger;
          if(listData.length>0) {
            onExcelAdd(listData);
          }
        }else {
          message.error(`${info.file.name} 上传失败`);
        }
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }

    }
    const props = {
      name: 'file',
      action: '/InputSystem/DataService/api/v1/import/qyls/'+currentKeyID,
      onChange: handleChange
    };

    const upload=
      <Upload {...props}>
        <Button>
          <Icon type="upload" />导入Excel工资表
        </Button>
      </Upload>
    const columns = [
      {
        title: '贷款编号',
        dataIndex: 'LoanId',
        key: 'LoanId',
      }, {
        title: '交易时间',
        dataIndex: 'JYDateTime',
        key: 'JYDateTime'
      }, {
        title: '收入金额',
        dataIndex: 'InMoney',
        key: 'InMoney'
      }, {
        title: '支出金额',
        dataIndex: 'OutMoney',
        key: 'OutMoney'
      }, {
        title: '账户余额',
        dataIndex: 'Balance',
        key: 'Balance'
      }, {
        title: '交易行名',
        dataIndex: 'JYBank',
        key: 'JYBank'
      }, {
        title: '对方省市',
        dataIndex: 'DFCity',
        key: 'DFCity'
      }, {
        title: '对方账号',
        dataIndex: 'DFAccount',
        key: 'DFAccount'
      }, {
        title: '对方户名',
        dataIndex: 'DFName',
        key: 'DFName'
      }, {
        title: '交易用途',
        dataIndex: 'TransReason',
        key: 'TransReason'
      }, {
        title: '扫描文件',
        dataIndex: 'ScanFile',
        key: 'ScanFile',
        render: (text,record) =>text?<a target="_blank" href={"http://p.cdito.cn:8118"+text}>点击查看图片</a>:<a onClick={() => onEditItem(record)} style={{marginRight: 4}}>请点击编辑上传图片</a>
      }, {
        title: '添加时间',
        dataIndex: 'AddTime',
        key: 'AddTime',
        render: (text) => <span>{new Date(text).toLocaleString()}</span>
      }, {
        title: '修改时间',
        dataIndex: 'ModifyTime',
        key: 'ModifyTime',
        render: (text) => <span>{new Date(text).toLocaleString()}</span>
      }
      , {
        title: '操作',
        key: 'operation',
        width: 100,
        render: (text, record) => (
          <p>
            <a onClick={() => onEditItem(record)} style={{
              marginRight: 4
            }}>编辑</a>
            <Popconfirm title='确定要删除吗？' onConfirm={() => onDeleteItem(record.KeyID)}>
              <a>删除</a>
            </Popconfirm>
          </p>
        )
      }
    ]
    return <div className={styles.marginBottom}>
      <span className={styles.title}>企业流水</span>{upload}<Button icon="plus" className={styles.marginLeft15} type="primary" onClick={onAdd}>添加企业流水</Button>
      <Table className={styles.marginTop15} scroll={{
        x: 1000
      }} bordered columns={columns} dataSource={dataSource} simple pagination={currentPagination} rowKey={record => record.KeyID} getBodyWrapper={this.getBodyWrapper} />
    </div>
  }
}

function mapStateToProps ({ addNewUser }) {
  return { addNewUser }
}

export default connect(mapStateToProps)(zhangcheng)
