import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import store from './store'
import FormControl from './components/FormControl/FormControl'
//import Users from './components/Users/Users'
import Todos from './components/Todos/Todos'
import FilterDisplay from './components/FilterDisplay/FilterDisplay'
import './App.css';

class App extends Component {

  state = {todos: store, filter:{}}

  filterByUserIdHandler = (e)=>{
    const id = e.target.value;

    if (id) {
    this.setState((prevState)=>{
      return ({...prevState, todos: store.filter(i=>i.id==id), filter:{...prevState.filter, id:id}})
    })}
    else {
      this.setState((prevState)=>{
        return ({...prevState, todos: store, filter:{...prevState.filter, id:""}})
      })
    }
  }


  render() {
    const {todos} = this.state
    console.log(this.state.todos)

    return (
      <Layout>
        <FormControl filterByUserIdHandler={this.filterByUserIdHandler} />
        <FilterDisplay id={this.state.filter.id} />
        <Todos todos={todos} />
      </Layout>
    );
  }
}

export default App;
