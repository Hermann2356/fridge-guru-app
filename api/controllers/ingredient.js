const express = require('express').Router();
const router = express.Router();
const { Ingredient };


router.get('/:id', (req,res) => {

    Ingredient.findAll({
    })
        .then(Ingredient => res.json(Ingredient));
});

router.put('/:id',
    (req, res) => {
        const { id } = req.params;
        Post.findByPk(id)
            .then(post => {
                if(!post) {
                    return res.sendStatus(404);
                }

                post.content = req.body.content;
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


router.delete('/:id',
    (req, res) => {
        const { id } = req.params;
        Post.findByPk(id)
            .then(post => {
                if(!post) {
                    return res.sendStatus(404);
                }

                post.destroy();
                res.sendStatus(204);
            });
    }
);


module.exports = router;