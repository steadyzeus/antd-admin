import React from 'react'
import { Menu, Icon, Popover } from 'antd'
import styles from './main.less'
import Menus from './menu'

const SubMenu = Menu.SubMenu

function Header ({user, logout,goUserAdmin, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys}) {
  let handleClickMenu = e => {
    if(e.key === 'logout')
    { logout()
    }
    else if(e.key === 'userAdminMa'){
      goUserAdmin()
    }
  }

  const menusProps = {
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys
  }
  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover placement='bottomLeft' onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger='click' content={<Menus {...menusProps} />}>
          <div className={styles.siderbutton}>
            <Icon type='bars' />
          </div>
        </Popover>
        : <div className={styles.siderbutton} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>}

      <Menu className='header-menu' mode='horizontal' onClick={handleClickMenu}>
        <SubMenu style={{float: 'right',width:"100px"}} title={< span > <Icon type='user' />{user.name} < /span>}>
          {user.isAdmin?<Menu.Item key='userAdminMa'>
            <a>人员管理</a>
          </Menu.Item>:""}
          <Menu.Item key='logout'>
            <a>退出</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Header
