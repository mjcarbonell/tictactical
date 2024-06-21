import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const generateFreeRoam = () => {
  levelFreeRoam = ["hello"];
  return levelFreeRoam; 
};
export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    gameState: "MENU",
    grade: ["gradeTest"], 
    setGrade: (state) => set({ grade: state }),
    levelFreeRoam: null,


    // START FREEROAM
    startFreeRoam: () => { 
      const levelFreeRoam = generateFreeRoam(); // level contains necessary information. level[0] is the checklist 
      set({
        gameState: "FREEROAM",
        levelFreeRoam: levelFreeRoam,
      });
    },

  }))
);
