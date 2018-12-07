import React from 'react';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients: [],
        }        
    }

    render() {
        return (
            <div>
                <div>
                  <label htmlFor="recipeTitle">Recipe Name:</label>
                    <input
                        id="recipeTitle"
                        type="text"
                        placeholder="Enter name for recipe"
                    />  
                </div>
                <div>
                    <label htmlFor=""
                </div>
                
            </div>
        )
    }
}

export default RecipeForm;