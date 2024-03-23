const cors=require('cors');
const app=require('./server');
const { registerUser, showUsers, updateUser, viewUser, removeUser }=require('./controllers/userController');
const flatRoutes=require('./routes/flatRoutes');
const visitorRoutes=require('./routes/visitorRoutes');
const vehicleRoutes=require('./routes/vehicleRoutes');
const authRoutes=require('./routes/authRoutes');

const { isAdmin, isAdminOrStaff }=require('./middlewares/isAdmin');
const authenticateUser=require('./middlewares/authenticateToken');

app.use(cors({ origin:'*' }));  //This will allow all cross origin request.By-Default app serve only same origin request 

app.use('/',authRoutes);

app.use('/flats',authenticateUser,isAdminOrStaff,flatRoutes);

app.use('/visitor',authenticateUser,isAdminOrStaff,visitorRoutes);

app.use('/vehicle',authenticateUser,isAdminOrStaff,vehicleRoutes);

app.get("/",authenticateUser,(req,res)=>{
    res.send('Home Page');
});

app.get('/viewUsers',authenticateUser,isAdminOrStaff, (req,res)=>       //To show all users' list //
{
    showUsers(req,res);
});

app.get('/viewUser/:id',authenticateUser,isAdminOrStaff,(req,res)=>     //To show A single User by User Id
{
    viewUser(req,res);    
})

// app.get('/registerUser', (req,res)=>{
//     res.send('Show Register Form');
//     //res.render('registerUser.ejs');
// });

app.post('/registerUser', (req,res)=>{     //To Register/Sign-up a User
    registerUser(req,res);
});

app.patch('/updateUser/:id',authenticateUser,isAdmin,(req,res)=>  //For Partially update a User by UserId
{
    updateUser(req,res);
});

app.delete('/deleteUser/:id',authenticateUser,isAdmin,(req,res)=>{
    removeUser(req,res);
})

