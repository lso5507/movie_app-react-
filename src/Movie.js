import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id,title,year,poster,url,genres,summary}){
    return(
        <div className="movie">
            <img className="content_img" src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}({year})</h3>
                {/* <a href={url} className="movie_url">{url}</a> */}
                
                <ul className="movie_text">{}
                    {
                        genres.map((genre, index)=>(
                            <li key={index} className="genres_genre">{genre}</li>
                        ))
                    }
                </ul>
                <h5 id="movie_summary">{summary.slice(0,150)}... </h5>
            </div>
        </div>
    )

}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    summary : PropTypes.string.isRequired
}

export default Movie; 