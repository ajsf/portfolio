import { graphql } from 'gatsby'

export const markdownProject = graphql`
  fragment Project on MarkdownRemarkConnection {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        frontmatter {
          title
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`
const mapProjectQueryToProjectObject = projectQuery => {
  const { excerpt, frontmatter, fields } = projectQuery.node
  const { title, image } = frontmatter
  const { slug } = fields

  return {
    title: title,
    description: excerpt,
    path: slug,
    image: image.childImageSharp.original.src,
  }
}

export const markdownQueryToProjects = data => {
  if (data.allMarkdownRemark) {
    return data.allMarkdownRemark.edges.map(edge => {
      return mapProjectQueryToProjectObject(edge)
    })
  }
  return []
}