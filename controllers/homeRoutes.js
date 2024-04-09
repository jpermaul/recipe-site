const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define a route to render the home page
app.get('/', (req, res) => {
    res.render('home', {
        // You can pass data to your Handlebars template here
        pageTitle: 'Home Page',
        message: 'Welcome to our website!'
    });
});

// Define a route to render the sign-in page
app.get('/signin', (req, res) => {
    res.render('signin', {
        pageTitle: 'Sign In',
        message: "Please enter your username and password.",
        showUsername:true,
        username:'userjoe',
        password:'1234abc',
        errorMessage:'Login failed',
        userNameError:false,
        passwordError:false,

    });
});

// Define a route to render the sign-out page
app.get('/signout', (req, res) => {
    res.render('signout', {
        pageTitle: 'Sign Out',
        message: 'You have successfuly been signed out',
        
    });
});

// Set up your routes for CRUD operations
const recipeRoutes = require('./recipeRoutes');
app.use('/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
