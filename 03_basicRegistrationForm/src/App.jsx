import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [submit, setSubmit] = useState(false);
  const [valid , setValid]=useState(false);

  const submitFirstName = (evt) => {
    setValue({ ...values, firstName: evt.target.value })
  }
  const submitLastName = (evt) => {
    setValue({ ...values, lastName: evt.target.value })
  }
  const submitEmail = (evt) => {
    setValue({ ...values, email: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(values.firstName && values.lastName && values.email ){
      setValid(true)
    }
    setSubmit(true)
  }

  return (
    <>
      <div className="card">

        <h1 className='heading'>Basic Registration Form</h1>

          <form onSubmit={handleSubmit} >
           {submit && valid ? <div className='message'>Thank you for Registration</div> : null}

        <div className='input-box'>
            <input onChange={submitFirstName} value={values.firstName} className='input-box-space' type="text" placeholder='First Name' />
        </div>
        {submit && !values.firstName?<span  className='result'>Please Enter valid First Name</span>:null}

        <div className='input-box'>
          <input onChange={submitLastName} value={values.lastName} className='input-box-space' type="text" placeholder='Last Name' />
        </div>
        {submit && !values.lastName?<span  className='result'>Please Enter valid Last Name</span>:null}

        <div className='input-box'>
          <input onChange={submitEmail} value={values.email} className='input-box-space' type="text" placeholder='Email' />
        </div>
        {submit && !values.email?<span className='result'>Please Enter valid Email</span>:null}
        
        <div>
        <input type='submit' className='submit-btn' />
        </div>

      </form>
   </div >
    <div className='result'>{values.firstName}</div>
    <div className='result'>{values.lastName}</div>
    <div className='result'>{values.email}</div>
    
    </>
  )
}

export default App
