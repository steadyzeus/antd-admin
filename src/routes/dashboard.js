import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import Weather from '../components/dashboard/weather'
import styles from './dashboard.less'
import {color} from '../utils'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff'
  }
}

function Dashboard ({dashboard, dispatch}) {
  const {weather} = dashboard

  return (
    <Row gutter={24}>
      <Col lg={6} md={24}>
        <Row gutter={24}>
          <Col lg={24} md={12}>
            <Card bordered={false} className={styles.weather} bodyStyle={{
              padding: 0,
              height: 204,
              background: color.blue
            }}>
              <Weather {...weather} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  weather: PropTypes.object,
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)
