//Trabalhando com Matriz de Objeto;

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];
 
 //Variaveis do Objeto---------------------------------------------------
 let nomeDosAtletas = 0;
 let notasDosAtletas = 0;
 let notasAjustadasDosAtletas = 0;
 let mediaDosAtletas = 0;
  
 //Obter número de itens na matriz----------------------------------------------------------
   console.log(`Números de itens na matriz objeto "atletas": ${atletas.length} elementos`);
   console.log(`------------------------------`);
 
 //Nome dos Atletas--------------------------------------------------------------------------
   nomeDosAtletas = atletas.map(function(atleta){
     return(`Atleta: ${atleta.nome}`)
 });
     //console.log(nomeDosAtletas)
 
 //Notas dos Atletas--------------------------------------------------------------------------
   notasDosAtletas = atletas.map(function(atleta){
     return(`Notas Obtidas: ${atleta.notas}`);
   })
     //console.log(notasDosAtletas)
 
 //Ordenar notas obtidas com .sort() e slice()---------------------
   notasAjustadasDosAtletas = atletas.map(function(atleta){
       //console.log (`${atleta.notas}`);
       let notaOrdena = atleta.notas.sort();
       let notaAjustada = notaOrdena.slice(1, 4);
       let notaObtida = (`As ${notaAjustada.length} notas para realizar as médias são: ${notaAjustada}`)
           return(notaObtida);
    });
       
//Obter a nota média dos atletas-------------------------------------------

  mediaDosAtletas = atletas.map(function(atleta){
       notaFormatada = ((atleta.notas.sort()).slice(1, 4));
       //console.log(`${notaFormatada.length}`)             
       
       let soma = 0;
       notaFormatada.forEach(function(nota){
         soma = soma + nota;
       });
       return(`Média Válida: ${soma / notaFormatada.length}` )
   
 });

//Chamamento das funções-----------------------------------------
 
     
 for (let i=0; i < atletas.length; i = i+1){
   
 console.log(nomeDosAtletas[i]);
 console.log(notasDosAtletas[i]);
 console.log(notasAjustadasDosAtletas[i]);
 console.log(mediaDosAtletas[i]);
 console.log(`----------------------------------------------------`);

};


 
  
