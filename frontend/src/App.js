import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="App">
      {/* This component can be used to wrap the flyer/studio logic in React later */}
      <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #222' }}>
        <p className="kicker">Live Studio Mode</p>
        <img 
          src="https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=1800&q=80" 
          alt="DevilJO — Metal Type" 
          style={{ maxWidth: '200px', margin: '20px auto', filter: 'grayscale(1)' }}
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
