import React, { useState} from 'react'
import axios from 'axios';
import { setUserSession } from './Common';

const Login = (props) => {

  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post("http://localhost:4000/users/signin", {
      username: username,
      password: password
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user)
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if(error.response.status === 401 || error.response.status === 400){
        setError(error.response.data.message);
      }
        else{
          setError("Something went wrong. Please try again later");
        }
      console.log('error >>>', error);
    });

    // props.history.push('/dashboard');
  }

  return(
    <>
      <section className="auth">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <form >
            <input
             type="text"
             value={username}
             onChange = { e => setUsername(e.target.value)}
            />
            <input
             type="text"
             value={password}
             onChange = { e => setPassword(e.target.value)}
            />
            { error && <div className="error">{ error}</div>}
            <input
             type="button"
             value={ loading ? "Loading..." : "Login"}
             onClick = { handleLogin }
             />
          </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login