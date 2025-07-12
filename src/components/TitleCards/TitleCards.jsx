import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {

  const cardRef = useRef();
  const [apiData,setApiData] = useState([]);

  const scrollWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY
  };

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTRmODVhNTczNTNiMTY2OGJhOTQxMzFjMjBiNzUxNyIsIm5iZiI6MTc1MDU1MjEyNi42MSwic3ViIjoiNjg1NzRlM2VmNDdmZjgwZmQ0NGJjZWIzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KCwH9BbAZRsrmzYFRku8P2xz2vYDXpYs75ouRYV2Ho8'
  }
};



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel',scrollWheel)
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card,index) => {
          return (
                  <Link to={`/player/${card.id}`} className="card" key={index}>
                    <img src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                  </Link>
       ) })}
      </div>
    </div>
  )
}

export default TitleCards
