import React from "react";


export default function FilmCard({title, description}) {


    return (
        <div className="filmCard">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/y0sF5xhGreA?si=3x2AsuY-8lwq2DO_" title="YouTube video player" frameborder="0" allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="filmInfo">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}