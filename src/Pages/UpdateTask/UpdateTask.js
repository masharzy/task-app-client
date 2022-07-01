import axios from "axios";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner/Spinner";

const UpdateTask = () => {
  const { id } = useParams();

  const {
    isLoading,
    data: task,
    refetch,
  } = useQuery("task", () =>
    fetch(`http://localhost:5000/task/${id}`).then((res) => res.json())
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    await axios
      .put(`http://localhost:5000/task/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          toast.success("Updated Successfully");
          refetch();
        }
      })
      .catch((err)=>toast.error("Something went wrong"));
  };
  if (isLoading) return <Spinner/>;

  const { name } = task;

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-white font-bold">
        Edit Task: <br /> {name}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-md mx-auto">
          <label className="label">
            <span className="label-text text-white">Task New Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Task New Name"
            className="input input-bordered w-full"
            defaultValue={name}
            {...register("name", { required: true })}
          />
          <p className="text-left mt-2 text-error font-semibold">
            {errors.name?.type === "required" && "Task New Name is Required"}
          </p>
        </div>
        <div className="form-control w-full max-w-md mx-auto">
          <input
            type="submit"
            value="Update Task"
            className="btn btn-primary text-white mt-3 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
