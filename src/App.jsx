import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);
  const [arr, setArr] =useState([]);



  const handlForm = (e) => {
    e.preventDefault();
    const newObj = {
      id: Math.random().toFixed(10),
      text: document.querySelector('input').value
    }
    if(document.querySelector('input').value){
      setArr([...arr, newObj]);
      document.querySelector('input').value = '';
    }
  }

  const Increment = () => {
    if(num >= 10){
      setCounter(num => num + 1);
      setNum(prev => prev = 0)
    }
    else{
      setNum(prev => prev + 1)
    }
  }
  const Decrement = () => {
    if(num < 1){
      setNum(0);
    }
    else{
      setNum(prev => prev - 1)
    }
  }
  const Reset = () => {
    setNum(0);
  }
  return (
    <>
    <div className='w-25 mx-auto mt-4 p-5' style={{background: '#fbfbfb'}}>
      <p className='fs-2 fw-600 w-100' style={{width: '30px', textAlign: 'center'}}>{num}</p>
      <div className=' d-flex align-items-center justify-content-center gap-3' >
        <button className='btn btn-success' onClick={() => Increment()}>Increment</button>
        <button className='btn btn-danger' onClick={() => Decrement()}>Decrement</button>
        <button className='btn btn-dark' onClick={() => Reset()}>Reset</button>
      </div>
    </div>
    <h2 className='text-center mt-4 fs-1 mb-5' style={{color: '#045145'}}>Count: {counter}</h2>

    <hr />


    <div className='w-50 mx-auto mt-5 text-center' style={{color: '#aaa'}}>
      <h1>Todo List</h1>
      <form className='mt-5 gap-4 d-flex w-50 mx-auto text-center justify-content-center' onSubmit={(e) => handlForm(e)}>
        <input type="text" placeholder='Enter Your Text' className='d-block form-control' />
        <button className='d-block btn btn-primary'>Add</button>
      </form>
      <ul>
        {
          arr.map((item, index) => {
            return <li key={item.id}>{item.text}</li>
          })
        }
      </ul>
    </div>

    </>
  )
}

export default App