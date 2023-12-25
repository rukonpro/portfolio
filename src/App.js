import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import 'aos/dist/aos.css';
import './App.css';
import AocFuc from "./utilitis/AOS";
import React, {useEffect, useRef} from "react";



function App() {
    const audioRef = useRef(null);

    const playSound = () => {
        audioRef.current.play();
    };





    useEffect(() => {
        // Get all elements with the class name 'clickButton'
        const buttons = document.querySelectorAll('.clickButton');

        // Define the event handler function
        const handleClick = () => {
            // Your logic here
            playSound()
        };

        // Attach the event listener to each button
        buttons.forEach((button) => {

            button.addEventListener('click', handleClick);
        });

        // Clean up the event listeners when the component is unmounted
        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleClick);
            });
        };
    }, []);


    AocFuc()
  return (
      <main className="overflow-hidden clickButton">
          <audio ref={audioRef}>
              <source src="/keypress.mp3" type="audio/mp3"/>
              Your browser does not support the audio element.
          </audio>
          <RouterProvider router={router}/>
      </main>
  );
}

export default App;
