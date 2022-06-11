import TinderCard from "react-tinder-card"
import { useState } from 'react'
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {
    const characters = [
        {
          name: 'Richard Hendricks',
          url: './img/richard.jpg'
        },
        {
          name: 'Erlich Bachman',
          url: './img/erlich.jpg'
        },
        {
          name: 'Monica Hall',
          url: './img/monica.jpg'
        },
        {
          name: 'Jared Dunn',
          url: './img/jared.jpg'
        },
        {
          name: 'Dinesh Chugtai',
          url: './img/dinesh.jpg'
        }
    ]

  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

    return (
        <div className='dashboard'>
            <ChatContainer />
            <div className="swiper-container">
                <div className="cardContainer">

                {characters.map((character) =>
                    <TinderCard className='swipe'
                        key={character.name} 
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                        >
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard> 
                    //  <button onClick={() => {swiped('left', character.name)}}>ClickME</button> 
                )}
                
                </div>
            </div>
        </div>
    )
}

export default Dashboard