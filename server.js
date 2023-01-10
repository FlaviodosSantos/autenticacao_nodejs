const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt')

app.use(express.json())

const users = []

// rota publica
app.get('/', (req, res) => {
    res.send('Hello World!')    
})

// exibe usuarios
app.get('/users', (req, res) => {    
    res.json(users)    
})
// adiciona usuarios
app.post('/users', async (req, res) => {    
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send('User created')
        //res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }    
})

// login
app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})