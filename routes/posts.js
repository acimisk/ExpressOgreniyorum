import express from 'express';
const router = express.Router();

let posts = [
    {id:1, title: 'Post1'},
    {id:2, title: 'Post2'},
    {id:3, title: 'Post3'},
];

// Get all posts
router.get('/', (req,res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        return res
        .status(200).json(posts.slice(0,limit));
    }   
        res.status(200).json(posts);

    res.json(posts);
});

// Get single post
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);

    if(!post) {
        return res
        .status(404).json({msg: `A post witht the id of ${id} was not found`});    
    } 
        res.status(200).json(post);
});

// Create new post
router.post('/', (req,res) => {
    const newPost = {
        id: posts.length +1,
        title: req.body.title
    };

    if(!newPost.title) {
        return res.status(400).json({message: 'Please include a title'});
    }
    posts.push(newPost);
    res.status(201).json(posts);
});



export default router;