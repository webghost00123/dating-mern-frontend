import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card"
import "./DatingCards.css"
import axios from "./axios"


export default function DatingCards() {
    const [people, setPeople] = useState([])
    useEffect(()=>{
      async function fetchData(){
        const req = await axios.get("dating/cards")
        setPeople(req.data)
      }
      fetchData()
    },[])


    const swiped = (direction, nameToDelete) =>{
        console.log("Receiving" + nameToDelete)
    }
    const outOfFrame = (name)=>{
        console.log(name+ "left the screen!")
    }
    
  return (
    <div className="datingCards">
        <div className="datingCards__container">
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)} >
            <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                 <h3>{person.name}</h3></div>
        </TinderCard>
        ))}
        </div>
    </div>
  )
}



// const db = [
//             { name: "Random Guy", imgUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" },
//             { name: "Another Guy", imgUrl: "https://images.unsplash.com/photo-1495874418447-4a9bab856d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80" },
//             { name: "Random Girl", imgUrl: "https://images.unsplash.com/photo1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" },
//             { name: "Another Girl", imgUrl: "https://images.unsplash.com/photo1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" }
 
//   ]

// export default function DatingCards() {
//     const characters = db
//     const [lastDirection, setLastDirection] = useState()
  
//     const swiped = (direction, nameToDelete) => {
//       console.log('removing: ' + nameToDelete)
//       setLastDirection(direction)
//     }
  
//     const outOfFrame = (name) => {
//       console.log(name + ' left the screen!')
//     }
//   return (
//     <div>
//       <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
//       <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
//       <h1>React Tinder Card</h1>
//       <div className='cardContainer'>
//         {characters.map((character) =>
//           <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
//             <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
//               <h3>{character.name}</h3>
//             </div>
//           </TinderCard>
//         )}
//       </div>
//       {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
//     </div>
//   )
// }
