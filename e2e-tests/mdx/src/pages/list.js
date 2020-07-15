import React from 'react'
import { graphql } from 'gatsby'

const ListPage = ({ data }) => {
  const anotherPage = data.another.nodes[0]
  const blogPage = data.blog.nodes[0]

  return (
    <div>
      <div data-testid="mdx-slug">{anotherPage.slug}</div>
      <div data-testid="md-slug">{blogPage.slug}</div>
    </div>
  )
}

export const query = graphql`
{
    another: allMdx(filter: {slug: {eq: "another"}}) {
      nodes {
        slug
      }
    }
    blog: allMdx(filter: {slug: {eq: "my-blog"}}) {
      nodes {
        slug
      }
    }
  }
`
export default ListPage
