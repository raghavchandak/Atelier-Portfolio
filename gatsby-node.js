const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `)

  data.allContentfulProject.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.slug },
    })
  })
}
