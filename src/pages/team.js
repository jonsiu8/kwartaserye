import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../util/authors'
import { Card, CardText, CardBody, CardTitle, Button, Row } from 'reactstrap'
import JonImage from '../images/jon.jpg'
import JessImage from '../images/jess.jpg'
import RoseImage from '../images/rose.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" />  

    <Row className="md-4">
      <div className="col-md-3">
        <img src={JonImage} style={{ maxWidth: '100%'}} alt="Jon Profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button classname="text-uppercase" color="primary" href={`/author/${slugify(authors[0].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row className="md-4">
      <div className="col-md-3">
        <img src={RoseImage} style={{ maxWidth: '100%'}} alt="Jess Profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button classname="text-uppercase" color="primary" href={`/author/${slugify(authors[1].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row className="md-4">
      <div className="col-md-3">
        <img src={JessImage} style={{ maxWidth: '100%'}} alt="Rose Profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[2].name}</CardTitle>
            <CardText>{authors[2].bio}</CardText>
            <Button classname="text-uppercase" color="primary" href={`/author/${slugify(authors[2].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>  

  </Layout>
)

export default TeamPage
