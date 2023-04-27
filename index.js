const express = require("express")
const app = express();
const port = 6001;
const axios = require("axios");
const PORT = process.env.PORT || port;
const request = require('request')
var cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('/', (req , res)=>{
    res.send({'message' : "API conected"})
});

app.get('/api/users', async (req, res) => {
    try {
      const since = req.query.since || 0;
      const response = await axios.get(`https://api.github.com/users?since=${since}`);
      res.status(200).json({
        users: response.data,
        nextLink: response.headers.link
      });
    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
});

app.get('/api/users/:username/details', async (req, res) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${req.params.username}`)
        const { id, login, html_url, created_at } = response.data;
        res.status(200).json({
           id,
           login, 
           html_url, 
           created_at
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

app.get('/api/users/:username/repos', async (req, res) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${req.params.username}/repos`)
        res.status(200).json({
           repositories: response.data.map((repo) => ({ id: repo.id, name: repo.name, html_url: repo.html_url }))
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;