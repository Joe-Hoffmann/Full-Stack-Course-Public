/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from "fs";
import qr from 'qr-image';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'website',
            message: 'Enter the website for your QR code: '
        }
    ])
    .then((answer) => {
        var qr_img = qr.image(answer.website);
        qr_img.pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile('URL.txt', answer.website, (err) => {
            if (err) throw err;
            console.log("The file has been saved")
});
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Some kinda error " + error)
        }
        else {
            console.log("Some kinda error " + error)
        }
    });

