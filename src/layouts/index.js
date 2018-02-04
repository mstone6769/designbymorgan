import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import WebFont from 'webfontloader';

import './index.scss'

class TemplateWrapper extends React.Component {
  componentDidMount(){
    WebFont.load({
      typekit: {
        id: 'ijc7duc'
      }
    });
  }
  render() {
    return (
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
          {this.props.children()}
        </div>
      </div>
    );
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
