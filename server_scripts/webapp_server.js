const express = require('express');
const { exec } = require('child_process');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const upload = multer(); // Use multer's default in-memory storage

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

    // Temporary local path of the uploaded file
    const localFilePath = req.file.path;

    // Remote path where the file should be stored
    const remoteFilePath = '/home/unitree/Unitree/sdk/UnitreecameraSDK-main/face_recognizer/new_appointment_faces/' + req.file.originalname;
    const command = `sshpass -p '123' scp ${localFilePath} unitree@192.168.123.13:${remoteFilePath}`;

    // Run the scp command
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.send(`Error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        // Delete the local file after successful transfer
        fs.unlink(localFilePath, (err) => {
            if (err) {
                console.error(`Error deleting local file: ${err}`);
            } else {
                console.log(`Local file deleted: ${localFilePath}`);
            }
        });
    });

    res.send('Image received and transferred!');
});

app.get('/start_search', (req, res) => {
    exec('sshpass -p "123" ssh unitree@192.168.123.13 "sh /home/unitree/Desktop/start_search.sh"', (error, stdout, stderr) => {
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
