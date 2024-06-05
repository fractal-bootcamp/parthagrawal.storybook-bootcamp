import { useState } from 'react'
import './App.css'

const Food = ({type, name, size}) => {

  return <div>
    {type}
    {name}
    {size}
  </div>

  
}

function Deployer() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const userProfile = card[selectedIndex];

  return (

    <>
      <Button onClick={() => setSelectedIndex(0)} name="Nicki" />
      <Button onClick={() => setSelectedIndex(1)} name="Jake" />
      <Button onClick={() => setSelectedIndex(2)} name="Akame" />
      <Card data={userProfile} />
      <Food type="fruit" name="banana" size="medium" location="carribean" />

      {/* <Card /> */}
    </>

  )

}

export default Deployer

export const card = [
  {
    id: 0,
    name: "Nicki",
    image: "https://pngimg.com/uploads/google/google_PNG19641.png",
    description: "WA 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.",
  },
  {
    id: 1,
    name: "Jake",
    title: "https://pngimg.com/uploads/google/google_PNG19641.png",
    description: "A 35-year-old graphic designer who creates digital art, plays guitar, and practices yoga. Tech and gaming enthusiast.",
  },
  {
    id: 2,
    name: "Akame",
    title: "https://pngimg.com/uploads/google/google_PNG19641.png",
    description: "Akame loves dogs, etc blablabla",
  },
];


const Card = (props) => {
  const userProfile = props.data;

  // return <span>{JSON.stringify(userProfile)}</span>
  
    return <div className='Card'>
      <div className="image-cropper" style={{overflow: "hidden", height:50, width: 50}}>
        <img className='image-card' src={userProfile.image} alt={userProfile.name} />
      </div>
      <h2 className='text-card'>{userProfile.description}</h2>
    </div>


  return (
    <>
      {deployedData}
    </>
  );
}

const Button = (card) => {
  return (
    <>
      <button {...card}>{card.name}</button>
    </>
  )
}

