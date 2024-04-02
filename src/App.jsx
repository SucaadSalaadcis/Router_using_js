import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import About from './components/About'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  
  const showNav = () => {
    if(window.location.pathname === "/nav") {
      return <Navbar/>
    }
  }
  const showCont = () => {
    if(window.location.pathname === "/content") {
      return <Content/>
    }
  }
  const showAbout = () => {
    if(window.location.pathname === "/about") {
      return <About/>
    }
  }
  const showSideb = () => {
    if(window.location.pathname === "/sidebar") {
      return <Sidebar/>
    }
  }
  const showFoo = () => {
    if(window.location.pathname === "/footer") {
      return <Footer/>
    }
  }

  return (
    <div>
    { showNav() }
    { showCont() }
    { showAbout() }
    { showSideb() }
    { showFoo() }
    </div>
  )
}

export default App