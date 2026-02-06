import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'

const RootContainer = document.getElementById('root') as HTMLElement;
createRoot(RootContainer).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
