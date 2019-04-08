/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div>
              <p style={{
                width: `100%`,
                marginBottom: `1em`,
              }}>
                Hey there, I'm <strong>{author}</strong>. During the day
                {` `}
                I'm a <a href="https://thomas.codes">Senior Software Developer at Shopify</a>,
                {` `}
                and at night I'm sometimes seen running a
                {` `}
                <a href={`https://twitter.com/${social.instagram}`}>mini bakery out of my apartment</a>.
                </p>
                <p style={{
                width: `100%`,
                marginBottom: `0`,
              }}>
                Follow along as I build out <a href="https://bake.app">Bake.app</a>, an app designed for sourdough bakers.
                {` `}
                <a href="https://tinyletter.com/SourdoughDev">Join my Newsletter</a> for updates straight to your inbox.
                {` `}
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`

export default Bio
