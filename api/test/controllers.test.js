const fetch = require('node-fetch');
const PORT = process.env.PORT || 8080;
const baseURL = 'http://localhost:' + PORT;
let categoryRoute = baseURL + "/api/category/";
let ingredientRoute = baseURL + "/api/ingredients/";
let fridgeRoute = baseURL + "/api/fridge/";
let postRoute = baseURL + "/api/posts/";

describe('1) Category Controller Usage', () => {

    /*Tests for category controller*/
    test('get the number of category', async () => {
        const categories = await fetch(categoryRoute).then(res => res.json());
        expect(categories.length).toBe(4);
    });


    test('insert a new category', async () => {

        let categories = await fetch(categoryRoute, {
            method: 'post',
            body: JSON.stringify({
                name: 'Fish',
                pointValue: 20,
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => {
                return fetch(categoryRoute).then(res => res.json())
            });


        expect(categories.length).toEqual(5);
    });


    test('delete fish category', async () => {
        let categories = await fetch(categoryRoute + 5, {
            method: 'delete',
        })
            .then(() => {
                return fetch(categoryRoute).then(res => res.json())
            });


        expect(categories.length).toEqual(4);

    });

    test('find fruit category', async () => {

        let categories = await fetch(categoryRoute + 1)
            .then(res => {
                return res.json();
            })

        expect(categories.name).toEqual('fruit');

    });

    test('update category pointValue for fruit', async () => {
        let categories = await fetch(categoryRoute + 1, {
            method: 'put',
            body: JSON.stringify({
                name: "fruit",
                pointValue: 20,
            }),
            headers: {'Content-Type': 'application/json'}

        })
            .then(() => {
                return fetch(categoryRoute + 1).then(res => res.json())
            });


        expect(categories.pointValue).toEqual(20);

    });

});

describe('2) Ingredients Controller Usage', () => {

    /*Tests for ingredient controller*/
    test('get the number of ingredients', async () => {
        const ingredients = await fetch(ingredientRoute).then(res => res.json());
        expect(ingredients.length).toBe(14);
    });


    test('insert a new ingredient', async () => {

        let ingredients = await fetch(ingredientRoute, {
            method: 'post',
            body: JSON.stringify({
                name: 'Spinach',
                image: null,
                consistency: 'SOLID',
                shelfLife: '2 days',
                categoryId: 2,
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => {
                return fetch(ingredientRoute).then(res => res.json())
            });


        expect(ingredients.length).toEqual(15);
    });


    test('delete spinach ingredient', async () => {
        let ingredients = await fetch(ingredientRoute + 15, {
            method: 'delete',
        })
            .then(() => {
                return fetch(ingredientRoute).then(res => res.json())
            });


        expect(ingredients.length).toEqual(14);

    });

    test('find apple ingredient', async () => {

        let ingredients = await fetch(ingredientRoute + 1)
            .then(res =>{
                return res.json();
            })

        expect(ingredients.name).toEqual('apple');

    });

    test('update ingredient shelfLife of apple', async () => {
        let ingredient = await fetch(ingredientRoute + 1, {
            method: 'put',
            body: JSON.stringify({
                shelfLife: '14 days'
            }),
            headers: {'Content-Type': 'application/json'}

        })
            .then(() => {
                return fetch(ingredientRoute + 1).then(res => res.json())
            });


        expect(ingredient.shelfLife).toEqual('14 days');

    });

});

describe('3) Fridge Controller Usage', () => {

    /*Tests for fridge controller*/
    test('get the number of Hermann ingredients ', async () => {
        const ingredients = await fetch(fridgeRoute + 1).then(res => res.json());
        expect(ingredients.length).toBe(10);
    });


    test('insert a new ingredient in Hermann fridge', async () => {

        let ingredients = await fetch(fridgeRoute, {
            method: 'post',
            body: JSON.stringify({
                ingredientId: 13,
                userId: 1,
                quantity: 1,
                expiration: '1/22/20',
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => {
                return fetch(fridgeRoute + 1).then(res => res.json())
            });

        expect(ingredients.length).toEqual(11);
    });


    test('delete fridge ingredient from Hermann fridge', async () => {
        let ingredients = await fetch(fridgeRoute + 1 + "/" + 13, {
            method: 'delete',
        })
            .then(() => {
                return fetch(fridgeRoute + 1).then(res => res.json())
            });


        expect(ingredients.length).toEqual(10);

    });

    test('find how many apples are in Hermann fridge', async () => {

        let ingredient = await fetch(fridgeRoute + 1 + "/" + 1)
            .then(res =>{
                return res.json();
            })

        expect(ingredient.quantity).toEqual(4);

    });


    test('update quantity of apple in Hermann fridge', async () => {
        let ingredient = await fetch(fridgeRoute + 1 + "/" + 1, {
            method: 'put',
            body: JSON.stringify({
                quantity: 20,
                expiration: '1/30/21',
            }),
            headers: { 'Content-Type' : 'application/json' }

        })
            .then(() => {
                return fetch(fridgeRoute + 1 + "/" + 1).then(res => res.json())
            });


        expect(ingredient.quantity).toEqual(20);

    });

});

describe('4) Post Controller Usage', () => {

    /*Tests for post controller*/
    test('get the number post Hermann has ', async () => {
        const posts = await fetch(postRoute + 1).then(res => res.json());
        expect(posts.length).toBe(3);
    });


    test('insert a new post for Hermann', async () => {

        let posts = await fetch(postRoute, {
            method: 'post',
            body: JSON.stringify({
                postImage: "/public/assets/dough-post.jpg",
                userId: 1,
                caption: "This is a caption for testing",
                likes: 25,
                dislikes: 3,
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => {
                return fetch(postRoute + 1).then(res => res.json())
            });

        expect(posts.length).toEqual(4);
    });


    test('delete last post from Hermann', async () => {
        let posts = await fetch(postRoute + 4 , {
            method: 'delete',
        })
            .then(() => {
                return fetch(postRoute + 1).then(res => res.json())
            });


        expect(posts.length).toEqual(3);

    });

    test('update Hermann post', async () => {
        let post = await fetch(postRoute + 3, {
            method: 'put',
            body: JSON.stringify({
                likes: 24,
                dislikes: 2,
            }),
            headers: { 'Content-Type' : 'application/json' }

        })
            .then(() => {
                return fetch(postRoute + "post/" + 3).then(res => res.json())
            });


        expect(post.likes).toEqual(24);

    });

});