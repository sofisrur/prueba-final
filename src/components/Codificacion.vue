<template>

  <section class="src-components-codificacion">
    <input type="text" v-model="ingreso">
    <p>{{ingreso | contar}}</p>  
    <p>{{contar}}</p>
    <p>{{ingreso | mayuscula}}</p>
    <p>{{ingreso | minuscula}}</p>
    <p>{{ingreso | vocales | minuscula}}</p>
    <p>{{ingreso | vocales | mayuscula}}</p>
    <p>{{ingreso | mayYMin}}</p>
    <p>{{ingreso | minYMax}}</p>
    <p>{{minYmax}}</p>
    <p>{{minuscula2}}</p>
    <p>{{ingreso | pasarAMayuscula}}</p>
    <p>{{ingreso | minMax}}</p>
    <p>{{ingreso | contarGlobal}}</p>
    <p>{{vocales}}</p>
    <p>{{ingreso | vocales2 | pasarAMayuscula}}</p>
    <p>{{ingreso | reverse}}</p>


    <br>
   <br><br> <br><br> <br><br> 

   <p>Como es la forma reducida de v-on:click?: <i>c) @click </i></p>
   <p>vue create se utiliza para:<i>  b) Crear un proyecto base Vue basado en Vue CLI</i> </p>
   <p>El modificador trim recorta... <i>c) Los espacios adelante y atrás en una entrada de texto</i></p>
   <p>La propiedad routes en la definición del router de Vue.js tiene como función: <i>a) Definir el path y el componente activo para esa ruta </i> </p>
   <p>Las mutaciones contienen...<i>c) Lógica sincrónica</i> Y ALGUNA MAS...(?</p>
   <p>¿Cual de estas directivas nos permite doble data binding? VER</p>
   <p>field-messages es un elemento de vue-form que permite: <i>Contener los mensajes de validación</i></p>
   <p>¿Que permite vue-router?:<i> Permite enlazar URLs a componentes específicos</i></p>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-codificacion',
    props: [],
    mounted () {
    },
    filters:{
      mayuscula: function(valor) {
        return valor.toUpperCase();
      },
         reverse: function(valor) {
        return valor.split("").reverse();
      },
       minuscula: function(valor) {
        return valor.toLowerCase();
      },
      vocales: function(value){ 
        let convertida=''
        let cadena=value.toLowerCase()
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
      
      },
      contar: function(value){ 
       return "Cantidad: " + value.length
     },
     mayYMin: function (value){
      let resultado = ""
      for (let i = 0; i < value.length; i++) {
        if(i % 2 == 0){
          resultado += value[i].toUpperCase();
        } else{
        resultado += value[i].toLowerCase();
      }
      }
    return resultado
     },
      minYMax: function (value){
      let resultado = ""
      for (let i = 0; i < value.length; i++) {
        if(i % 2 == 0){
          resultado += value[i].toLowerCase();
        } else{
        resultado += value[i].toUpperCase();
      }
      }
    return resultado
     },
    },
    data () {
      return {
        ingreso: "",
        
      }
    },
    methods: {

    },
    computed: {
      contar:function(){
        return "Cantidad: " + this.ingreso.length
      },
      minYmax:function(){
      let resultado = ""
      for (let i = 0; i < this.ingreso.length; i++) {
        if(i % 2 == 0){
          resultado += this.ingreso[i].toLowerCase();
        } else{
        resultado += this.ingreso[i].toUpperCase();
      }
      }
    return resultado
     },
     minuscula2: function() {
        return this.ingreso.toLowerCase();
      },
       vocales: function(){ 
        let convertida=''
        let cadena=this.ingreso.toLowerCase()
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
      }
    }
  }

</script>

<style scoped lang="css">

</style>
