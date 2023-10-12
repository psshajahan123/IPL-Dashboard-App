import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, imageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img className="team-card-image" src={imageUrl} alt={name} />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard