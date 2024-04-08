const fs = require('fs');

const path = 'path/to/your/file.json'; // Update the path to your file

// Function to generate random values
function generateRandomData() {

return {
        temp: Math.random() < 0.1 ? 60.78408551185392 : 28 + Math.random() * 5 - 2.5,
        CO: 80 + Math.random() * 5 - 2.5,
        AirQuality: 80 + Math.random() * 5 - 2.5,
        Date: new Date().toISOString().slice(0, 10),
        Time: new Date().toISOString().slice(11, 19)
    };
}

// Function to update the file
function updateFile() {
    fs.writeFile("/home/ojama/Documents/datamonitor/server/data.json", JSON.stringify(generateRandomData()), (err) => {
        if (err) throw err;
        console.log('File updated');
    });
}

// Call updateFile once immediately
updateFile();

// Update file once per second
setInterval(updateFile, 1000)