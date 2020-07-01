import React from "react"
import ProductCard from "./ProductCard"

export default function Products({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  )
}
