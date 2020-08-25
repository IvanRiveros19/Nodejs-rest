function bodyParser(request) {
    return new Promise((resolve, reject) => {
        let totalData = '';
        request
            .on('data', chunk => {
                totalData += chunk;
            })
            .on('end', () =>{
                //body variable propia as
                request.body = JSON.parse(totalData);
                resolve();
            })
            .on('error', err => {
                console.log(err);
                reject();
            })
    })
}

module.exports = { bodyParser };