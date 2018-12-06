import React, {Component} from 'react';
import axios from 'axios';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: ''
        }
    }

    async fetchData(recipeId) {
        const recipe = (await axios.get(`/recipes/${recipeId}`)).data;
        return recipe;
    }

    async componentDidMount() {
        const recipe = await this.fetchData(this.props.match.params.recipeId);
        this.setState({ recipe });
    }

    async componentDidUpdate() {
        if (this.state.recipe.id !== parseInt(this.props.match.params.recipeId)) {
            const recipe = await this.fetchData(this.props.match.params.recipeId);
            this.setState({ recipe });
        }
        
    }

    render() {
        const ingredients = this.state.recipe.ingredients;
        return (
            <div>
                <hr></hr>
                <h4>{this.state.recipe.title}</h4>
                <ul>
                    {
                        this.state.recipe && ingredients.map(function(ingredient, idx){
                        return (
                            <li key={idx}>
                                {ingredient.item}
                            </li>
                        )})
                    } 
                </ul>
                <hr></hr>
            </div>
        )
    }
}

export default Recipe;