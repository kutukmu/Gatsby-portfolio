import React from "react"

import Layout from "../Components/Layout/Layout"
import Hero from "../Components/Hero/Hero"
import Services from "../Components/Services/Service"
import "../main.scss"

export default function Home() {
  return <div>
    <Layout>
      <Hero />
      <Services />
    </Layout>


  </div>
}
