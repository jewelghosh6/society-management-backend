const cors = require('cors');
const app = require('./server');
const { registerUser, showUsers, updateUser, viewUser, removeUser } = require('./controllers/userController');
const flatRoutes = require('./routes/flatRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const authRoutes = require('./routes/authRoutes');

const { isAdmin, isAdminOrStaff } = require('./middlewares/isAdmin');
const authenticateUser = require('./middlewares/authenticateToken');

app.use(cors({ origin: '*' }));  //This will allow all cross origin request.By-Default app serve only same origin request 

app.use('/api/auth', authRoutes);

app.use('/api/flats', authenticateUser, isAdminOrStaff, flatRoutes);

app.use('/api/visitor', authenticateUser, isAdminOrStaff, visitorRoutes);

app.use('/api/vehicle', authenticateUser, isAdminOrStaff, vehicleRoutes);

app.get("/", (req, res) => {
    res.send('Welcome to Society Management');
});

app.get('/viewUsers', authenticateUser, isAdminOrStaff, (req, res) =>       //To show all users' list //
{
    showUsers(req, res);
});

app.get('/viewUser/:id', authenticateUser, isAdminOrStaff, (req, res) =>     //To show A single User by User Id
{
    viewUser(req, res);
})


app.post('/api/user/register', (req, res) => {     //To Register/Sign-up a User
    registerUser(req, res);
});

app.patch('/updateUser/:id', authenticateUser, isAdmin, (req, res) =>  //For Partially update a User by UserId
{
    updateUser(req, res);
});

app.delete('/deleteUser/:id', authenticateUser, isAdmin, (req, res) => {
    removeUser(req, res);
})

