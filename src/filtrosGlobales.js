import Vue from "vue"

Vue.filter("pasarAMayuscula", function(value){
    return value.toUpperCase()
})

Vue.filter("minMax", function(value){
    
        let resultado = ""
        for (let i = 0; i < value.length; i++) {
          if(i % 2 == 0){
            resultado += value[i].toLowerCase();
          } else{
          resultado += value[i].toUpperCase();
        }
        }
      return resultado
       

})

Vue.filter("contarGlobal", function(value){
        return "Cantidad: " + value.length
})

Vue.filter("vocales2", function(value){
    let convertida=''
    let cadena= value
    for(let i=0;i <cadena.length;i++){
      if(cadena[i]=='a'){
        convertida+='u'
      }else if(cadena[i]=='e'){
      convertida+='o'
     }else if(cadena[i]=='o'){
      convertida+='e'
     }else if(cadena[i]=='u'){
      convertida+='a'
     }else{
      convertida+=cadena[i]
     }
  }
  return convertida
  
})