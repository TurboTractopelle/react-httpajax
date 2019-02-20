import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import store from './store'
import FormControl from './components/FormControl/FormControl'
import Users from './components/Users/Users'
import Todos from './components/Todos/Todos'
import FilterDisplay from './components/FilterDisplay/FilterDisplay'
import './App.css';

const storeByUserId = {...store.reduce((a,t)=>{
  const cle = t.userId
  a[cle] = a[cle] ? [...a[cle], t] : [t]
  return a
},{})}

console.log(storeByUserId)

class App extends Component {

  state = {todos: storeByUserId, filter:{}}

  // FormControl method
  filterByUserIdHandler = (e)=>{
    const id = e.target.value;
    if (id) {
      const todo = store.filter(i=>i.id==id)[0];
      const userId = todo["userId"]
      this.setState(prevState=>({...prevState, todos:{[userId]:[todo]},  filter:{...prevState.filter, id:id}}))
    }else {
      this.setState(prevState=>({...prevState, todos: storeByUserId, filter:{...prevState.filter, id:""}}))
    }
  }


  render() {
    const {todos} = this.state
    console.log(todos)
    return (
      <Layout>
        <FormControl filterByUserIdHandler={this.filterByUserIdHandler} />
        <FilterDisplay id={this.state.filter.id} />
        <Users users={todos} />
        {/*<todos todos={todos} /> */}
      </Layout>
    );
  }
}

export default App;
