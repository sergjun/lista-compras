
const mainForm = document.getElementById("main-form")
const gravarBotao = document.getElementById("gravarBotao")
const exibirBotao = document.getElementById("mostrarLista")
const limparBotao = document.getElementById("limparBotao")




gravarBotao.addEventListener ("click", () => gravarItem()) 

mostrarLista.addEventListener ("click", () => exibirLista ())




function gravarItem ()
{

    const numeroItem = document.getElementById("numero-item")
    const nome = document.getElementById("nome")
    const item = document.getElementById ("item")




    const listaObjeto = { 
    "Nome" : nome.value ,   
    "Item" : item.value ,
    "Quantidade": numeroItem.value
 
    }
    const listaString = JSON.stringify(listaObjeto)


    item.value = ""
    numeroItem.value =""

    localStorage.setItem("lista", listaString)

    // console.log(`${nome.value} e ${item.value} ${numeroItem.value} ${listaString}` )
    
}


function exibirLista ()
{
    const listaContainer = document.createElement ('div')
    const nomeLista = document.createElement('p')
    const itemsLista = document.createElement ('p')
    const quantidadeItem = document.createElement ('p')

    listaContainer.setAttribute ('class' ,'listaContainer')

    const stringStorage = localStorage.getItem ("lista")

    const mostrarStorage = JSON.parse(stringStorage)


    nomeLista.textContent = mostrarStorage.Nome
    itemsLista.textContent = mostrarStorage.Item, 
    quantidadeItem.textContent = mostrarStorage.Quantidade
    
    mainForm.appendChild(listaContainer)
 
    listaContainer.appendChild(nomeLista)
    listaContainer.appendChild(itemsLista)
    listaContainer.appendChild(quantidadeItem)

    limparBotao.addEventListener ("click", () => deletarLista ())


    function deletarLista ()
    {

        localStorage.clear()
        listaContainer.style.display = "none"
    }

}



