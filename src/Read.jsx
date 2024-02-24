import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';

function Read() {
  const { id } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/` + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 border bg-secondary text-black p-5">
        <h3 className="text-xl font-bold mb-4">User Detail</h3>
        <div className="text-black">
          <p className="mb-2"> <strong>ID:</strong> {data.id}</p>
          <p className="mb-2"> <strong>Name:</strong> {data.name}</p>
          <p className="mb-4"> <strong>Email:</strong> {data.email}</p>
          <Link to={`/update/${id}`} className="text-white m-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Edit</Link>
          <Link  to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
