const fs = require ('fs')
path = './logs/logall.txt'


function logApi (req, res, type, reason){
    console.log(req)
    console.log(!fs.existsSync(path))
    if (!fs.existsSync(path)){
        console.log("If-Abfrage")
        fs.writeFile(path, "created logging file", err => {
            if(err){
                console.log(err)
            }
        })
    }
    switch(type){
        case 'registration':
            switch (reason){
                case '0':
                    var content = '\n' +  Date.now() + " registration " + req + " " + res +  " Worked";
                    fs.appendFile(path, content, err => {
                    if (err) {
                        console.error(err);
                    }
             });
             break;
             case '1':
                var content = '\n' +  Date.now() + " registration " + req + " " + res +  " Failed due to an existing User with this Username";
                    fs.appendFile(path, content, err => {
                    if (err) {
                        console.error(err);
                    }
                });
                break;
            default:
                console.log("Wrong reason")
            }
        break
        default: 
        console.log("Wrong service input")
        
}
}

module.exports = {logApi}