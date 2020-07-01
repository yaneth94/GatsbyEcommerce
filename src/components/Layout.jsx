import React, { Fragment } from "react"
import Nav from "./Nav"
import SEO from "./SEO"

export default props => {
  return (
    <Fragment>
      <SEO></SEO>
      {/* <Helmet title="CodigoFacilito Store">
        <meta
          name="description"
          content="Super cool store to acquire CF SWAG "
        ></meta>
      </Helmet>*/}

      <Nav></Nav>
      <main>{props.children}</main>
    </Fragment>
  )
}
