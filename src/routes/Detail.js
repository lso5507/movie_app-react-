import React from 'react';

import './Detail.css';
class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;
        if(location.state === undefined){
            alert("비정상적 접근입니다.");
            history.push('/');
        }

    }
    render(){
        const {location} = this.props;
        if(location.state){
            const{state} = location;
            return (
                <div className="contain">
                    <div className="img_content">
                        
                        <img src={state.detail_poster} alt={state.title} title={state.title}></img>
                        
                        <a href={state.url}> 
                        <span>Download</span>
                        </a>
                    </div>
                    <div className="data_content">
                        <h3 className="detail_title">{state.title}</h3>
                        <ul className="detail_text">
                            {
                                state.genres.map((genre,index)=>(
                                    <li key={index} className="detail_genre">{genre}</li>
                                ))
                            }
                        </ul>
                        <h5 className="detail_summary">{state.summary}</h5>

                    </div>


                </div>

            );
        }
        else{
            return <h1>Nothing</h1>;
        }
    }


}

export default Detail;