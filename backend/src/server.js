const app = require('./app');
const http = require('http');

const port = process.env.PORT || 5000;

const tempDb = [
                    {
                        id: 0, 
                        title: 'Tofu Egg Salad',
                        ingredients: [ 
                            {
                                item: 'Tofu',
                                qty: 2,
                                measurement: 'blocks'
                            }, {
                                item: 'Mustard',
                                qty: 4,
                                measurement: 'TBSP'
                            }
                        ]
                    }, {
                        id: 1,
                        title: '1 Pot Chili',
                        ingredients: [ 
                            {
                                item: 'Black Beans',
                                qty: 3,
                                measurement: 'cups'
                            }, {
                                item: 'Diced Tomatoes',
                                qty: 6,
                                measurement: 'cups'
                            }
                        ]
                    }
                ]

// API Calls
app.get('/api/title', (req, res) => {
    res.send({ title: 'Meal Prep Application!' });
});

app.get('/api/recipes', (req, res) => {
    let recipeIndex = []
    Object.values(tempDb).map(recipe => {
        recipeIndex.push({
            id: recipe.id,
            title: recipe.title
        })
    })

    res.json(recipeIndex);
})

app.get('/recipes/:recipeId', (req, res) => {
    let recipe = tempDb.find((recipe) => recipe.id === parseInt(req.params.recipeId))
    if (!recipe) return res.status(404).send();
    res.send(recipe)
})

http.createServer(app).listen(port);

console.log(`Server is listening at port ${port}`);