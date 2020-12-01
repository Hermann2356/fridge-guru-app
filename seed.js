
const seed = (db) => {
    const { Ingredient, Category, User, Profile } = db;

    const CATEGORY = [
        {id: 1, name: "fruit"},
        {id: 2, name: "vegetable"},
        {id: 3, name: "poultry"},
        {id: 4, name: "protein"}
    ];

    const INGREDIENT = [
        {id: 1, name: "apple", image: null, consistency: "SOLID",  shelfLife: null, categoryId: 1},
        {id: 2, name: "banana", image: null, consistency: "SOLID", shelfLife: null, categoryId: 1},
        {id: 3, name: "orange", image: null, consistency: "SOLID", shelfLife: null, categoryId: 1},
        {id: 4, name: "grape", image: null, consistency: "SOLID", shelfLife: null, categoryId: 1},
        {id: 5, name: "peaches", image: null, consistency: "SOLID", shelfLife: null, categoryId: 1},
        {id: 6, name: "asparagus", image: null, consistency: "SOLID", shelfLife: null, categoryId: 2},
        {id: 7, name: "beans", image: null, consistency: "SOLID", shelfLife: null, categoryId: 2},
        {id: 8, name: "broccoli", image: null, consistency: "SOLID", shelfLife: null, categoryId: 2},
        {id: 9, name: "cabbage", image: null, consistency: "SOLID", shelfLife: null, categoryId: 2},
        {id: 10, name: "cauliflower", image: null, consistency: "SOLID", shelfLife: null, categoryId: 2},
        {id: 11, name: "chicken", image: null, consistency: "RAW", shelfLife: null, categoryId: 3},
        {id: 12, name: "turkey", image: null, consistency: "RAW", shelfLife: null, categoryId: 3},
        {id: 13, name: "duck", image: null, consistency: "RAW", shelfLife: null, categoryId: 3},
        {id: 14, name: "goose", image: null, consistency: "RAW", shelfLife: null, categoryId: 3},
    ];

    const FRIDGE = [
        {ingredientId: 1, userId: 1},
        {ingredientId: 3, userId: 1},
        {ingredientId: 4, userId: 1},
        {ingredientId: 5, userId: 1},
        {ingredientId: 6, userId: 1},
        {ingredientId: 7, userId: 1},
        {ingredientId: 9, userId: 1},
        {ingredientId: 12, userId: 1},
        {ingredientId: 14, userId: 1},
        {ingredientId: 2, userId: 1},
    ]

    const PROFILE = [
        {id: 1, bio: "Love to cook", userId: 1}
    ]

    const USER = [
        {id: 1, username: "hermann2356", firstName: "Hermann", lastName: "Sterling", email: "hermannsterling@gmail.com", password: "Hermann"}
    ]

    return db.sequelize.sync({force: true})
        .then(() => {
            // Create all the entries
            let userPromises = USER.map(u => User.create(u));
            let categoryPromises = CATEGORY.map(c => Category.create(c));
            let ingredientPromises = INGREDIENT.map(i => Ingredient.create(i));
            let profilePromises = PROFILE.map(p => Profile.create(p));

            return Promise.all([...ingredientPromises, ...categoryPromises, ...userPromises])
                .then(() =>{
                    // Create the associations
                    let associationPromises = FRIDGE.map(f =>{
                        let userPromise = User.findByPk(f.userId);
                        let ingredientPromise = Ingredient.findByPk(f.ingredientId);
                        return Promise.all([userPromise, ingredientPromise])
                            .then(([users, ingredients]) =>{
                                return users.addIngredient(ingredients);
                            })
                    });
                    return Promise.all([associationPromises, ...profilePromises]);
                });
        })


}

module.exports = seed;