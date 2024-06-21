import { useGameStore } from "../store";
import React, { useState, useEffect, useRef } from 'react';

export const Menu = () => {
    const { grade, gameState, startGame } = useGameStore((state) => ({
        grade: state.grade,
        gameState: state.gameState,
        startGame: state.startGame,
    }));
    
    useEffect(() => {
        console.log("grade: ", grade)
    }, [grade]);

  return (
    <>
      {/* We hide the menu if we are not in menu state */}
      <div className={`menu ${  gameState !== "MENU" ? "menu--hidden" : ""}`}> 
        <div>
          <h1>Pratique Game</h1>
          <p>HEY, WELCOME TO PRATIQUE! MORE MODES COMING SOON. :)</p>
        </div>
        <button disabled={gameState !== "MENU"} onClick={() => startGame()}>
          Start Vocab Game
        </button>
      </div>
    </>
  );
};
