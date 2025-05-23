const express = require('express');
const path = require ('path');
const app = express();

const PORT = process.env.PORT;
// setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id:1, title: 'Post1'},
    {id:2, title: 'Post2'},
    {id:3, title: 'Post3'},
];

// Get all posts
app.get('/api/posts', (req,res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0,limit));
    }   else {
        res.status(200).json(posts);
    }

    res.json(posts);
})

// Get single post
app.get('/api/posts/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);

    if(!post) {
        res.status(404).json({msg: `A post witht the id of ${id} was not found`});    
    } else {
        res.status(200).json(post);
    }
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
