import React from 'react'
import {Router} from 'dva/router'
import App from './routes/app'

export default function ({history, app}) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, {component: require('./routes/dashboard')})
        })
      },
      childRoutes: [
        {
          path: 'profiles',
          name: 'profiles',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/users'))
            })
          }
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/dashboard'))
            })
          }
        }, {
          path: 'users',
          name: 'users',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/users'))
            })
          }
        },{
          path: 'usersManagement',
          name: 'usersManagement',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/usersManagement'))
            })
          }
        },{
          path: 'addNewUser',
          name: 'addNewUser',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/addNewUser'))
            })
          }
        }
        , {
          path: 'ui/ico',
          name: 'ui/ico',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/ui/ico'))
            })
          }
        }, {
          path: 'ui/search',
          name: 'ui/search',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/ui/search'))
            })
          }
        }, {
          path: '*',
          name: 'error',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error'))
            })
          }
        }
      ]
    }
  ]

  return <Router history={history} routes={routes} />
}
