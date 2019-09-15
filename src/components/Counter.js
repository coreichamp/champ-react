import React, { useState } from 'react'

const Counter = (props) => {
  console.log(props)

  const [timer, setTimer] = useState(0)
  //   const [state2, setState2] = useState('')
  React.useEffect(() => {
    console.log('useEffect')
    // const interval = setInterval(() => {
    //   setTimer(timer + 1)
    // }, 1000)
  })

  const handleClick = () => {
    setTimer(timer + 1)
  }

  return (
    <>
      <div>
             Timer: {timer}
      </div>
      <button type="submit" onClick={handleClick}>Click</button>
    </>
  )
}
export default Counter

// class Counter extends React.Component   {
//     constructor(props){
//         super(props)
//         this.state = {
//             timer: 0
//         }
//     }
//     componentDidMount(){
//         this.interval = setInterval(() => {
//             this.setState(state => {
//                 this.setState(timer: state.timer + 1)
//             }, 1000)
//         })
//     }
//     render(){
//         const timer = this.state
//         return(
//             <div>
//                 Timer: {timer}
//             </div>
//         )
//     }
// }
