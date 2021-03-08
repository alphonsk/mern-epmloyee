const router = require('express').Router();
const employeeModel = require('../models/employeeModel')


// get all
router.get('/', async (req, res) => {
    // res.send('hello from route get all /');

    // const info = await employeeModel.find({});
    // await info;
    // res.json(info); 

    employeeModel.find()
        .then(info => res.json(info))
        .catch(err => res.json(err))
});


// get one
router.get('/employee/:id', async (req, res) => {  
    // try {
    //      const info = await employeeModel.findById(req.params.id);
    //     await info;
    //     res.json(info)
    // } catch (error) {
    //     res.json(error)
    // }

    employeeModel.findById(req.params.id,
        (error, docs) => {
            if (error) {
                res.json(`No user by these id; ${req.params.id}`);
            } else {
                res.json(docs);
            }
        });

});


// add 
router.post('/employee', async (req, res) => {
    // res.send('hello from route add /');
    const { name, occupation, age } = req.body;
    const newInfo = new employeeModel({
        name,
        occupation,
        age
    })

    await newInfo.save();
    res.json({ msg: " info added" })
});


// update
router.put('/employee/:id', (req, res) => { 
    var employee_id = req.params.id
    // console.log(" from update route 1 ", employee_id);
    // console.log(" from update route ", req.body);
 
    const { name, occupation, age, id } = req.body;
 
    employeeModel.findByIdAndUpdate(employee_id,
        {name, occupation, age, id},
        (error, docs) => {
            if (error) {
                res.json('Did not delete user');
            } else {
                res.json('Delete user');
            }
        }); 
});


// delete
router.delete('/employee/:id', (req, res) => {  
    employeeModel.findByIdAndDelete(req.params.id,
        (error, docs) => {
            if (error) {
                res.json('Did not delete user');
            } else {
                res.json('Delete user');
            }
        }); 
});

// error
router.get('/employee', (req, res) => {
    res.send('hello from route error /');
});



//
module.exports = router;