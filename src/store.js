import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const generateLevel = (get) => {
  // structure [max.moohaha, dragon, cacto]
  const players = [];
  for(let i=0; i<3; i++){
    players[]
  }
  return level; 
};
export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    gameState: "MENU",
    grade: ["gradeTest"], 
    setGrade: (state) => set({ grade: state }),
    level: [],

    // START FREEROAM
    startGame: () => { 
      const level = generateLevel(get); // level contains necessary information. level[0] is the checklist 
      set({
        gameState: "FREEROAM",
        level: level
      });
    },
  }))
);
