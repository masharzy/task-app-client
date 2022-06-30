import React from "react";
import Tasks from "../Tasks/Tasks";

const Home = () => {
  return (
    <div className="container grid lg:grid-cols-2 lg:px-40 px-5 lg:gap-x-5 mx-auto">
      <Tasks />
    </div>
  );
};

export default Home;
