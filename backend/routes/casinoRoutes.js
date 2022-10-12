const express = require('express')
const router = express.Router()
const {
    getCasinos, 
    setCasino, 
    updateCasino, 
    deleteCasino,
} = require('../controllers/casinoController')

router.get('/', getCasinos)

router.post('/', setCasino)

router.put('/:id', updateCasino)

router.delete('/:id', deleteCasino)


/* router.post('/',(req, res) => {
res.status(200).json({ message: 'Set casino'})
})
router.put('/:id',(req, res) => {
res.status(200).json({ message: `Update casino ${req.params.id}`})
})
router.delete('/:id',(req, res) => {
    res.status(200).json({ message: `Delete casino ${req.params.id}`})
}) */

module.exports = router