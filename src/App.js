import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array : [],
      sentence : "",
      word : '' ,
      countOccurence : 0,
      countWord : 0
    }
  }

  handleCount = (e) => {
    const {sentence, word,array} = this.state;
    array.push(sentence);
    var sen = array[Math.floor(Math.random() * array.length)];
    var splitted = sen.split(" ");
    var counter = 0;
    this.setState({countWord : splitted.length});
    for (var i = 0; i < splitted.length; i++) {
      if (splitted[i] === word) {
        counter += 1;
      }
    }
    this.setState({countOccurence : counter});
  }
  render() {
    
    const { word, countOccurence, countWord , sentence} = this.state;
    return(
      <div className = "center">
        <h1>WORD COUNTER</h1>
        <hr></hr>
        <br></br>
        Sentence : <input type = "text" onChange = {e => this.setState({sentence: e.target.value})}></input>
        <br></br><br></br>
        Word : <input type = "text" onChange = {e => this.setState({word : e.target.value})}></input>
        <br></br><br></br>
        <button className = "button1" onClick = {e => this.handleCount(e)}>Count</button>
        <p>{sentence} = {countWord}</p>
        <p>The number of times "{word}" occur is {countOccurence}</p>
      </div>
    )
  }
}

export default App;
