import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Product from "../components/Product"

export default props => {
  const product = props.data.stripeProduct
  return (
    <Layout>
      <Product product={product}></Product>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    stripeProduct(id: { eq: $id }) {
      slug
      name
      images
      id
    }
  }
`
