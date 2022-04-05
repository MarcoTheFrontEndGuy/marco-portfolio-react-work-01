import React from 'react'
import styled from 'styled-components'
import SideBar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'


export default function App() {
  return (
    <Div>
      <SideBar />
      <Dashboard />
 
    </Div>
  )
}
const Div = styled.div`
  position: relative;
`;
