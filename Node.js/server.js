const http = require("http")  //trazer um modolo nativo dentro de outro arquivo
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=>{ //craindo um servidor
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Ola Mundo <br/> Meu Primeiro Script')

})

server.listen(port, host, ()=>{
    console.log(`server running at http://${host}:${port}`)
})