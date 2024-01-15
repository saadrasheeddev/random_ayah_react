const fs = require('fs');
const csv = require('csv-parser');

const get_random_ayah = (req, res) => {
    // Read the CSV file
    const ayah_list = [];
    fs.createReadStream('ayah_list.csv')
        .pipe(csv())
        .on('data', (row) => {
            ayah_list.push(row.ayah); // Assuming 'ayah' is the column name in your CSV file
        })
        .on('end', () => {
            // Select a random ayah
            const random_number = Math.floor(Math.random() * ayah_list.length);
            const selected_ayah = ayah_list[random_number].split(" ");
            
            res.json({ selected_ayah });
        });
};

export default get_random_ayah;
