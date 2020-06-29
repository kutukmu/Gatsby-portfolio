
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const query = await graphql(`
    {
      allStrapiBlogs {
        nodes {
         
          
          slug
        
          
        }
      }
    }
  `)

    const blogTemplate = path.resolve(`src/template/template.js`);

    query.data.allStrapiBlogs.nodes.forEach(node => {
        createPage({
            path: `blogs/${node.slug}`,
            component: blogTemplate,
            context: {
                slug: node.slug
            }

        })
    });



}