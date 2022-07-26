import React from 'react'
import { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {

  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0")
  const [bmi, setBmi] = useState("")
 


  let CalcBmi = (e) => {
    e.preventDefault()

    if(weight === 0 || height === 0 )
    {
      alert(" Please fill in the weight and height section. Thanks")
    }else
    {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(2))
    }
  }

  let reload = ( ) =>{
    window.location.reload()
  }
  
  return (
    <div className="container">
        <form onSubmit={CalcBmi}>
            <div className='values'>
                <div className='value-labels'>
                  <label htmlFor="">Weight (lbs)</label>
                  <input type="text" value={weight} onChange = { (e) => setWeight(e.target.value)} />
                </div>

                <div className='value-labels'>
                  <label htmlFor="">Height (inc)</label>
                  <input type="text" value={height} onChange = { (e) => setHeight(e.target.value) } />
                </div>
            </div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
            </div>
        </form>
        <div className='msg'>
            <h1>Your BMI is {bmi}</h1>
        </div>
    </div>
  )
}

export default Calculator