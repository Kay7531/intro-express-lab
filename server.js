// import modules

import express from 'express'

import { calories } from './data/nutrition-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)
// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes
app.get('/menu', function(req, res) {
    res.render('menu')
})

app.get('/nutrition', function(req, res) {
    res.render('nutrition/index',{
        calories: calories
    })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})