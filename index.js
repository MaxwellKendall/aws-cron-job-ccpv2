const client = require('https');

const options = {
    hostname: 'webhook.gatsbyjs.com',
    path: '/hooks/data_source/publish/3c1fe151-3dc5-4cb1-95f6-3cf9e65c95dc',
    method: 'POST',
    port: 443
};

const buildCcp = () => new Promise((resolve, reject) => {
    const req = client.request(options, (res) => {
        res.on('data', (d) => {
            console.log('done', d)
            resolve(d);
        });
    });
    
    req.on('error', (e) => {
        console.log('error', e)
        reject(e)
    });

    req.end();
});


buildCcp()
    .then((data) => {
        console.log("datazzz", data);
    })
    .catch((e) => {
        console.log('errorzzz', e);
    });
