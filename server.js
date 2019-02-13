const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
	res.sendFile('index.html')
})

const PORT = process.env.PORT || 80
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`)
})