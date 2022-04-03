import React from 'react'
import styled from 'styled-components'
import Analytics from './Analytics';
import FAQ from './FAQ';
import Navbar from './Navbar';
import Profile from './Profile'
import Transfers from './Transfers';
import Earnings from './Earnings'

export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="row__one">
        <Analytics />
        <FAQ />
      </div>
      <div className="row__two">
        <Earnings />
        <Transfers />
        <Profile />
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
`;
