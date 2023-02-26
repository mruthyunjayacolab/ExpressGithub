const express = require('express');
const router=express.Router()

router.set('view engine', 'ejs')
router.use(express.static('public'))

let admin=[{
    name:"mru",
    id:1
},
{
    name:"amu",
    id:2
},
{
    name:"mr",
    id:4
}
]

let book=[{
    name:"React",
    id:1
},{
    name:"css",
    id:2
},
{
    name:"html",
    id:3
}]


router.get('/', (req, res) => {
    res.render('home', { admin,book})
})

module.exports=router;
