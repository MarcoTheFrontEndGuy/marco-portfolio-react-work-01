import React from 'react'
import styled from 'styled-components'
import SideBar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Earnings from './Components/Earnings'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import ReusableStyles from './Components/ReusableStyles'
import Transfers from './Components/Transfers'
import FAQ from './Components/FAQ'

const App = () => {
  return (
    <Div>
      <SideBar />
      <Dashboard />
      {/* <Earnings />
      <Navbar />
      <Profile />
      <ReusableStyles />
      <Transfers />
      <FAQ /> */}

    </Div>
  )
}
const Div = styled.div``;



export default App
