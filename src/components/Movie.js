import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "../routes/Home.css";
import ShowMoreText from 'react-show-more-text';

function Movie({id,title,year,poster,url,genres,summary,detail_poster}){
    return(

        <div className="movie">
            <Link 
                to={{
                    pathname:`/movie/${id}`,
                    state:{
                        title,
                        year,
                        poster,
                        url,
                        genres,
                        summary,
                        detail_poster
                    }
                }}
            >
            <img className="content_img" src={poster} alt={title} title={title}/>
            </Link>
            <div className="movie_data">
                <h3 className="movie_title">{title}({year})</h3>
                <ul className="movie_text">
                    {
                        genres.map((genre, index)=>(
                            <li key={index} className="genres_genre">{genre}</li>
                        ))
                    }
                </ul>
                <h5 className="movie_summary" >
                <ShowMoreText 
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                    
                    expanded={false}
                    >
                <h5 className="movie_summary">{summary}</h5>
                </ShowMoreText>
                </h5>
            </div>
        </div>
        
    )

}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    detail_poster : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    summary : PropTypes.string.isRequired
}

export default Movie; 