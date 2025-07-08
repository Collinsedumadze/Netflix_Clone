import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe src="https://www.youtube.com/embed/hkHHwA-vEyQ" frameborder="0" title='trailer' width="90%" height="90%" allowFullScreen></iframe>  
      <div className="player-info">
        <h2>Yaral Kuşlar</h2>
        <p>2023 ‧ Drama</p>
        <p>Discovering his ties to a secret ancient order, a young</p>    
    </div>
    </div>
  )
}

export default Player
