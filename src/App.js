import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Landingpage from './Pages/Landingpage';
import Events from './Pages/Events';
import ChosenEvent from './Pages/ChosenEvent';
import Cart from './Pages/Cart';
import Tickets from './Pages/Tickets';

// Deklarerar och exporterar våra Contexts
export const EventContext = createContext();
export const CartContext = createContext();

function App() {
  // Deklarerar globala states (events - hela API, cart - tillagda events)
  const [events, setEvents] = useState([])
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <CartContext.Provider value={[cart, setCart]}>
      <EventContext.Provider value={[events, setEvents]}>
          <main>
            <Link to="/"></Link>
              <Routes>
                <Route exact path="/" element={<Landingpage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/chosen-event" element={<ChosenEvent/>}/>
                <Route path='/cart' element={<Cart/>} />
                <Route path="/tickets" element={<Tickets />} />
              </Routes>
          </main>
      </EventContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;