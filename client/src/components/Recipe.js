import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <h4>{this.props.title}</h4>
                <ul>
                    {
                        Object.values(this.props.ingredients).map((ingredient, index) => {
                            return <p key={index}>{ingredient.item}</p>
                        })
                    }
                </ul>
                <hr></hr>
            </div>
        )
    }
}

export default Recipe;