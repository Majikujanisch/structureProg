const fs = require ('fs')
path = '../logs/logall.txt'




function logApi (req, res, type){
    if (!fs.existsSync(path))
    switch(type){
        case 'registration':
            fs.writeFile(path, content, err => {
                if (err) {
                  console.error(err);
                }
    }
}