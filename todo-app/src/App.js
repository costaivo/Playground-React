import React,{Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state ={
    todos:[
      {
        id:1,
        title:'Click Passport Photo',
        completed: false
      },
      {
        id:2,
        title:'Take xerox of Pan Card and Aadharcard',
        completed:false
      },
      {
        id:3,
        title:'Pay ICICI Credit card bill',
        completed:false
      },
    ]
  }
  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
