import React from "react";

const Spinner = () => {
  return (
    <div className="mx-auto w-40 my-3">
      <div
        style={{ borderTopColor: "transparent" }}
        class="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
