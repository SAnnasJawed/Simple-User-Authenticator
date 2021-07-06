import React ,{useState,useEffect} from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import swal from 'sweetalert'

function Login() {


    const[userName,set_userName]=useState('')
    const[password,set_password]=useState('')

    function validation(event){

        event.preventDefault();

        if(userName==='JavaScript' && password==='react')
        {
            swal('Login Successfull','Congratulations you successfully logged in','success')
        }
        else{
            swal('Incorrect Login Details','Please check your login details once more','error')
        }
    }


    return (
        <div>

            <div className='row justify-content-center'>

                <div className='col-md-4 justify-content-center'>
                    <h1 className='text-danger'>User Authentication</h1>
                    <form onSubmit={validation}>
                        <input type="text" placeholder="userName" className='form-control bg-dark text-light' value={userName} onChange={(e)=>{set_userName(e.target.value)}} />
                        <div className='input-group '>
                        <input type="password" placeholder="password" className='form-control bg-dark text-light' value={password} onChange={(e)=>{set_password(e.target.value)}} />
                        </div>
                        <input type="submit" className='btn btn-danger' value="login" />
                    </form>

                </div>

            </div>
            



        
        </div>
    )
}

export default Login
