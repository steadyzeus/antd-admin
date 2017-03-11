import React from 'react'
import {Table, Popconfirm,Button} from 'antd'
import {TweenOneGroup} from 'rc-tween-one'
import styles from './companyFiles.less'
const Mock = require('mockjs')

class companyBaseInfo extends React.Component {
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
        title: '公司名称首字',
        dataIndex: 'Name',
        key: 'RandomName',
        width: 64,
        className: styles.avatar,
        render: (text) => {
          let avatar = Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', text.substr(0, 1))
         return <img width={24} src={avatar} />}
      }, {
        title: '公司名称',
        dataIndex: 'Name',
        key: 'Name'
      }, {
        title: '统一代码证',
        dataIndex: 'Code',
        key: 'Code'
      }, {
        title: '法人',
        dataIndex: 'Owner',
        key: 'Owner'
      }, {
        title: '股东',
        dataIndex: 'Partner',
        key: 'Partner'
      }, {
        title: '实际控制人',
        dataIndex: 'Controller',
        key: 'Controller'
      }, {
        title: '关联企业',
        dataIndex: 'RelationCorp',
        key: 'RelationCorp'
      }, {
        title: '是否有违法信息',
        dataIndex: 'Illegal',
        key: 'Illegal'
      }, {
        title: '扫描文件',
        dataIndex: 'ScanFile',
        key: 'ScanFile'
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
            {/*<Popconfirm title='确定要删除吗？' onConfirm={() => onDeleteItem(record.id)}>
              <a>删除</a>
            </Popconfirm>*/}
          </p>
        )
      }
    ]
    return <div className={styles.marginBottom}>
      <span>1.营业执照正、副本(三合一)或营业执照、组织机构代码证、税务登记证</span><span className={styles.red}>注意：要录入其它资料必须先录入该工商信息</span><Button className={styles.marginLeft15} type="primary" onClick={onAdd}>添加企业基本信息</Button>
      <Table className={styles.table} bordered scroll={{
        x: 1200
      }} columns={columns} dataSource={dataSource} simple pagination={false} rowKey={record => record.KeyID} getBodyWrapper={this.getBodyWrapper} />
    </div>
  }
}

export default companyBaseInfo
