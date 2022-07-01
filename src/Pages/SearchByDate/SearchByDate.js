import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner/Spinner";

const SearchByDate = () => {
  // const [selectedTasks, setSelectedTasks] = useState([]);
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate();
  const today = `${day}-${month}-${year}`;
  const [selectedDay, setSelectedDay] = useState(null);
  const date = selectedDay
    ? `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`
    : today;

    // get tasks by date with useQuery
  const { isLoading, data: selectedTasks,  refetch} = useQuery(
    ["tasks", date],
    async () => {
      const res = await axios.get(`https://blooming-wildwood-07126.herokuapp.com/tasks/${date}`);
      return res.data;
    }
  );

  if(isLoading) return <Spinner/>;  

  return (
    <div className="container mx-auto mb-2">
      <h2 className="text-3xl text-white font-bold">Search Task by Date</h2>
      <div className="flex justify-center mt-5">
        <Calendar
          value={selectedDay}
          onChange={async (day) => {
            setSelectedDay(day);
            refetch();

            // const { data } = await axios.get(
            //   `https://blooming-wildwood-07126.herokuapp.com/tasks/${date}`
            // );
            // setSelectedTasks(data);
          }}
          shouldHighlightWeekends
        />
      </div>
      {selectedTasks.length > 0 ? (
        selectedTasks.map((selectedTask) => (
          <div
            className="w-full max-w-xl mx-auto mt-5 px-5"
            key={selectedTask._id}
          >
            <div className="rounded-lg bg-gray-800 shadow-xl text-left p-5 flex justify-between items-center">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={selectedTask.completed}
                  disabled={selectedTask.completed}
                  onChange={(e) => {
                    if (e.target.checked) {
                      axios
                        .put(`https://blooming-wildwood-07126.herokuapp.com/task/${selectedTask._id}`, {
                          completed: true,
                        })
                        .then((res) => {
                          if (res.status === 200) {
                            toast.success("Task Marked as Completed");
                          }
                        })
                        .catch((err) =>
                          toast.error("Error Marking Task as Completed")
                        );
                    }
                  }}
                  className="checkbox mr-2"
                />
                {selectedTask.completed ? (
                  <p>
                    {selectedTask.name}{" "}
                    <span className="text-green-700 font-bold">
                      (Completed)
                    </span>
                  </p>
                ) : (
                  <p>{selectedTask.name}</p>
                )}
              </div>
              {!selectedTask.completed && (
                <Link to={`/update-task/${selectedTask._id}`}>
                  <FontAwesomeIcon
                    className="text-xl cursor-pointer"
                    title="Edit Task"
                    icon={faPenToSquare}
                  />
                </Link>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-5 text-xl text-white font-bold">
          No Tasks for this day
        </p>
      )}
    </div>
  );
};

export default SearchByDate;
