import React, { useState} from 'react'
import Axios from 'axios'

export default function Register() {
  const url =""
  const [ data, setData ] = useState({
    name: '',
    email: '',
    password: ''
  })

function submit(e){
  e.preventDfault();
  Axios.post(url,{
    name: data.name,
    email: data.email,
    password: data.password
  })
  .then(res =>{
    console.log(res.data)
  })
}

  function handle(e){
    const newdata = { ...data}
    newdata[ e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <>
    <section className="auth">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <form onSubmit= {(e)=> submit(e)}>
            <input onChange= {(e) => handle(e)} id="name" value={data.name} type="text" placeholder="Name" className="form-control" />
            <input onChange= {(e) => handle(e)} id="email" value={data.email} type="text" placeholder="Email" className="form-control" />
            <input onChange= {(e) => handle(e)} id="password" value={data.password} type="text" placeholder="Password" className="form-control" />
            <button type="submit">Register</button>
          </form>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}
