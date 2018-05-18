import 'babel-polyfill'
import React, { Component } from 'react'
import { renderStylesToString } from 'emotion-server'
//
import Meta from './src/components/Meta'
// import getRoutes from './src/data/graphql'

export default {
  // siteRoot: 'https://seamonsterstudios.com/',
  getRoutes: async () => {
    return [
      // ...(await getRoutes()),
      {
        is404: true,
        component: 'src/views/NotFound',
      },
    ]
  },
  devServer: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/\\.netlify/functions': '' },
      },
    },
  },
  webpack: (config, { stage }) => {
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry]
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry]
    }
    return config
  },
  renderToHtml: (render, Comp) => renderStylesToString(render(<Comp />)),
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <Meta />
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
