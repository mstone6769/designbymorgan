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
          htmlAttributes={{
            lang: 'en'
          }}
          title='Morgan Stone | Front-End Engineer | Product Designer | UI/UX Achitect'
          meta={[
            { name: 'description', content: 'Personal website of Morgan Stone' },
            { name: 'keywords', content: 'UI/UX Achitect, Product Designer, Front-End Engineer, Birmingham' },
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
