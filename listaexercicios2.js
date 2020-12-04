const pessoas = require('./pessoas.json')

// // exercicio 1

// const totalPais = pessoas.length
// console.log(totalPais)


// //exercicio 2 ////////////////////////////////////////////////////////////////////////////////////////////////////

// let child = (pessoas.map(e => e.children));
// let childTotal = child.map(e => e.length )
// let pais = pessoas.length
// let soma = 0
// for( let i = 0; i < childTotal.length; i++) {
//    soma += childTotal[i]
// }
// console.log(soma + pais)


// //exercicio 3 ////////////////////////////////////////////////////////////////////////////////////////////////////

// // const pais = pessoas.map()
// const country = pessoas.filter(({country}) => country === 'Brazil')
// console.log( country)

// //exercico 4  ////////////////////////////////////////////////////////////////////////////////////////////////////

// const paisOrdemAlfabetica = [];
// let paisOrdemAlfabetica = pessoas.map(e => e.first_name)

// const resultado = paisOrdemAlfabetica.sort()

// console.log(resultado)

//exercicio 5 ////////////////////////////////////////////////////////////////////////////////////////////////////

// const pessoasOrdenlfabetica = () => {

//  let paisOrdemAlfabetica = pessoas.map(e => e.first_name)
//  const resultado = paisOrdemAlfabetica.sort()
// const maeparFilhos = pessoas.map( e => e.children)
// const filhosOrdemAlfabetica = maeparFilhos.reduce((a,b) => a.concat(b))

// const resultadoFIlhos = filhosOrdemAlfabetica.sort()

// console.log(resultado,resultadoFIlhos)

// }
// pessoasOrdenlfabetica()


//exercico 6.5  ////////////////////////////////////////////////////////////////////////////////////////////////////

// const pessoasOrdenlIdade = () => {
//     const idadePais = pessoas.map(e => e.age)
//     const resultadoPais = idadePais.sort(function (y,x){
//     return y-x
// })

// const pessoasOrdenIdade = pessoas.map(e => e.children)
// const filhos = pessoasOrdenIdade.reduce((a,b) => a.concat(b))
// const resultadoFilhos = filhos.sort(function (y,x){
//     return y-x
// })
// console.log(resultadoFilhos, resultadoPais)

// }
// pessoasOrdenlIdade()

// exercicio 6 ////////////////////////////////////////////////////////////////////////////////////////////////////

// const pessoasMairoesDeIdade = (pessoas) => {
//     return pessoas.age >=18
// }

// console.log(pessoas.filter(pessoasMairoesDeIdade))

//exercicio 7 ////////////////////////////////////////////////////////////////////////////////////////////////////

// const paisMuitosFilhos = () => {
//      const numFilhos = pessoas.filter(e => e.children.length >=2);

//      const pais = numFilhos.map(e => e.first_name)
//  console.log(pais)   
// }
// paisMuitosFilhos()

// exercicio 8  ////////////////////////////////////////////////////////////////////////////////////////////////////

// const totalCovid = () => {
//     const paisCovid = pessoas.filter(({hadCovid}) => hadCovid === true)
//     const filhosCovid = pessoas.map(e => e.children)
//     const filhosCovid2 = filhosCovid.reduce((a, b) => a.concat(b))
//     const pessoasCovid = filhosCovid2.filter(({hadCovid}) => hadCovid === true)
//     console.log(`Pais: ${paisCovid.length} com covid , Filhos: ${pessoasCovid.length} com covid`)
// }
// totalCovid() 


// exercico 9 ////////////////////////////////////////////////////////////////////////////////////////////////////

// const pessoasAnoQueVem = () => {
//     const aumentarIdade = pessoas.map(e => e.age +1)
//         // const result = aumentarIdade + 1
//         // console.log(result)
//         console.log(aumentarIdade)
//     }

// pessoasAnoQueVem()

// exercicio 10  ////////////////////////////////////////////////////////////////////////////////////////////////////

// const filtroPaisBrasileiros = () => {
//     const filtrarPais = pessoas.filter(({country}) => country === 'Brazil')
//     console.log(filtrarPais)
// }
// filtroPaisBrasileiros()

//exercicio 11 ////////////////////////////////////////////////////////////////////////////////////////////////////

// const nomesCompletos = () => {
//     const nomesCompletosPais = pessoas.map(e => e.first_name+ " " + e.last_name)
    
//     const child = (pessoas.map(e => e.children));
//     const childMapeada = child.reduce((a,b) => a.concat(b))
//     const nomesCompletosFilhos = childMapeada.map(e => e.first_name + " " + e.last_name)

//     console.log( nomesCompletosFilhos, nomesCompletosPais)
// }

// nomesCompletos()


// exercicio 12  ///////////////////////////////////////////////////////////////////////////////////////////////////

// const paises = pessoas.map(e => e.country)
// const resultado = paises.filter((pais, indice) => paises.indexOf(pais)===indice)

// console.log(resultado)


//exercicio 13  ////////////////////////////////////////////////////////////////////////////////////////////////////


// exercicio 14 ////////////////////////////////////////////////////////////////////////////////////////////////////

// const pessoasInconsistentes = () => {
//       const paisInconsistentes = []
//       const filhosInconsitentes = pessoas.map(e => e.children)

//       const filtrarInconsistencias = pessoas.filter((pais, indice) => {
//           filhosInconsitentes[indice].forEach(child => {
//               if(pais.age <= child.age){
//                   paisInconsistentes.push(child)
//                   filhosInconsitentes.push(pais)
//               }
//           }) 
//       })
//      console.log(paisInconsistentes)
// }
// pessoasInconsistentes()




//exercicio 15  ////////////////////////////////////////////////////////////////////////////////////////////////////

// const pessoasFull = () => {
//     const nomesCompletoPais = pessoas.map(e => e.first_name + " " + e.last_name)
     
//     const criancas = pessoas.map(e => e.children);
//     const criancasMapeada = criancas.reduce((a,b) => a.concat(b))
//     const  nomesCompletosFilhos = criancasMapeada.map(e => e.first_name + " " + e.last_name)

//      const IdadePais = pessoas.map(e => e.age >=18)
     
     
//      const crianca = pessoas.map(e => e.children);
//      const criancaMapeada = crianca.reduce((a,b) => a.concat(b))
//      const idadeCrianca = criancaMapeada.filter(e => e.age >=18)
    
     
//      const resultadoNomes = (nomesCompletoPais, nomesCompletosFilhos)
//      const resultadoIdade = (IdadePais, idadeCrianca)

//      console.log(resultadoNomes)
//      console.log(resultadoIdade)

    
// }
// pessoasFull()




 






