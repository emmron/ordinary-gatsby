import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import internalSEO from "../components/sections/internalSEO";
import InternalPageWeb from "../components/sections/internalWeb";

const IndexPage = () => (
    <Layout>
      <Navigation />
            <InternalPageWeb />
        <Footer />
    </Layout>
)

export default IndexPage
