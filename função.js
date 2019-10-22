

//Funções

function digite(valor){
  
    var numero2 = document.getElementById('resultado').value += valor;
    
  }
  
   function result(total){
  
    var cont = document.getElementById("resultado").value;
    


    try {
      
  
      document.getElementById("resultado").value = eval(cont);
  
    }



    //Função Mensagem de ERRO

    catch(err) {
     
      document.getElementById("resultado").value = "Erro de operação.";
      
    }
   
  }