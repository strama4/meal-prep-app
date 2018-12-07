import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import RecipeForm from './pages/RecipeForm';
import SignIn from './pages/SignIn';

class App extends Component {
  state = {
    title: ''
  }

  componentDidMount() {
    this.apiCall()
      .then((response) => {
        this.setState({
          title: response.title
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  apiCall = async () => {
    const response = await fetch('/api/title');
    const body = await response.json();

    if (response.status !== 200) throw Error('Unable to find');

    return body;
  }
  
  
  render() {
    return (
      <div className="App">
      <header>
        <h1>{ this.state.title }</h1>
        <nav>
          <Link to='/'>Landing</Link>
          <Link to='/users/sign_in'>Sign In</Link>
          <Link to='/recipes'>Recipes</Link>
        </nav>
      </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/recipes" component={Recipes} />
          <Route path="/users/sign_in" component={SignIn} />
          <Route path="/recipes/:recipeId" component={Recipe} />
          <Route path="/recipes/new" component={RecipeForm} />
        </main>
      </div>
    );
  }
}

export default App;
