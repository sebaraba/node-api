const express = require('express');

const router = express.Router()

const ArtModel = require('../data/ArtModel')


//Post Method
router.post('/create', async (req, res) => {
    const data = new ArtModel({
        title: req.body.title,
        description: req.body.description,
        createDate: new Date(Date.now())
    })

    try {
        const response = await data.save();
        res.send('Save data: ' + response);
    } catch (error) {
        res.send('Error saving art: ' +  error)
    }


})

//Get all Method
router.get('/art', async (req, res) => {
    try {
        const response = await ArtModel.find();
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Get by ID Method
router.get('/art/:id', async (req, res) => {
    try {
        const response = await ArtModel.findById(req.params.id);
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Put [update] by ID Method
router.put('/art/:id', async (req, res) => {
    try {
        const response = await ArtModel.updateOne(req.params.id);
        res.status(204).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Patch [update] by ID Method
router.get('/art/:id', async (req, res) => {
    try {
        const response = await ArtModel.updateOne(req.params.id);
        res.status(204).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Delete by ID Method
router.delete('/art/:id', async (req, res) => {
    try {
        const response = await ArtModel.deleteOne(req.params.id);
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;
