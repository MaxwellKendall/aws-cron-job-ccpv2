const axios = require('axios');

const url = 'https://webhook.gatsbyjs.com/hooks/data_source/publish/3c1fe151-3dc5-4cb1-95f6-3cf9e65c95dc';

const buildCCp = () => new Promise((resolve, reject) => {
    axios.post(url)
        .then(() => {
            resolve();
        })
        .catch((e) => reject(e))
});

buildCCp()
    .then((data) => {
        console.log("datazzz", data);
    })
    .catch((e) => {
        console.log('errorzzz', e);
    });

console.log("okay?");
