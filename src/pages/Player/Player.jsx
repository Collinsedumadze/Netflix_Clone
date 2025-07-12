import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const [apiData,setApiData] = useState({
    name: "",
    type: "",
    key: "",
    published_at: ""
  });

  const {id} = useParams();
  const navigate = useNavigate();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTRmODVhNTczNTNiMTY2OGJhOTQxMzFjMjBiNzUxNyIsIm5iZiI6MTc1MDU1MjEyNi42MSwic3ViIjoiNjg1NzRlM2VmNDdmZjgwZmQ0NGJjZWIzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KCwH9BbAZRsrmzYFRku8P2xz2vYDXpYs75ouRYV2Ho8'
  }
};




  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img onClick={()=>navigate(-1)} src={back_arrow_icon} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" title='trailer' width="90%" height="90%" allowFullScreen></iframe>  
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.published_at.slice(1,10)}</p>
        <p>{apiData.type}</p>    
    </div>
    </div>
  )
}

export default Player
