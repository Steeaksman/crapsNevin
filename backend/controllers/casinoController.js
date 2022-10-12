const asyncHandler = require('express-async-handler') 

// @desc    Get casinos
// @route   GET /api/casinos
// @access  Private
 const getCasinos = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get casinos'})
 })

// @desc    Set casino
// @route   POST /api/casinos
// @access  Private
 const setCasino = asyncHandler(async (req, res) => {   
    console.log(req.body)
    res.status(200).json({ message: 'Set casino'})
 })

// @desc    Update casinos
// @route   PUT /api/casinos/:id
// @access  Private
 const updateCasino = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update casino ${req.params.id}`})
 })

// @desc   Delete casinos
// @route   DELETE /api/casinos
// @access  Private
 const deleteCasino = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete casino ${req.params.id}`})
 })

 
 
module.exports = {
    getCasinos,
    setCasino,
    updateCasino,
    deleteCasino,
  }