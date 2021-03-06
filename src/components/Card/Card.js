import React from "react";
import "./card.css";

//render images to the screen
const Card = props => (
    <div ClassName="main-container"> 
    <div className="card img-container hoover"> 
    <img alt={props.name} src={props.image} id={props.id}
    onClick={() => props.shuffleScoreCard(props.id)} className="shuffleScore"/>
    </div>
    </div>
)

export default Card;