import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Morgan Stone | UI/UX Achitect | Product Designer | Front-End Engineer"
      meta={[
        { name: 'description', content: 'UI/UX Achitect, Product Designer, Front-End Engineer' },
        { name: 'keywords', content: 'UI/UX Achitect, Product Designer, Front-End Engineer' },
      ]}
    />
    <Header />
    <div className="container p1">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
