import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Products from "../components/Products"

export default function products(props) {
  const products = props.data.allStripeProduct.nodes
  return (
    <Layout>
      <SEO title="Productos"></SEO>
      <Products products={products}></Products>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        name
        id
      }
    }
  }
`
