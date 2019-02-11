const Promise = require('bluebird')
const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectPage = path.resolve('./src/templates/project-page.js')

  return graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: projectPage,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: 'slug', value: slug })
  }
}
