import React, { useEffect, useState } from "react";
import assets from "./assets/assets";
import dataJson from "../data.json";
import DataComponent from "./DataComponent";
const App = () => {
  const [data, setData] = useState(dataJson);
  const [timeframe, setTimeframe] = useState(() => {
    const saved = localStorage.getItem("timeframe");
    return saved || "weekly";
  });
  useEffect(() => {
    localStorage.setItem("timeframe", timeframe);
  }, [timeframe]);
  const codes = {
    work: {
      bg: "bg-orange-work",
      icon: assets.iconWork,
    },
    play: {
      bg: "bg-blue-play",
      icon: assets.iconPlay,
    },
    study: {
      bg: "bg-pink-study",
      icon: assets.iconStudy,
    },
    exercise: {
      bg: "bg-green-exercise",
      icon: assets.iconExercise,
    },
    social: {
      bg: "bg-purple-social",
      icon: assets.iconSocial,
    },
    "self care": {
      bg: "bg-yellow-self-care",
      icon: assets.iconSelfCare,
    },
  };
  return (
    <div className="text-white p-5 bg-navy-950 min-h-screen flex items-center justify-center">
      <section className="max-w-6xl mx-auto w-full grid grid-cols-1 min-[510px]:grid-cols-2 min-[760px]:grid-cols-3 md:grid-cols-4 gap-7">
        <article className="relative row-span-2">
          {/* Top section */}
          <div className="relative  bg-purple-600 rounded-xl px-5 pt-4 pb-14 z-10">
            <img src={assets.avatar} alt="" className="w-13 h-13 mb-2 border-4 border-white  rounded-full" />
            <p className="text-white/70 text-sm">
              Report for <br />
              <span className="font-light text-white text-3xl">
                Jeremy <br /> Robson
              </span>
            </p>
          </div>

          {/* Bottom section */}
          <div className="relative bg-navy-900 rounded-xl px-5 py-7 -mt-4 z-0">
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              {["daily", "weekly", "monthly"].map((time, i) => (
                <li
                  key={i}
                  className={` ${
                    timeframe === time ? "text-white" : "text-white/70"
                  } duration-300 transition-all  hover:text-white`}
                >
                  <button
                    className="capitalize  cursor-pointer"
                    onClick={() => setTimeframe(time)}
                  >
                    {time}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {data.map((item, index) => (
          <DataComponent
            key={index}
            title={item.title}
            current={item.timeframes[timeframe].current}
            previous={item.timeframes[timeframe].previous}
            code={codes[item.title.toLowerCase()]}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
