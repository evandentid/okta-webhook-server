const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))


app.post('/hooks', (req, res) => {
    console.log('Got a hook!', req.body)
    console.log('Headers: ', req.headers)
    console.log('Events: ', JSON.stringify(req.body.data.events))
    res.send()
})

app.get('/hooks', (req, res) => {
    console.log('Verifyng new hook!')
    const headers = req.headers
    const challenge = headers['x-okta-verification-challenge']
    res.json({ "verification" : challenge }).send()
})


app.listen(port, () => console.log(`Okta app listening on port ${port}!`))
