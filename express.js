const express = require('express')
const app = express()
const port = 3001
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.get('/demo', (req, res) => {
    res.sendFile(__dirname + '/demo.js')
  })

app.get('/home', (req, res) => {
    res.send('<h1>Home</h1><p>Welcome</p>')
  })

  app.get('/contact/:id', (req, res) => {
    res.send('<h1>Contact</h1><p>contact me on:</p>'+ req.params.id)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})