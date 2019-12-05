import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header"
import '../styles/index.scss'
import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'
import Sidebar from "./sidebar"

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => ( //props.pageTitle
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <> 
        <script src="https://kit.fontawesome.com/0b9116b43d.js" crossOrigin="anonymous"/>
        <Header siteTitle={data.site.siteMetadata.title} />     
        <div className="container" id="content">
          <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid}/>
            </Col>
          </Row>
        </div>
        <Footer/>
      </>
    )}
    />
  )

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Layout
