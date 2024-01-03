import React from 'react';
import Arrow from "../Images/arrow.png";
import OnClickSound from "./OnClickSound";

const BackButton = () => {
    return (
        <button 
            type="button"
                className="border-2 px-5 py-1 rounded"
                onClick={() => {
                    OnClickSound("/Music/keypress.mp3").then()
                    window.history.back()
                }}
        >
            <img className="h-5" src={Arrow || undefined} alt="icon"/>
        </button>
    );
};

export default BackButton;