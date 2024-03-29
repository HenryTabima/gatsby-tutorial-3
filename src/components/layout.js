import React from 'react'
import Header from './header'
import Footer from './footer'


export default ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <Header />
    <main>
      { children }
    </main>
    <Footer />
  </div>
)