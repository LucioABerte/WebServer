const http = require('http')


const server = http.createServer( (req, res) => {
    
    //res.writeHead(200, {'content-Type': 'application/json'});

    //const persona = {
    //    id: 1,
    //    name: 'lucio'
    //}

    //res.write(JSON.stringify( persona ) )

    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, {'Content-Type': 'application/csv'});

    //res.write('\nID | NOMBRE \n\n')
    //res.write('1,   Fernando \n')
    //res.write('2,   Lucio \n')
    //res.write('3.   Jose \n')
    //res.end();

    res.write('Hola mundo')
    res.end();
})
.listen( 8080 )

console.log('Escuchando en el puerto',8080);