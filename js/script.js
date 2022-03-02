const vm = new Vue({
    el: "#app",
    data: {
      cep: '',
      dados: {}
    },
    watch: {
      cep(valor) {
        if (valor.length === 8) {
          fetch(`https://viacep.com.br/ws/${valor}/json/`)
            .then(response => response.json())
            .then(response => {
              this.dados = response;
            })
        }

      }
    }

  })