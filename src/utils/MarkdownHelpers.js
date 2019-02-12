import { graphql } from 'gatsby'

export const projectTemplate = graphql`
  fragment ProjectTemplate on MarkdownRemark {
    html
    frontmatter {
      title
      githubLink
      image {
        childImageSharp {
          sizes {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`

export const allProjects = graphql`
  fragment AllProjects on Query {
    allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
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
  }
`

export const indexMarkdown = graphql`
  fragment IndexPage on Query {
    file(relativePath: { eq: "page_info.md" }) {
      childMarkdownRemark {
        frontmatter {
          header
          subheader
        }
      }
    }
  }
`

export const markdownQueryToProjects = data => {
  if (data.allMarkdownRemark) {
    return data.allMarkdownRemark.edges.map(edge => {
      return mapProjectQueryToProjectObject(edge)
    })
  }
  return []
}

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
