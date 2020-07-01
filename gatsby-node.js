const slugify = require("slugify")

const slugifyOptions = {
    replacement: "-",
    lower: true,
}

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
      type StripeProduct implements Node{
        slug: String!  
      }
    `)
}

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        StripeProduct: {
            slug: {
                resolve: source => slugify(source.name, slugifyOptions),
            },
        },
    })
}