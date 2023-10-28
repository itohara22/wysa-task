import { useState, useEffect } from "react";

const Result = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/result")
      .then((res) => res.json())
      .then((data) => {
        setScore(data.score);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen bg-slate-800 grid place-items-center">
      <h1 className="text-white text-5xl">Your score is :{score}</h1>
    </div>
  );
};

export default Result;
