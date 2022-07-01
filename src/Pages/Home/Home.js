import React from "react";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import SearchByDate from "../SearchByDate/SearchByDate";
import Tasks from "../Tasks/Tasks";
import Todo from "../Todo/Todo";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-white font-bold">All Tasks</h2>
      <div className="grid lg:grid-cols-2 lg:px-40 px-5 lg:gap-x-5">
        <Tasks />
      </div>
      <div className="mt-10">
      <CompletedTasks/>
      </div>
      <div className="mt-10">
      <Todo/>
      </div>
      <div className="mt-10">
      <SearchByDate/>
      </div>
    </div>
  );
};

export default Home;
