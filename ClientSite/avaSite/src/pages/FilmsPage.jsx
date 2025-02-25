import $ from 'jquery'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import FilmCard from '../components/FilmCard'

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
let films = [
    {
        title: "TITLE",
        description: text
    },
    {
        title: "TITLE",
        description: text
    },
    {
        title: "TITLE",
        description: text
    }
]
function FilmsPage() {
  useEffect(() => {
    $(".filmList").children().each(function(index) {
      $(this).delay(index * 250).animate({
      opacity: '1.0',
      });
    });
  }, []);

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
