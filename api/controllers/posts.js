const express = require('express');
const router = express.Router();
const db = require('../models');
// const passport = require('../middlewares/authentication');
const {Post} = db;

router.get('/:userId', (req, res) => {

    const { userId } = req.params;
    Post.findAll({where:{userId: userId}})
        .then(posts => res.json(posts));
});


router.post('/', (req, res) => {
        let {postImage, caption, likes, dislikes, userId} = req.body;
        Post.max('id')
            .then(lastPk => {
                const id = lastPk + 1;

                Post.create({id, postImage, caption, likes, dislikes, userId})
                    .then(post => {
                        res.status(201).json(post);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            })
    }
);


router.get('/post/:postId', (req, res) => {

    const { postId } = req.params;
    Post.findByPk(postId)
        .then(post => {
            if (!post) {
                return res.sendStatus(404);
            }

            res.json(post);
        });
});


router.put('/:postId', (req, res) => {
        const { postId } = req.params;
        Post.findByPk(postId)
            .then(post => {
                if (!post) {
                    return res.sendStatus(404);
                }

                post.postImage = req.body.postImage;
                post.caption = req.body.caption;
                post.likes = req.body.likes;
                post.dislikes = req.body.dislikes;

                post.save()
                    .then(post => {
                        res.json(post);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:postId', (req, res) => {
        const { postId } = req.params;
        Post.findByPk(postId)
            .then(post => {
                if (!post) {
                    return res.sendStatus(404);
                }

                post.destroy();
                res.sendStatus(204);
            });
    }
);


module.exports = router;