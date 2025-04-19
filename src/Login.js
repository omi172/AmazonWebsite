import react from 'react';
import{useState} from 'react';
import './Login.css';
import {auth} from './Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
function Login(){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const [confirmPassword,setConfirmPassword] =  useState('');

    const signIn = e => {
        e.preventDefault();
    }
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setError('Passwords does not match')
          }
        }
        return isValid
      }
    const register = e => {
            e.preventDefault()
            setError('')
            if(validatePassword()) {
              // Create a new user with email and password using firebase
                createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    console.log(res.user)
                  })
                .catch(err => setError(err.message))
            }
            setEmail('')
            setPassword('')
            setConfirmPassword('')
    }

    return (
        <div className='login'>
            <img src="./images/amazon-In.jpg" alt ="amazonLoginLogo" style={{"height" : "150px", "width" : "150px"}}></img>
            <div className='container'>
                 <p>Sign in or create account</p>
                 <form>
                 <p><b>Enter email</b></p>
                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='andy@amazon.com'></input><br></br>
                 <p><b>Enter password</b></p>
                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password'></input>
                 <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirm password'></input>
                 {/* <button type="submit" onClick={signIn} style={{'backgroundColor' : "orange"}}> Continue </button>     */}
                 </form>
                 <button type="registrationButton" onClick = {register} style={{'backgroundColor' : "orange"}}> Continue </button> 
            </div>
            <div className='smile'>
                 <img src ="./images/amazonSmile.png" alt="smile"></img>
            </div>
        </div>
    )
}
export default Login;