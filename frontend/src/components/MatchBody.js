import axios from "axios";
import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";

const MatchBody = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  // const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUserIds = matches.map(({ user_id }) => user_id);
  // const userId = cookies.UserId;

  const getMatches = async () => {
    try {
      const response = await axios.get("https://partner-up-backend.herokuapp.com/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);


  return (
    <div className="matches-display">
      {matchedProfiles?.map((match, idx) => (
        <div key={{idx}} className='match-card' onClick={() => setClickedUser(match)}>
          <div className='img-container'>
            <img src={match?.url} alt={match?.first_name + ' profile'} />

          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}
        
    </div>
  );
};

export default MatchBody;