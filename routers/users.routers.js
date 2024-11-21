const { Router } = require("express");
const { 
    getUsers,
    getUsersID,
    createUsers,
    updateUsers, 
    deleteUsers
} = require("../controllers/user.controller");

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersID);
router.post('/users/create', createUsers);
router.put('/users/update/:id', updateUsers);
router.delete('/users/delete/:id', deleteUsers);

module.exports = router;
