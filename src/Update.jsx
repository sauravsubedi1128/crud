import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link , useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: id,
    email: '',
    phone: '',
  });

  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then((res) => {
        setValues({ ...values, name: res.data.name, email: res.data.email });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/users/' + id, values)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-1/2 border bg-secondary text-black p-5">
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
          <h1 className='font-bold text-3xl '>Update User </h1>
            <label htmlFor="name" className="block text-black">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <label htmlFor="name" className="block text-black">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          <button className="text-white m-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
          <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' to="/"> Back </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
