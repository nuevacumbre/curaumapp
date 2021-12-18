import './App.css';
import Menu from './Menu';
import List from './List';
import React from 'react';

//function App() {
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      food:[
        {id:0, rating: 4, title: 'Churrasco Italiano', image:'comida01.jpg'},
        {id:1, rating: 3, title: 'Churrasco Chacarero', image:'comida02.jpg'},
        {id:2, rating: 4, title: 'Churrasco Barros Luco', image:'comida03.jpg'},
        {id:3, rating: 5, title: 'Churrasco Mechada', image:'comida04.jpg'},
        {id:4, rating: 2, title: 'Churrasco Vegano', image:'comida05.jpg'}
      ],
      copyFood: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onUpdateRating = this.onUpdateRating.bind(this);
  }

  componentDidMount(){
    this.initFood();
  }

  initFood = () =>{
    this.setState((state,props)=> ({
      copyFood: [...state.food]
    }));
  }

  onAdd = (item) => {
    var temp = [...this.state.food]; //let
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);

    this.setState({food: [...temp]});
    this.initFood();
  }

  onSearch = (query) =>{
    if (query === ''){
      //this.initFood();
      this.setState({copyBooks: [...this.state.food]});
    }else{
      const temp = [...this.state.food];
      var res = []; //let

      temp.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyFood: [...res]});
    }
  }

  onUpdateRating = (item) =>{
    var temp = [...this.state.food];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    //this.(property) App.initFood: () => void
    this.setState({food: [...temp]});
    this.initFood();
  }

  onRemove = (id) =>{
    var temp = [...this.state.food];
    const res = temp.filter(item => item.id !== id);
    this.setState({food: [...res]});
    this.initFood();
  }

  render(){  
    return (
      <div className="App">
        <Menu title="CuraumAPP" onadd={this.onAdd} onsearch={this.onSearch} />
        <List 
          className="list"
          items={this.state.copyFood} 
          onupdaterating={this.onUpdateRating} 
          onremove={this.onRemove}/>
      </div>
    );
  }
}

export default App;