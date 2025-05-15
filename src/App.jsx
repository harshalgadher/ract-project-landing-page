import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import { Heading } from './components/Heading'
import { SwichingImg } from './components/SwichingImg'
import { Heading2 } from './components/Heading2'
import { WebsiteDesign } from './components/websiteDesign'
import { Performance } from './components/Performance'
import { People } from './components/People'

const App = () => {
  return (
    <div>
      <Header name1="Avada" name2="Resources" name3="Hosting" />
      <Hero 
        title="The Ultimate Portfolio Website Builder" 
        dis="Trusted by beginners, marketers & professionals; Built with usability and performance in mind." >
      </Hero>
      <FeatureCards />
      <Heading />
      <SwichingImg />
      <Heading2 />
      <WebsiteDesign />
      <Performance />
      <People />
    </div>
  )
}

export default App;