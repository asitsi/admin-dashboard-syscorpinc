import React, { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Signin from './Pages/Signin'

const App: FC = () => {
  return (
    <Suspense fallback={<h1 className="loading">Loading...</h1>}>
      <Routes>
        <Route
          path={'/'}
          element={<Signin />}
        />
      </Routes>
    </Suspense>
  )
}

export default App
