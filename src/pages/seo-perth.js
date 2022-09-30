import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import internalSEO from "../components/sections/internalSEO";
import InternalPageSEO from "../components/sections/internalSEO";

const IndexPage = () => (
    <Layout>
      <Navigation />
            <InternalPageSEO />
        <Footer />
    </Layout>
)

export default IndexPage
