const express = require('express');
const { exec } = require('child_process');
const multer = require('multer');
const path = require('path');
const { ftruncate } = require('fs');

const app = express();
const port = 3000;

// Set up multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Change '/' to desired subdirectory
        cb(null, path.join(__dirname, '/'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/image', upload.single('image'), (req, res) => {
    console.log(req.file); // Logs the details of the uploaded file
    res.send('Image received!');
});

app.get('/start_search', (req, res) => {
    exec('sshpass -p "123" ssh unitree@192.168.123.13 "bash ~/Desktop/start_search.sh"', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.send(`Error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.send(`stdout: ${stdout}\nstderr: ${stderr}`);
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
