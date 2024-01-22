import { Inter } from "next/font/google";
import React, { useState } from "react";
// import { useState } from "react";
import PsHeader from "@/components/playscore/PsHeader";
import PsCard from "@/components/playscore/PsCard";

const players = [
  {
    id: 0,
    pName: "Khosoo",
    pScore: 0,
  },
  {
    id: 1,
    pName: "Munkhuu",
    pScore: 0,
  },
  {
    id: 2,
    pName: "Andy",
    pScore: 0,
  },
  {
    id: 3,
    pName: "Tulgaa",
    pScore: 0,
  },
];

export default function Ps() {
  const [scores, setScore] = useState(players);
  // console.log(score, "hi");
  const increase = (id) => {
    const updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore++;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScore(updateScores);
  };
  const decrease = (id) => {
    const updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore--;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScore(updateScores);
  };
  const reset = () => {
    const reset = scores.map((score) => {
      score.pScore = 0;
      return score;
    });
    setScore(reset);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-8 gap-4">
        <PsHeader />
        <ul className="flex flex-col">
          {scores.map((e, index) => {
            return (
              <PsCard
                id={e.id}
                pName={e.pName}
                pscore={e.pScore}
                key={index}
                setIncrease={increase}
                setDecrease={decrease}
              />
            );
          })}
        </ul>
        <div className="flex justify-between">
          <button
            className="bg-[#C3675A] p-2 rounded-xl shadow-md text-white text-sm	"
            onClick={reset}
          >
            Reset
          </button>
          <button className="bg-[#0E627C] p-2 rounded-xl shadow-md text-white text-sm	">
            Add Player
          </button>
        </div>
      </div>
    </div>
  );
}
