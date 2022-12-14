

const produtosPintura = [
    {
      id: 1,
      img: "../img/acrilico1.png",
      nameItem: "Sonhadora",
      description:
        "Decore seu ambiente com essa tela pintada em acrílico de uma jovem sonhadora!",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["acrilico"],
    },
    {
      id: 2,
      img: "../img/acrilico2.png",
      nameItem: "Contemplando",
      description:
      "Decore seu ambiente com essa tela pintada em acrílico de uma moça contemplando...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["acrilico"],
    },
    {
      id: 3,
      img: "../img/guache1.png",
      nameItem: "Sonhando",
      description:
      "Decore seu ambiente com essa tela pintada em guache retratando alguém sonhando.",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["guache"],
    },
    {
      id: 4,
      img: "../img/guache2.png",
      nameItem: "Lysis",
      description:
        "Quadro de Lysis em tinta guache.",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["guache"],
    },
    {
      id: 5,
      img: "../img/oleo1.png",
      nameItem: "Banho de tinta",
      description:
        "Sua casa vai ganhar muita cor com esse quadro inspirado num cachorrinho a óleo!",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["oleo"],
    },
    {
      id: 6,
      img: "../img/oleo2.png",
      nameItem: "Curiosodade",
      description:
      "Essa pintura a óleo nos revela uma das características mais conhecida dos gatos: a curiosidade!",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: ["oleo"],
    },
  ];

  let quant= document.querySelector('.quant')
  let valorTotal=document.querySelector('.valorTotal')

let body= document.querySelector('body')
let main= document.createElement('main')
let section=document.createElement('section')
let lI= document.createElement('li')
let div=document.createElement('div')
 
let carrinhoVazio=document.createElement('div')
let produtos = document.querySelector('.amostrasPinturas')
let pesquisa= document.querySelector('#pesquisa')
let botaoPesquisar= document.querySelector('#pesquisar')
let corpoCarrinho=document.createElement('div')
let corpoTotalSoma=document.createElement('li')
let linkTodos=document.createElement('a')
let linkGuache=document.createElement('a')
let linkAcrilico=document.createElement('a')
let linkOleo=document.createElement('a')
let carrinhoItens=[]



// soma e contador

function somaEcontador(){
  let somaProdutos=0
  let totalItens=0
  for(let i=0; i<carrinhoItens.length;i++){
    somaProdutos+=carrinhoItens[i].value
    totalItens+=1;
   
  }
  quant.innerText=`Quantidade: ${totalItens}`
  valorTotal.innerHTML=`Valor total: ${somaProdutos}`
}
function SubtrairEcontador(){
  
 
  
}









botaoPesquisar.addEventListener('click', ()=>{
    let item =pesquisaProduto();
    produtos.innerHTML=''
})





//var soma=0
          //var totalItens=0
          //carrinhoItens.splice(i,1)
          //for(let i=0;carrinhoItens.length;i++){
            //soma+=carrinhoItens[i]
            //totalItens++
           


function finalizacao(carrinhoItens){
  let somaProdutos=0
  let totalItens=0
    for(let i=0; i<carrinhoItens.length;i++){
      somaProdutos+=carrinhoItens[i].value
      totalItens++
      carrinhoItens.splice(i,1)
      
    }
      quant.innerText=`Quantidade: ${totalItens}`
      valorTotal.innerHTML=`Valor total: ${somaProdutos}`
   
    
  return 

  
  }


  
  function totalquant(x){
    let quant= document.querySelector('.quant')
    let valorTotal=document.querySelector('.valorTotal')
    quant.innerText=`Quantidade: ${carrinhoItens.length}`
    console.log(finalizacao(carrinhoItens))
    let soma=finalizacao(carrinhoItens)
    valorTotal.innerHTML=`Valor total: ${soma}`
    
  }

 
//GERAR CARD
function gerarCard(){
    for(let i=0; i<produtosPintura.length;i++){
        //criei as coisas
        
        let li = document.createElement('li');
        li.classList.add('card-pintura');
        let imagem= document.createElement('img');
        let titulo = document.createElement('span')
        let descricao=document.createElement('p')
        let tags=document.createElement('p')
        let preco= document.createElement('p')
        let ddCart= document.createElement('button')
    //valor para as coisas
        imagem.src=produtosPintura[i]
        .img
        titulo.innerText=produtosPintura[i]
        .nameItem
        descricao.innerText=produtosPintura[i]
        .description
        preco.innerText= `R$ ${produtosPintura[i].value.toFixed(2)} `
        tags.innerHTML=`<span class="tagProduto">${produtosPintura[i].tag}</span>`
        ddCart.innerText=produtosPintura[i].addCart

    // nomeando classes
        tags.classList.add("tagClass")
        imagem.classList.add("imagemClass")
        titulo.classList.add("tituloClass")
        descricao.classList.add("descricaoClass")
        preco.classList.add("precoClass")
        li.classList.add("liClass")
        ddCart.classList.add('AddCartClass')
        corpoTotalSoma.classList.add('AddcorpoTotalSomaClass')

      //adicionando eventos
      ddCart.addEventListener('click',function(){
       
        let compras = document.querySelector("#corpoCarrinhoCompras")
        let liProduto=document.createElement('li')
        let imagemProduto=document.createElement("img")
        // let divNomePrecoBotao = document.createElement('div')
        let textoProduto=document.createElement("p")
       let botaoRemover=document.createElement("button")
        let precoProduto = document.createElement('p')
        imagemProduto.classList.add("classeImagemCarrinho")
        carrinhoItens.push(produtosPintura[i])
        somaEcontador()
        console.log(carrinhoItens)
        let quant= document.querySelector('.quant')
        let valorTotal=document.querySelector('.valorTotal')
      
        
        botaoRemover.innerText="Remover produto"
        botaoRemover.addEventListener('click', function(){
   
      
          const indexProdutoRemovido = carrinhoItens.findIndex((item)=>{
            return item.id == produtosPintura[i].id

          })
          carrinhoItens.splice(indexProdutoRemovido,1)
          somaEcontador()
 
         
       
         liProduto.remove()
          
        

        })

        imagemProduto.src=produtosPintura[i].img
        textoProduto.innerText= produtosPintura[i].nameItem
  
        precoProduto.innerText=produtosPintura[i].value
        liProduto.append(imagemProduto,textoProduto,precoProduto,botaoRemover)
        compras.append(liProduto)
      })
    // inserindo na li
       
        li.append(imagem,tags,titulo,descricao,preco,ddCart);
       
        produtos.append(li)

       
    }
    

}
gerarCard()





