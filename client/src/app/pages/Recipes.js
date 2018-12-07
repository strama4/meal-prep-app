import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: ''
        }
    }

    async componentDidMount() {
        const recipes = (await axios.get('/api/recipes')).data;
        this.setState({ recipes });
    }

    render() {
        const recipes = this.state.recipes;
        return (
            <div>
                <Link to={'/recipes/new'}>
                    <button>Add recipe</button>
                </Link>
                {Object.values(recipes).map(function(recipe){ 
                    return (
                        <li key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                                <div>{recipe.title}</div>
                            </Link>  
                        </li>
                    )
                })}
            </div>
        )
            // <div>
            //     { 
            //         Object.values(recipes).map((recipe, index) => {
            //             return (
            //                <div key={`${index}`}>
            //                     <Link to={`/recipes/${recipe.id}`}>
            //                         <h5>{recipe.title}</h5>
            //                     </Link>
            //                 </div> 
            //             );
            //         })
            //     } 
            // </div>
        
    }
}

export default Recipes