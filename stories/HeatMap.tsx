import React from 'react'
import './HeatMap.css'




function HeatMap() {
  const deployedData = dummyData.map((item) => (
    <Square
      key={item.id}
      day={item.day}
      temperature={item.temperature}
    />
  ));

  return <div style={{ overflow: "scroll", display: "flex", flexDirection: "row", flexWrap: "wrap", minWidth: 600 }}>{deployedData}</div>;
}

export default HeatMap;



export function Square(props) {

    return (
      <>
      <div className='container' style={{  flex: "1 0 10%"}}>
          <div className='row'>
            <div className='day'>{props.day}</div>
            <div className='square'>{props.temperature}</div>
          </div>
      </div>
      
      </>
    )
  
}




// //Logic of rendering the color

// if (x===0) {
//   gradiente 0%
// }

// else if (x<=25) {
//   gradiente 12%
// }

// else if (x>=25 && x<=50) {
//   gradiente 32%
// }

// else if (x>=50 && x<=75) {
//   gradiente 66%
// }

// else

// {

//   gradiente 100%
// }


const dummyData = 
[
  { id: 1, day: "Monday", temperature: 23 },
  { id: 2, day: "Tuesday", temperature: 47 },
  { id: 3, day: "Wednesday", temperature: 1 },
  { id: 4, day: "Thursday", temperature: 56 },
  { id: 5, day: "Friday", temperature: 34 },
  { id: 6, day: "Saturday", temperature: 90 },
  { id: 7, day: "Sunday", temperature: 12 },
  { id: 8, day: "Monday", temperature: 45 },
  { id: 9, day: "Tuesday", temperature: 62 },
  { id: 10, day: "Wednesday", temperature: 11 },
  { id: 11, day: "Thursday", temperature: 6 },
  { id: 12, day: "Friday", temperature: 2 },
  { id: 13, day: "Saturday", temperature: 100 },
  { id: 14, day: "Sunday", temperature: 0 },
]




