import React,{useState} from 'react'
import CountUp from '../containers/CountUp'
import { div } from 'motion/react-client'
export const Details = () => {
    const [data, setData] = useState([0,0,0,0]);
  return (
  <div className='w-screen flex flex-row text-black px-16 justify-between'>
    {
        data.map((data,index)=>(
<div className='flex flex-col bg-green-100' key={index}>
    <CountUp
    from={0}
    to={100}
    separator=","
    direction="up"
    duration={0.5}
    className="count-up-text text-3xl md:text-7xl font-bold text-black"
  />
  <p>Details of the card</p>
  </div>
        ))
    }


  </div>
  )
}
