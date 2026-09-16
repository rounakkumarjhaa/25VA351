const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('sample.txt', 'welcome to full stack development');
        console.log('file created successfully!');
    }
    catch (err) {
        console.log('error creating file:', err);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile('sample.txt', 'utf8');
        console.log('file content:');
        console.log(data);
    }
    catch (err) {
        console.log('error reading file:', err);
    }
}

async function appendFile() {
    try {
        await fs.appendFile('sample.txt', '\nsemester:3');
        console.log('3. File updated successfully');
    }
    catch (err) {
        console.log('error appending file:', err);
    }
}

async function updatedReadFile() {
    try {
        const data = await fs.readFile('sample.txt', 'utf8');
        console.log('updated file content:');
        console.log(data);
    }
    catch (err) {
        console.log('error reading file:', err);
    }
}

async function main() {
    await writeFile();
    await readFile();
    await appendFile();
    await updatedReadFile();
}

main();