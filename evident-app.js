const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))


app.post('/hooks', (req, res) => {
    console.log('Got a hook!', req.body)
    res.send()
})

app.get('/hooks/verify', (req, res) => {
    console.log('Verify hook!')
    const headers = req.headers
    console.log('headers: ', headers)
    const challenge = headers['x-okta-verification-challenge']
    console.log('challenge: ', challenge)
    res.json({ "verification" : challenge }).send()
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))c