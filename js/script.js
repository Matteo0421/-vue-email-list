const { createApp } = Vue;

// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: []

    }
  },

  methods: {
    getApis() {
      for (let i = 0; i < 10; i++) {
        axios.get(this.apiUrl)
          .then(response => {
            const newEmail = response.data.response;
            this.emails.push(newEmail);
          })
          .catch(error => {
            console.error('Errore durante la richiesta:', error);
          });
      }
    }
  }
  
}).mount('#app');