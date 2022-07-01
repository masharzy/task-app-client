import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";

const CompletedTasks = () => {
  const { isLoading, data: completedTasks } = useQuery("completedTasks", () =>
    fetch("http://localhost:5000/tasks/completed").then((res) => res.json())
  );
  if (isLoading) return <Spinner/>;
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-white font-bold">Completed Tasks</h2>
      <div className="grid lg:grid-cols-2 lg:px-40 px-5 lg:gap-x-5 mx-auto">
        {completedTasks.map((completedTask) => (
          <div className="w-full mx-auto mt-5" key={completedTask._id}>
            <div class="rounded-lg bg-gray-800 shadow-xl text-left p-5 flex justify-between items-center">
              <div className="flex">
                <input type="checkbox" checked disabled class="checkbox mr-2" />
                <p>{completedTask.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
