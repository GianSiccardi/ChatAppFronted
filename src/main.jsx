import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<Provider store={store}>
<App></App>

</Provider>




    </BrowserRouter>
  </StrictMode>,
)
