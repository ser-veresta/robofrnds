import React from 'react';

const Card = (props) =>{
    return(
        <div className=" tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5 border-box">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robot photos" />
            <div>
                <h4>{props.name}</h4>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;