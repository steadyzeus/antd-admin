import React from 'react'
import {Table, Popconfirm,Button} from 'antd'
import {TweenOneGroup} from 'rc-tween-one'
import styles from './companyFiles.less'
const Mock = require('mockjs')

class yingshou extends React.Component {
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

  onEnd = (e) => {
    e.target.style.height = 'auto'
  }

  async pageChange (pagination) {
    await this.props.onPageChange(pagination)
    this.newPage = pagination.current
  }

  render () {
    const {
      second,
      dataSource,
      pagination,
      onAdd,
      onDeleteItem,
      onEditItem
    } = this.props
    let currentDataSource=[];
    for(let item of dataSource){
      if(item.SupplierType!=null && item.SupplierType==second){
        currentDataSource.push(item);
      }
    }

    const columns = [
      {
        title: '项目名称',
        dataIndex: 'ProjectName',
        key: 'ProjectName',
      }, {
        title: '供应商名称',
        dataIndex: 'SupplierName',
        key: 'SupplierName'
      }, {
        title: '产品',
        dataIndex: 'Product',
        key: 'Product'
      }, {
        title: '单价',
        dataIndex: 'UnitPrice',
        key: 'UnitPrice'
      }, {
        title: '付款时间',
        dataIndex: 'PayTime',
        key: 'PayTime',
        render: (text) => <span>{new Date(text).toLocaleString()}</span>
      },  {
        title: '预付款金额',
        dataIndex: 'PrePayMoney',
        key: 'PrePayMoney'
      }, {
        title: '付款方式',
        dataIndex: 'PayWay',
        key: 'PayWay'
      },{
        title: '实际付款时间',
        dataIndex: 'ActualPayTime',
        key: 'ActualPayTime',
        render: (text) => <span>{new Date(text).toLocaleString()}</span>
      }, {
        title: '扫描文件',
        dataIndex: 'ScanFile',
        key: 'ScanFile',
        render: (text,record) =>text?<a target="_blank" href={"http://p.cdito.cn:8118"+text}>点击查看文件</a>:<a onClick={() => onEditItem(record)} style={{marginRight: 4}}>请点击编辑上传文件</a>
      },{
        title: '贷款编号',
        dataIndex: 'LoanId',
        key: 'LoanId'
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
            <a onClick={() => onEditItem(record,second)} style={{
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
      <span className={styles.title}>{second?"下"+"游采购合同（3份以上）":"上"+"游采购合同（3份以上）"}</span><Button icon="plus" className={styles.marginLeft15} type="primary" onClick={()=>onAdd(second)}>{second?"添加下"+"游采购合同（3份以上）":"添加上"+"游采购合同（3份以上）"}</Button>
      <Table className={styles.marginTop15} bordered columns={columns} dataSource={currentDataSource} simple pagination={false} rowKey={record => record.KeyID} getBodyWrapper={this.getBodyWrapper} />
    </div>
  }
}

export default yingshou
