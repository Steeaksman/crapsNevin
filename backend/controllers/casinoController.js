//import the async handler.This  handles exceptions inside of 
//async express routes and passes them to your express error handlers.
const asyncHandler = require('express-async-handler') 
const { globalAgent } = require('http')

//Import the  Model file to the controller------------------------
const Casino = require('../models/casinoModel') 

//The Gets-----------------------------------------------------------
// @desc    Get casinos
// @route   GET /api/casinos
// @access  Private


    const getCasinos = asyncHandler(async (req, res) => {
      const casinos = await Casino.find()
      res.status(200).json(casinos)
    })


//The Posts-------------------------------------------------------

// @desc    Set casino
// @route   POST /api/casinos
// @access  Private
 const setCasino = asyncHandler(async (req, res) => { 
   if (!req.body.casinoName) {
      res.status(400)
      throw new Error('Come on dude adda a text field!')
   }

   const casino = await Casino.create({
      casinoName: req.body.casinoName,
      city: req.body.city,
      country: req.body.country,
      state: req.body.state,
      casinoType: req.body.casinoType,
      webURL: req.body.webURL,
      crapsTable: req.body.crapsTable,
      tripReport: req.body.tripReport,
      tableReport: req.body.tableReport,
   })

   res.status(200).json(casino)
})



 //The Updates---------------------------------------------------------------
// @desc    Update casinos
// @route   PUT /api/casinos/:id
// @access  Private
 const updateCasino = asyncHandler(async (req, res) => {
   const casino = await Casino.findById(req.params.id)

   if (!casino) {
      res.status(400)
      throw new Error('Aint got no gas in it!')
   }
   const updatedCasino = await Casino.findByIdAndUpdate(req.params.id,req.
      body, {
         new: true,
      })

    res.status(200).json(updatedCasino)
 })


 //The Deletes---------------------------------------------------------

// @desc   Delete casinos
// @route   DELETE /api/casinos
// @access  Private
 const deleteCasino = asyncHandler(async (req, res) => {
   const casino = await Casino.findById(req.params.id)

   if (!casino) {
      res.status(400)
      throw new Error('Aint got no gas in it!')
   } 

   await casino.remove()

    res.status(200).json({id: req.params.id})
 })

 //Expose them to the App!!--------------------------------------------
 
module.exports = {
    getCasinos,
    setCasino,
    updateCasino,
    deleteCasino,
  }