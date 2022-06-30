import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const Todo = () => {
    const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post("http://localhost:5000/tsk", data)
      .then((res) => {
        setLoading(true)
        if (res.status === 200) {
          e.target.reset();
          toast.success("Daily Task Added");
          refetch();
        }
      })
      .catch(
        toast.error("Something went wrong")
      );
      setLoading(false)
  };

  console.log(loading);

  const {
    isLoading,
    data: allTasks,
    refetch
  } = useQuery("tasks", () =>
    fetch("http://localhost:5000/tasks").then((res) => res.json())
  );

  if (isLoading) return <progress class="progress w-56"></progress>;


  return (
    <div className="container">
      <h2 className="text-3xl text-white font-bold">Add Daily Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-md mx-auto">
          <label class="label">
            <span class="label-text text-white">Daily Task</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Daily Task"
            class="input input-bordered w-full"
            {...register("name", { required: true })}
          />
          <p className="text-left mt-2 text-error font-semibold">
            {errors.name?.type === "required" && "Daily Task Name is Required"}
          </p>
        </div>
        <div class="form-control w-full max-w-md mx-auto">
          <input
          disabled={loading}
            type="submit"
            value="Add Task"
            class="btn btn-primary text-white mt-3 w-full"
          />
        </div>
      </form>
      {allTasks.map((task) => (
        <div className="w-full max-w-xl mx-auto mt-5">
          <div class="rounded-lg bg-gray-800 shadow-xl text-left p-5">
            <p>{task.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
