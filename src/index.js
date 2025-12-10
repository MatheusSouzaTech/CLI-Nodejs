//Importando as biliotecas e recursos necessarios
const axios = require('axios')
const fs = require('fs/promises')
const path = require('path')


//importando api para o codigo e criando o nome do arquivo principal
const URL_API = "https://jsonplaceholder.typicode.com/posts"
const FILE = 'dados.txt'

function processData(posts){
    const totalPost = posts.length
    let tituloBase = ''

    for (const posts of post){
        if(posts.title.length > tituloBase.length){
            tituloBase = post.title
        }
    }

    const dados = ` Resumo do processamento\n 
    Total de posts: ${totalPost}\n
    Titulo mais Logo: ${tituloBase}`

    return dados
}

