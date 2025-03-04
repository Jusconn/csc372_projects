import $, { ajax, get } from 'jquery'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FilmCard from '../components/FilmCard'
import { getRequest } from '../js/requests'

function FilmsPage() {
  const [films, setFilms] = useState([]);
  // fetches the films from the films.json file
  useEffect(() => {
    async function fetchFilms() {
      let filmsData = await getRequest("http://localhost:5173/src/data/films.json","json");
      setFilms(filmsData);
    }
    fetchFilms();
  }, []);

  useEffect(() => {
    $(".filmList").children().each(function(index) {
      $(this).delay(index * 250).animate({
        opacity: '1.0',
      });
    });
  }, [films]);

  return (
    <>
      <Navbar/>
      <div className="main-content">
        <button id="open">Menu</button>
        <h1>Films</h1>
        <div className="filmList">
          {films.map((film, index) => {
            return <FilmCard key={index} title={film.title} description={film.description}/>
          })}
        </div>
      </div>
    </>
  )
}

export default FilmsPage