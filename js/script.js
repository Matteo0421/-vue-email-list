const { createApp } = Vue;

// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

    }
  },

  // si scrivono tutte le funzioni
  methods:{
    getApis(){
      axios.get(this.apiUrl)
      .then(log)
    }
  }

}).mount('#app');