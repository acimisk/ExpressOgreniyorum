const express = require('express');
const path = require ('path');
const app = express();

// setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id:1, title: 'Post1'},
    {id:2, title: 'Post2'},
    {id:3, title: 'Post3'},
];

app.get('/api/posts', (req,res) => {
    res.json(posts);
})

app.listen(8000, () => console.log(`Server is running on port 8000`));
