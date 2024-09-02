const express = require('express')
const router = express.Router()
const Model = require('../Models/Model.js')


router.get('/', async(req,res) => 
{
    try
    {
           const Controller1 = await Model.find()
           res.json(Controller1)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const Controller1 = await Model.findById(req.params.id)
           res.json(Controller1)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const Controller1 = new Model
   ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        rollno: req.body.rollno,
        year: req.body.year
    })

    try
   {
        const a1 =  await Controller1.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const Controller1 = await Model.findById(req.params.id) 
        Controller1.sub = req.body.sub
        const a1 = await Controller1.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

module.exports = router
