let listGuache=[]
let listAcrilico=[]
let listOleo=[]


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
// função para aacessar links:
function acessarLinks(){
  


}




botaoPesquisar.addEventListener('click', ()=>{
    let item =pesquisaProduto();
    produtos.innerHTML=''
})


// //PESQUISA PRODUTO
// function pesquisaProduto(){
//     let nomeProduto= pesquisa.value

//     for(let i=0; i<produtosPintura.length;i++){
//         if(produtosPintura[i].nameItem==nomeProduto){
//             return produtosPintura[i];        }

//     }
    
// }
// //** let botoesProduto= document.querySelectorAll()
// for(let i=0; i<botoesProduto.length;i++){
//   let botao= botoesProdutos[i];
//   botao.addEventListener('click',function(e)){
//     let idElemento=e.target.id;
//     let id=parseInt(idElemento.substring())
//     let pintura=procuraProduto(id)

//   }
// }

// function procuraProduto(id){
//   for(let i=0; i<produtosPintura.length;i++){
//     let pintura=produtosPintura[i];
//     if(pintura.id==id){
//       return pintura
//     }
//   }
//   return "Pintura não encontrada"


function finalizacao(carrinho){
  let somaProdutos=0
    for(let i=0; i<carrinho.length;i++){
      
      somaProdutos+=carrinhoItens[i].value
      
    }
   
    
  return somaProdutos

  
  }


  // function removequant(carrinho){
  //   for(let i=0; i<carrinho.length;i++){
  //     carrinhoItens[i].value.splice(i,1)

  //   }
    
    
    
    
    
  // }

  
  
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
        let textoProduto=document.createElement("p")
       let botaoRemover=document.createElement("button")
        let precoProduto = document.createElement('p')
        imagemProduto.classList.add("classeImagemCarrinho")
        carrinhoItens.push(produtosPintura[i])
        let quant= document.querySelector('.quant')
        let valorTotal=document.querySelector('.valorTotal')
        quant.innerText=`Quantidade: ${carrinhoItens.length}`
        console.log(finalizacao(carrinhoItens))
        let soma=finalizacao(carrinhoItens)
        valorTotal.innerHTML=`Valor total: ${soma}`
       
        console.log(produtosPintura[i])
        
        botaoRemover.innerText="Remover produto"
        botaoRemover.addEventListener('click', function(){
         
         
         quant.innerText=`Quantidade: ${carrinhoItens.length--}`
         liProduto.remove()
          
         valorTotal.innerText= `Valor total: ${soma--}`

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



//proximo passo:  criar  botão no carrinho, fazer evento de adicionar item, 
//COMPRAS






