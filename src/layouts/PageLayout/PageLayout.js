import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Login from '../../components/Login'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Login />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout