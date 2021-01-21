const { default: axios } = require('axios')
const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => {
        res.send(response.data)
    })
})

app.listen(3001, () => {
    console.log("we running")
})