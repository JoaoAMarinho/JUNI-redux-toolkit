import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./pages/counter/Counter";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
