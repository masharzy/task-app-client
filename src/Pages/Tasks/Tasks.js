import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner/Spinner';

const Tasks = () => {
    const {
        isLoading,
        data: tasks,
        refetch,
      } = useQuery("tasks", () =>
        fetch("https://blooming-wildwood-07126.herokuapp.com/tasks").then((res) => res.json())
      );
    
      if (isLoading) return <Spinner/>;
    
    return (
        tasks.map((task) => (
            <div className="w-full mx-auto mt-5 px-5" key={task._id}>
              <div className="rounded-lg bg-gray-800 shadow-xl text-left p-5 flex justify-between items-center">
                <div className="flex">
                  <input type="checkbox" checked={task.completed} disabled={task.completed} onChange={(e) => {
                    if (e.target.checked) {
                      axios.put(`https://blooming-wildwood-07126.herokuapp.com/task/${task._id}`, {
                        completed: true,
                      }).then((res) => {
                        if (res.status === 200) {
                          refetch();
                          toast.success("Task Marked as Completed");
                        }
                      }).catch((err) => toast.error("Error Marking Task as Completed"));
                    }
                  }} className="checkbox mr-2" />
                    {
                      task.completed ?
                      <p>{task.name} <span className='text-green-700 font-bold'>(Completed)</span></p> :
                      <p>{task.name}</p>
                    }
                </div>
                {
                  !task.completed && <Link to={`/update-task/${task._id}`}><FontAwesomeIcon className="text-xl cursor-pointer" title="Edit Task" icon={faPenToSquare} /></Link>
                }
              </div>
            </div>
          ))
    );
};

export default Tasks;