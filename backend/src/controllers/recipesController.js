module.exports = {
    index(req, res, next) {
        res.json([{title: 'Tofu Egg Salad',
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
                 }, {title: '1 Pot Chili',
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
              }]); 
        // Idea would be to query the database for all recipes the user has saved
    }
}