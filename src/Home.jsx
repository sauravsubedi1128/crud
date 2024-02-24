import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    setLoading((prevLoading) => !prevLoading);

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/users/` + id)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            navigate('/');
            location.reload();
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
         // setLoading(false);
        });
    }
  };

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <div className="flex flex-col justify-center items-center bg-light">
          <h1 className="text-xl font-bold mb-4">List of Users</h1>

          <div className="w-3/4 rounded bg-white border shadow p-4">
            <Link
              to="/create"
              className="text-white m-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add +
            </Link>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2">Id</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Phone</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td className="py-2">{d.id}</td>
                    <td className="py-2">{d.name}</td>
                    <td className="py-2">{d.email}</td>
                    <td className="py-2">{d.phone}</td>
                    <td className="py-2">
                      <Link
                        to={`/read/${d.id}`}
                        className="bg-yellow-400 text-black border-2 rounded-xl p-2"
                      >
                        Read
                      </Link>
                      <Link
                        to={`/update/${d.id}`}
                        className="bg-blue-400 text-black border-2 rounded-xl p-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(d.id)}
                        className="bg-red-400 text-black border-2 rounded-xl p-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
