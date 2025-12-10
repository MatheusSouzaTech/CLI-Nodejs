//Importando as biliotecas e recursos necessarios
const axios = require('axios')
const fs = require('fs/promises')
const path = require('path')


//importando api para o codigo e criando o nome do arquivo principal
const URL_API = "https://jsonplaceholder.typicode.com/posts"
const FILE = 'dados.txt'

//Configurando a função de processamento de dados
function processData(posts) {
    const totalPost = posts.length
    let tituloBase = ''

    for (const post of posts) {
        if (post.title.length > tituloBase.length) {
            tituloBase = post.title
        }
    }

    const dados = ` Resumo do processamento\n 
    Total de posts: ${totalPost}\n
    Titulo mais Logo: ${tituloBase}`

    return dados
}

async function main() {
    try {
        //configurando o consumo da API
        const response = await axios.get(URL_API)
        const posts = response.data

        //exibição no console
        console.log("Dados recebidos")
        console.log(posts[0])
        console.log(`\nRequisição realizada com sucesso! Total de itens: ${posts.length}`) 

        //Processamento dos Dados
        const summaryContent = processData(posts)

        //Salvamento em Arquivo
        const outputPath = path.join(__dirname, '..', 'data', FILE)

        //Garantir que a pasta 'data' exista
        await fs.mkdir(path.dirname(outputPath), { recursive: true })

        // Salva o resumo
        await fs.writeFile(outputPath, summaryContent, 'utf8')

        //Mensagem de sucesso
        console.log(`\n✅ Sucesso: O resumo foi salvo em ${outputPath}`)
    }
    catch (error) {
        console.error('\nErro ao executar a CLI:', error.message)
        if (error.response) {
            console.error('Status HTTP:', error.response.status)
        }
    }
}

main()

