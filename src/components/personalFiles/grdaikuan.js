import React from 'react'
import {Table, Popconfirm,Button} from 'antd'
import {TweenOneGroup} from 'rc-tween-one'
import styles from './companyFiles.less'
const Mock = require('mockjs')

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
      onAdd,
      onDeleteItem,
      onEditItem
    } = this.props
    const columns = [
      {
        title: '贷款类别',
        dataIndex: 'LoanName',
        key: 'LoanName'
      }, {
        title: '金额',
        dataIndex: 'Account',
        key: 'Account'
      }, {
        title: '到期时间',
        dataIndex: 'OverTime',
        key: 'OverTime',
        render: (text) => <span>{new Date(text).toLocaleString()}</span>
      }, {
        title: '未还余额',
        dataIndex: 'Debt',
        key: 'Debt'
      }, {
        title: '担保事务',
        dataIndex: 'Guarantee',
        key: 'Guarantee'
      },{
        title: '有无逾期',
        dataIndex: 'Timeout',
        key: 'Timeout'
      }, {
        title: '扫描文件',
        dataIndex: 'ScanFile',
        key: 'ScanFile',
        render: (text) => <a target="_blank" href={text?("http://p.cdito.cn:8118"+text):"javascript:void(0)"} >{text?"点击查看图片":"请点击编辑上传图片"}</a>
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
      <span className={styles.title}>个人贷款信息</span><Button icon="plus" className={styles.marginLeft15} type="primary" onClick={onAdd}>添加个人贷款信息</Button>
      <Table className={styles.marginTop15} bordered columns={columns} dataSource={dataSource} simple pagination={false} rowKey={record => record.KeyID} getBodyWrapper={this.getBodyWrapper} />
    </div>
  }
}

export default zhangcheng
