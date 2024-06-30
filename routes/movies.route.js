import express from "express"
const router = express.Router();

router.get('/', (req,res) => {
   res.send("Get all movies")
})
router.post('/', (req,res) => {
    res.send("create all movies")
})
router.put('/:id', (req,res) => {
    res.send("update all movies")
})
router.delete('/:id', (req,res) => {
    res.send("delete all movies")
})

export default router;