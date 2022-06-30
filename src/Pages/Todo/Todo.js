import React from "react";
import { useForm } from "react-hook-form";

const Todo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data , e) => {
        console.log(data)
        e.target.reset();
    };
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
          <p className="text-left mt-2 text-error font-semibold">{errors.name?.type === 'required' && "Daily Task Name is Required"}</p>
        </div>
        <div class="form-control w-full max-w-md mx-auto">
          <input
            type="submit"
            value="Add Task"
            class="btn btn-primary text-white mt-3 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Todo;
