import {Routes,Route} from 'react-router-dom'
import './App.css'
import LobbyScreen from './pages/Lobby';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
      </Routes>
    </>
  )
}

export default App
