import TinderCard from "react-tinder-card"
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import ChatContainer from '../components/ChatContainer'
import axios from "axios"

const Dashboard = () => {
    const [user, setUser] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [allUsers, setAllUsers] = useState(null)

    const userId = cookies.UserId

      const getUser = async () => {
        try {
          const response = await axios.get('http://localhost:4000/user', {
            params: {userId}
          })
          setUser(response.data)
        } catch (error) {
          console.log(error)
        }
      }

      const getAllUsers = async () => {
        try {
          const response = await axios.get('http://localhost:4000/allusers', {
            params: {handicap: user?.handicap}
          })
          setAllUsers(response.data)
        } catch(error) {
            console.log(error)
        }
      }

      useEffect(() => {
        getUser()
        getAllUsers()
      }, [user, allUsers])
      console.log(allUsers)

  const [lastDirection, setLastDirection] = useState()

  const updatedMatches = async (matchedUserId) => {
    try {
      await axios.put('http://localhost:400/addmatch', {
        userId,
        matchedUserId
      })
      getUser()
    } catch (error) {
      console.log(error)
    }
  }

  const swiped = (direction, swipedUserId) => {

    if(direction === 'right') {
      updatedMatches(swipedUserId)
    }

    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

    return (
      <>
        {user &&
        <div className='dashboard'>
            <ChatContainer user={user}/>
            <div className="swiper-container">
                <div className="cardContainer">

                {allUsers?.map((allUser) =>
                    <TinderCard className='swipe'
                        key={allUser.first_name} 
                        onSwipe={(dir) => swiped(dir, allUser.user_id)}
                        onCardLeftScreen={() => outOfFrame(allUser.first_name)}
                        >
                        <div style={{ backgroundImage: 'url(' + allUser.url + ')' }} className='card'>
                            <h3>{allUser.first_name}</h3>
                        </div>
                    </TinderCard> 
                    //  <button onClick={() => {swiped('left', character.name)}}>ClickME</button> 
                )}
                
                </div>
            </div>
        </div>}
        </>
    )
}

export default Dashboard