import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/appRouter'
import './styles/globals.css'
import './styles/global.css'

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
