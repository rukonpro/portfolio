import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import 'aos/dist/aos.css';
import './App.css';
import AocFuc from "./utilitis/AOS";
import React from "react";




function App() {
    AocFuc()
  return (
      <main className="overflow-hidden" >
          <RouterProvider router={router}/>
      </main>
  );
}

export default App;
