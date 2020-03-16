const express = require('express')
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps')

const router = express.Router()

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

module.exports = router




// router.get('/', (req, res) => {
    // res.send({name: 'Pat'})
    // res.json({name: 'Pat'})
    // res.sendStatus(400)
    // res.status(400).json({success: false})
//     res.status(200).json({ success: true, msg: "show all bootcamps" })
// })