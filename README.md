# FridgeGuru Web Application 
A CUNY Tech Prep project built to demonstrate industry best practices in Full Stack Web Development by applying  tools, concepts, 
and processes -- such as Git, testing frameworks like Jest, Continuous Integration / Continuous Development (CI/CD),
designing and coding for security, the agile development process, databases (SQL and NoSQL), etc. 

FridgeGuru is a Web Application. 
The application purpose is to allow users to keep track of ingredients on hand in order to decrease the amount of wasted
or forgotten food in their fridge or pantry. The app curates a list of recipes and delivers it to the user based on their 
inventory of ingredients. The app will primarily generate a list of recipes on the basis of the user’s 
ingredients that are due to expire so no ingredients goes to waste. The user can also manually search and retrieve 
recipes by inputting keywords in a form of a short description or word, as well as, select items from their inventory 
to query the search. The app runs on a point system where it will award a user with experience points when a recipe has 
been accepted and completed. When a recipe has been completed the user will then be able to post the recipe achievement 
to their profile, where other users can see and rate their results. 


## Stack

*API*

- express.js
- sequelize.js
- passport.js
- multer.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router

*Third Party API*

- Spoonacular (For more detailS on this API see this [Spoonacular](https://rapidapi.com/spoonacular/api/recipe-food-nutrition))

*Testing Framework*

- jest
## Dev Setup

Each team member will need to do this on their local machine.

### Create a postgres db

Create a user in postgres named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user app2019_development
```

*For more details see this [installing postgres guide](https://github.com/CUNYTechPrep/ctp2019/blob/master/guides/installing-postgresql.md)*

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

*Clone* this app, then:

```bash
# api-backend terminal 1
cp .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
cp .env
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

## Test

### Running the Unit Test

Make sure you have the necessary dependencies
```
npm install
```
Testing controllers
```
cd test
npm test controller
```
Testing models
```
cd test
npm test models
```
For more details on how to use JEST API see this [JEST API](https://jestjs.io/docs/en/getting-started)

