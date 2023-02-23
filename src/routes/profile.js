import express from 'express'
import { data, ManagerTable, projectTable } from '../index.js';


const router = express.Router();



router.get('/profile-manager', (req, res) => {
    console.log(req.query)
    const { q = '' } = req.query ?? ''
    const queryLowered = q.toLowerCase()

    const filteredData = ManagerTable.filter((row) => {
        return(
            row.name.toLowerCase().includes(queryLowered) ||
            row.email.toLowerCase().includes(queryLowered) ||
            row.sellers.toLowerCase().includes(queryLowered)
        )
    })
    res.send(200, filteredData)
})
router.get('/profile-table', (req,res ) => {
    console.log(req.query)
    const { q = '' } = req.query ?? ''
    const queryLowered = q.toLowerCase()

    const filteredData = projectTable.filter((row) => {
        return(
            row.name.toLowerCase().includes(queryLowered) ||
            row.date.toLowerCase().includes(queryLowered) ||
            row.leader.toLowerCase().includes(queryLowered)
        )
    })
    res.send(200, filteredData)
})

router.get('/', (req,res) => {
    console.log(req.query)
    const { tab = '' } = req.query ?? ''

    res.send([200,data[tab]]);

})

router.get('/profile-header', (req ,res) => {
    res.send([200, data.profileHeader ])
})
export default router;