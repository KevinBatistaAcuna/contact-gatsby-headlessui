import * as React from "react"
import Seo from "../components/seo"
import ContactPage from '../components/ContactPage'

function Index() {
  return (
    <ContactPage />
  )
}
// const IndexPage = () => (
  
// )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default Index
