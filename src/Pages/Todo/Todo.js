import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner/Spinner";
import Tasks from "../Tasks/Tasks";

const Todo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isLoading,
    data: allTasks,
    refetch,
  } = useQuery("tasks", () =>
    fetch("http://localhost:5000/tasks").then((res) => res.json())
  );

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${day}-${month}-${year}`;

  const onSubmit = async (data, e) => {
    const task = {
      name: data.name,
      date: today,
    }
    axios
      .post("http://localhost:5000/task", task)
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          toast.success("Daily Task Added");
          refetch();
        }
      })
      .catch((err)=>toast.error("Something went wrong"));
  };

  if (isLoading) return <Spinner/>;

  return (
    <div className="container mx-auto">
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
            type="submit"
            value="Add Task"
            class="btn btn-primary text-white mt-3 w-full"
          />
        </div>
      </form>
        <div className="w-full max-w-xl mx-auto mt-5">
         <Tasks/>
        </div>
    </div>
  );
};

export default Todo;
