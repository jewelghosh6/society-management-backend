const cors = require('cors');
const { server, app } = require('./server');
const flatRoutes = require('./routes/flatRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/conversationRoutes');


const { isAdmin, isAdminOrStaff } = require('./middlewares/isAdmin');
const authenticateUser = require('./middlewares/authenticateToken');
const userRoutes = require('./routes/userRoutes');
const rolesRoutes = require('./routes/rolesRoutes')
const permissionRoutes = require('./routes/permissionRoutes');
const multer = require('multer');
const cloudinary = require('./utils/cloudinaryConfig')
const fs = require('fs')

// const { OAuth2Client } = require('google-auth-library');
require("dotenv").config();

app.use('/api/auth', authRoutes);

app.use('/api/user', userRoutes)

app.use('/api/roles', rolesRoutes)

app.use('/api/permissions', permissionRoutes)

app.use('/api/flats', authenticateUser, flatRoutes);

app.use('/api/chat', authenticateUser, chatRoutes);

app.use('/api/visitor', authenticateUser, isAdminOrStaff, visitorRoutes);

app.use('/api/vehicle', authenticateUser, isAdminOrStaff, vehicleRoutes);

app.get("/api", (req, res) => {
    res.send('Welcome to Society Management');
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.post('/api/upload', upload.single('image'), (req, res) => {
    cloudinary.uploader.upload(req.file.path, (error, result) => {
        if (error) {
            console.error('Error uploading to Cloudinary:', error);
            res.status(500).send('Upload error');
        } else {
            fs.unlinkSync(req.file.path); // Delete the local file
            // console.log({ result });
            const imageUrl = result.secure_url;
            // io.emit('new_image', imageUrl);
            res.status(200).json({ imageUrl });
        }
    });
});

// app.get('/authorize', (req, res) => {
//     console.log(process.env);
//     const oauth2Client = createOAuth2Client(); // Function defined below
//     const authorizeUrl = oauth2Client.generateAuthUrl({
//         access_type: 'offline', // Request a refresh token
//         scope: ['https://www.googleapis.com/auth/gmail.send'], // Gmail send scope
//     });
//     res.redirect(authorizeUrl);
// });


// function createOAuth2Client() {
//     return new OAuth2Client(
//         process.env.client_id,
//         process.env.client_secret,
//         'http://localhost:3001/callback' // Placeholder redirect URI (replace with your actual redirect URI)
//     );

// }
// app.get('/callback', async (req, res) => {
//     const oauth2Client = createOAuth2Client();
//     const code = req.query.code; // Extract authorization code from query parameter

//     try {
//         const { tokens } = await oauth2Client.getToken(code);
//         // Store the refresh token securely (e.g., database)
//         console.log('Refresh token:', tokens.refresh_token);
//         res.send('Authorization successful!'); // Inform user about successful authorization
//     } catch (error) {
//         console.error('Error obtaining token:', error);
//         res.status(500).send('Error during authorization');
//     }
// });

