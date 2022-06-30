import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const Tasks = () => {
    const {
        isLoading,
        data: tasks,
        refetch,
      } = useQuery("tasks", () =>
        fetch("http://localhost:5000/tasks").then((res) => res.json())
      );
    
      if (isLoading) return <progress class="progress w-56"></progress>;
    
    return (
        tasks.map((task) => (
            <div className="w-full mx-auto mt-5">
              <div class="rounded-lg bg-gray-800 shadow-xl text-left p-5 flex justify-between items-center">
                <div className="flex">
                  <input type="checkbox" checked={task.completed} disabled={task.completed} onChange={(e) => {
                    if (e.target.checked) {
                      axios.put(`http://localhost:5000/task/${task._id}`, {
                        completed: true,
                      }).then((res) => {
                        if (res.status === 200) {
                          refetch();
                          toast.success("Task Marked as Completed");
                        }
                      }).catch((err) => console.log(err));
                    }
                  }} class="checkbox mr-2" />
                  <p>{task.name}</p>
                </div>
                <Link to={`/update-task/${task._id}`}><FontAwesomeIcon className="text-xl cursor-pointer" title="Edit Task" icon={faPenToSquare} /></Link>
              </div>
            </div>
          ))
    );
};

export default Tasks;