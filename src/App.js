import React, { Fragment, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'

import Counter from "./components/Counter"
import Ribbon from "./components/Ribbon"
import Home from "./pages/Home"
import Id from "./pages/Id"
import Index from "./pages/Index"
import Layout from "./pages/Layout"

function App() {
  return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<Counter />} />
              <Route path="/home" element={<Ribbon />} />
              <Route path="/:id" element={<Id />} />
          </Route>
        </Routes>
      </Fragment>
  )
}

export default App;