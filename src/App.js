import React, { Component} from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import skateboarder from "./cards.json";
import "./App.css";


class App extends Component {
  //Set this.state.skateboarder to the cards array
  state = {
    skateboarder,
    clickedSkateboarderIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the cards when clicked
  shuffleScoreCard = id => {
    let clickedSkateboarderIds = this.state.clickedSkateboarderIds;

    if(clickedSkateboarderIds.includes(id)){
      this.setState({ clickedSkateboarderIds: [], score: 0, status:"Oh rats! you lost. Click to play again"});
      return;
    }else{
      clickedSkateboarderIds.push(id)

      if(clickedSkateboarderIds.length === 8){
        this.setState({score: 8, status: "Ha! you won. Great job smartie pants. Click to play again", clickedSkateboarderIds: []});
        console.log("Winner");
        return;
      
      }

      this.setState({ skateboarder, clickedSkateboarderIds, score: clickedSkateboarderIds.length, status: " "});

      for(let i = skateboarder.length -1; i>0; i--){
        let j= Math.floor(Math.random()* (i+1));
        [skateboarder[i],skateboarder[j]] = [skateboarder[j], skateboarder[i]];
      }

    }
    }
    //Map over and render a card components for each object
    render() {
      return(
        <div className="App">
        <header className="App-header">
        <h1 className="App-title"> The Clicky Game </h1> 
        <p className="App-intro"> 
          Don't click the same image twice! </p> 
          </header>
          <Score total={this.state.score}
            goal={8}
            status={this.state.status} />
          <Wrapper>
          {this.state.skateboarder.map(skateboarder => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={skateboarder.id}
              key={skateboarder.id}
              image={skateboarder.image}
            />
          ))}
        </Wrapper>
        <footer>

        
         <p>Sonja Rasmussen
          <a href="https://github.com/sonjarasmussen/Clicky-Game" target="_blank" rel="noopener noreferrer"> </a>.</p>
        </footer>
        </div>
      );
    }
  }


export default App;
