const Joi = require("joi");
const users = require("../database/users");

// GET all users
const getUsers = (req, res) => {
    res.json(users);
};

// GET user by ID
const getUsersID = (req, res) => {
    const userId = users.find(user => user.id === parseInt(req.params.id));
    if (!userId) {
        return res.status(404).send('Ushbu Idga ega bo\'lgan foydalanivchi topilmadi!');
    }
    res.send(userId);
};

// POST create user
const createUsers = (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
};

// PUT update user
const updateUsers = (req, res) => {
    const userId = users.find(user => user.id === parseInt(req.params.id));
    if (!userId) {
        return res.status(404).send('Ushbu Idga ega bo\'lgan foydalanivchi topilmadi!');
    }
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    userId.name = req.body.name;
    res.send(userId);
};

// DELETE user
const deleteUsers = (req, res) => {
    const userId = users.find(user => user.id === parseInt(req.params.id));
    if (!userId) {
        return res.status(404).send('Ushbu Idga ega bo\'lgan foydalanivchi topilmadi!');
    }
    const index = users.indexOf(userId);
    users.splice(index, 1);
    res.send(userId);
};

// Validate user
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(user);
}

module.exports = {
    getUsers,
    getUsersID,
    createUsers,
    updateUsers,
    deleteUsers
};