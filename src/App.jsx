import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Home/index";
import AppLayout from "./Layouts/AppLayout";

import './assets/CSS/App.css'
function App() {
  return (
    <>
      <Routes>
       
        <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
