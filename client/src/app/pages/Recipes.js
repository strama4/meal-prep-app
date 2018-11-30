import React from 'react';
import Recipe from '../../components/Recipe';

class Recipes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: ''
        }
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes() {
        fetch('/api/recipes')
        .then((res) => {
            res.json()
            .then((recipes) => {
                this.setState({ recipes });
            });
        });
    }

    
    render() {
        const recipes = this.state.recipes;

        return (
            <div>
                { 
                    Object.values(recipes).map((recipe, index) => {
                        return (
                           <Recipe key={index}
                                title={recipe.title} 
                                ingredients={recipe.ingredients}    
                            />
                            
                        )
                    })
                } 
            </div>
        );
    }
}

export default Recipes;