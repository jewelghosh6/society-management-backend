const cors = require('cors');
const app = require('./server');
const flatRoutes = require('./routes/flatRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const authRoutes = require('./routes/authRoutes');

const { isAdmin, isAdminOrStaff } = require('./middlewares/isAdmin');
const authenticateUser = require('./middlewares/authenticateToken');
const userRoutes = require('./routes/userRoutes');

app.use(cors({ origin: '*' }));  //This will allow all cross origin request.By-Default app serve only same origin request 

app.use('/api/auth', authRoutes);

app.use('/api/user', userRoutes)

app.use('/api/flats', authenticateUser, isAdminOrStaff, flatRoutes);

app.use('/api/visitor', authenticateUser, isAdminOrStaff, visitorRoutes);

app.use('/api/vehicle', authenticateUser, isAdminOrStaff, vehicleRoutes);

app.get("/api", (req, res) => {
    res.send('Welcome to Society Management');
});

