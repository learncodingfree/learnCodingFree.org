import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Layout from '../components/layout'

const FullStackDev = () => (
  <StaticQuery
    query={fullStackDevQuery}
    render={data => {
      console.log(data)
      return (
        <Layout>
          <Helmet>
            <title>Full Stack Dev Careerpath</title>
            <meta name="description" content="Full Stack Dev Careerpath" />
          </Helmet>
          <section>
            <h1 style={{textAlign: 'center'}}>Full Stack Dev Careerpath</h1>
            <VerticalTimeline>
                {data.allFullStackDevJson.nodes.map((leaf, index) => (
                <VerticalTimelineElement
                    key={index}
                    icon={<img src={leaf.icon} />}
                >
                    <Link to={leaf.url}>
                    <h3 className="vertical-timeline-element-title">
                        {leaf.header}
                    </h3>
                    <p>{leaf.intro}</p>
                    <p>Status: {leaf.status}</p>
                    </Link>
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
        </Layout>
      )
    }}
  />
)

export default FullStackDev

const fullStackDevQuery = graphql`
  query {
    allFullStackDevJson {
      nodes {
        header
        intro
        url
        icon
        status
      }
    }
  }
`
