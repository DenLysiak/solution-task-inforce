import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store } from "./app/store"
import App from "./App"
import { ProductListView } from "./components/ProductListView/ProductListView"
import { ProductView } from "./components/ProductView/ProductView"

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProductListView />} />
            
            <Route path="productView" element={<ProductView />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}