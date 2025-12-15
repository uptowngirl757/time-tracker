import React from "react";
import assets from "./assets/assets";

// A little idea for later: {type,title, timeframes}
const DataComponent = ({ title, current, previous, code }) => {
  return (
    <article className="overflow-hidden rounded-xl ">
      {/* Colored top strip */}
      <div className={`h-12 relative ${code.bg}`}>
        <img src={code.icon} alt="" className="absolute w-12 h-12 -top-1 right-2" />
      </div>

      {/* Card content */}
      <div className="relative bg-navy-900 text-white rounded-xl p-4 -mt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm">{title}</span>
          <img src={assets.iconEllipsis} alt="" />
        </div>

        <h4 className="text-3xl font-light mt-3 mb-2">{current}hrs</h4>
        <p className="text-white/70 text-xs">
          Last Week - <span>{previous}hrs</span>
        </p>
      </div>
    </article>
  );
};

export default DataComponent;
