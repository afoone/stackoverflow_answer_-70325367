import React, { useState } from 'react'

const RegisterScreen = () => {

    const [data, setData] = useState({});

    const handleChange  = (e) => {
       const newData = {...data}
       newData[e.target.name] = e.target.value
       setData(newData)
    }

    return (
        <div>
          <h1>Create Account</h1>
         <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter name"
            required
            onChange={handleChange}
          ></input>
                    <input
            type="password"
            name='password'
            value={data.password}
            placeholder="Enter password"
            required
            onChange={handleChange}
          ></input>
                    <input
            type="email"
            name='email'
            value={data.email}
            placeholder="Enter email"
            required
            onChange={handleChange}
          ></input>
          <div>
              <ul>
                  <li>
                      name: {data.name}
                  </li>
                  <li>
                      password: {data.password}
                  </li>
                  <li>
                        email: {data.email}
                  </li>
              </ul>
          </div>
        </div>
    )
}

export default RegisterScreen
