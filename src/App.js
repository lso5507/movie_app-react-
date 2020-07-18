import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";


class App extends React.Component{
  state={
    num:0,
    ready:false,
    movies:[]
  };
   getMovies = async ()=>{
     const {
       data:{
         data:{movies}
        }
   } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year");
   this.setState({movies,ready:true});
   
  }
  componentDidMount(){ 
    this.getMovies();
  }
  render(){
    const {ready,movies} = this.state;
    console.log("render");
    return(
    <section className="container"> {ready ? (
      <div className="movies">
      {movies.map(movie=>(
        <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.medium_cover_image}
         year={movie.year} url={movie.url} genres={movie.genres}summary={movie.summary} />
      ))}
      </div>
    ):(<div className="loader">
      <span className="loader_text">"is Loading"</span></div>)
    }</section>
    )
  }

}

export default App;
