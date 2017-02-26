module.exports = [
  {
    key: 'usersManagement',
    name: '客户管理',
    icon: 'book'

  },
  {
    key: 'addNewUser',
    name: '添加新客户',
    icon: 'plus'

  },
  {
    key: 'users',
    name: '个人资料',
    icon: 'team'

  },
  {
    key: 'otherFiles',
    name: '其它资料',
    icon: 'solution'
  },
  {
    key: 'dashboard',
    name: '仪表盘',
    icon: 'laptop'
  },
  /*{
    key: 'users',
    name: '用户管理',
    icon: 'user'
  },*/
  {
    key: 'ui',
    name: 'UI组件',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: 'Ico 图标'
      },
      {
        key: 'search',
        name: 'Search 搜索'
      }
    ]
  },
  {
    key: 'navigation',
    name: '测试导航',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: '二级导航1'
      },
      {
        key: 'navigation2',
        name: '二级导航2',
        child: [
          {
            key: 'navigation21',
            name: '三级导航1'
          },
          {
            key: 'navigation22',
            name: '三级导航2'
          }
        ]
      }
    ]
  }
]
