function saveObjectToJSON(obj, fileName) {
    let json = JSON.stringify(obj);
    fs.writeFile(`${fileName}.json`, json, 'utf8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`The file ${fileName}.json was saved in the current directory!`);
        }
    });
}

module.exports = saveObjectToJSON