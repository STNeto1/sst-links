import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  Provider as UrqlProvider,
  cacheExchange,
  createClient,
  fetchExchange
} from 'urql'
import './globals.css'
import Article from './pages/Article'
import Home from './pages/Home'

const urql = createClient({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange]
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UrqlProvider value={urql}>
      <App />
    </UrqlProvider>
  </React.StrictMode>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
