
const seed = (db) => {
    const { Ingredient, Category, User, Profile, Post, Fridge } = db;

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
        {ingredientId: 1, userId: 1,expiration:1/22/2021,quantity: 4},
        {ingredientId: 3, userId: 1, expiration:1/22/2021, quantity: 2},
        {ingredientId: 4, userId: 1,expiration:1/22/2021, quantity: 2},
        {ingredientId: 5, userId: 1,expiration:1/22/2021, quantity: 1},
        {ingredientId: 6, userId: 1,expiration:1/22/2021, quantity: 8},
        {ingredientId: 7, userId: 1,expiration:1/22/2021, quantity: 7},
        {ingredientId: 9, userId: 1,expiration:1/22/2021, quantity: 1},
        {ingredientId: 12, userId: 1,expiration:1/22/2021, quantity: 1},
        {ingredientId: 14, userId: 1,expiration:1/22/2021, quantity: 2},
        {ingredientId: 2, userId: 1,expiration:1/22/2021, quantity: 1},
    ]

    const POST = [
        {id:1, caption: "I lost some weight once, but I found it again in the fridge.", likes: 0, dislikes: 0, userId:1},
        {id:2,caption: "I love pizza. ...", likes: 0, dislikes: 0, userId:2},
        {id:3,caption: "I just want someone to look at me the way I look at food.", likes: 0, dislikes: 0, userId:2},
        {id:4,caption: "Sorry—I'm in a relationship. ...", likes: 0, dislikes: 0, userId:1},
        {id:5,caption: "Sugar, spice, and everything nice.", likes: 0, dislikes: 0, userId:2},
        {id:6,caption: "My milkshake brings all the boys to the yard.", likes: 0, dislikes: 0, userId:1},
    ]

    const PROFILE = [
        {id: 1, profileImage:'../assets/HeadShot.jpg', lvl: 0, status:"Cooking", bio: "Love to cook", userId: 1},
        {id: 2, profileImage:'../assets/HeadShot.jpg', lvl: 0, status:"Cooking", bio: "Big Foodie", userId: 2}

    ]

    const USER = [
        {id: 1, username: "hermann2356", firstName: "Hermann", lastName: "Sterling", email: "hermannsterling@gmail.com", password: "Hermann"},
        {id: 2, username: "marlon1234", firstName: "Marlon", lastName: "Jacques", email: "mar.jacq0296@gmail.com", password: "Marlon22"}

    ]

    return db.sequelize.sync({force: true})
        .then(() => {
            // Create all the entries
            let userPromises = USER.map(u => User.create(u));
            let categoryPromises = CATEGORY.map(c => Category.create(c));
            let ingredientPromises = INGREDIENT.map(i => Ingredient.create(i));

            return Promise.all([...categoryPromises, ...userPromises, ...ingredientPromises,])
                .then(() =>{

                    let profilePromises = PROFILE.map(p => Profile.create(p));
                    let postPromises = POST.map(p => Post.create(p));
                    let fridgePromises = FRIDGE.map(f => Fridge.create(f));

                    // Create the associations
                    let associationPromises = FRIDGE.map(f =>{
                        let userPromise = User.findByPk(f.userId);
                        let ingredientPromise = Ingredient.findByPk(f.ingredientId);
                        return Promise.all([userPromise, ingredientPromise])
                            .then(([users, ingredients]) =>{
                                return users.addIngredient(ingredients);
                            })
                    });
                    return Promise.all([...fridgePromises, ...profilePromises, ...postPromises]);
                });
        })


}

module.exports = seed;