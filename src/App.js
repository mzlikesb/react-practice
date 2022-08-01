import React, {Component} from 'react';
import Nav from './components/Nav';
import Contents from './components/Contents';

class App extends Component{
  constructor(props){
    super(props);
    const defaultTitle = "welcome!";
    const defaultDesc = "hi hi hi";
    this.state = {
      list: {
        items: [],
        isLoading: false
      },
      content: {
        item: {
          title: defaultTitle,
          desc: defaultDesc
        },
        isLoading: false
      }
    }
  }
  componentDidMount(){
    this.loadList();
  }
  render(){
    return (
      <div className="App">
        hi there!!

        <Nav 
          list={this.state.list.items} 
          isLoading={this.state.list.isLoading} 
          onClick={id => this.selectContents(id)}
        />
        <Contents 
          title={this.state.content.item.title} 
          desc={this.state.content.item.desc} 
          isLoading={this.state.content.isLoading}
          />
      </div>
    );
  }
  loadList(){
    var newList = Object.assign({}, this.state.list, {isLoading:true});
    this.setState({list:newList});
    fetch('/data/list.json')
    .then(result => result.json())
    .then(function(json){
      this.setState({list:{
        items:json,
        isLoading:false
      }});
    }.bind(this));
  }
  selectContents(id){
    var newContent = Object.assign({}, this.state.content, {isLoading:true});
    this.setState({content:newContent});
    fetch(`/data/${id}.json`)
    .then(result => result.json())
    .then(function(json){
      console.log(json);
      this.setState({content:{
        item:{
          title:json.title,
          desc:json.desc
        },
        isLoading:false
      }});
    }.bind(this));
  }
}

export default App;
