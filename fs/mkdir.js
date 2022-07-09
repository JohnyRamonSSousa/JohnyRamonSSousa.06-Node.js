const fs = require('fs')

const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){

    dir.forEach((item)=>{

        fs.mkdir(`projeto/assets/${item}`,{recursive: true}, (err)=>{ //craindo pastas

            if(err) throw err

            console.log('Diretório criado com sucesso:', item)
        })

    })


}

make(assets)