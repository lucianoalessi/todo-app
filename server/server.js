// import express from "express";
const express = require('express')

const PORT = process.env.PORT ?? 8000
const app = express()
const pool = require('./db.js')

//get all to do's
app.get('/todos', async (req, res) => {
    const userEmail = 'lucianoalessi9@gmail.com'

    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1' , [userEmail])
        res.json(todos.rows)
    } catch (error) {
        console.log(error)
    }
})


// app.get('/', (req, res) => {
//     res.send('hello!')
// })

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
