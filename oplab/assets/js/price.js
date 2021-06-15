  function changeValue(type, btn) {
      if(type === 'MONTH') {
        document.getElementById("idFree").innerHTML = '<h4 class="old"><sup>&nbsp;</sup></h4><h4><sup>R$</sup><span>0</span><sup>/mês</sup></h4>';
        document.getElementById("idFit").innerHTML = '<h4 class="old"><sup>R$47/mês</sup></h4><h4><sup>R$</sup><span>37</span><sup>/mês</sup></h4>';
        document.getElementById("idMax").innerHTML = '<h4 class="old"><sup>R$159/mês</sup></h4><h4><sup>R$</sup><span>119</span><sup>/mês</sup></h4>';
        document.getElementById("idPro").innerHTML = '<h4 class="old"><sup>&nbsp;</sup></h4><h4><sup>sob consulta</sup></h4>';
        document.getElementById("idBtnMensal").className = 'ativo';
        document.getElementById("idBtnAnual").className = 'desativo';
      }
      if(type == 'YEARLY') {
        document.getElementById("idFree").innerHTML = '<h4 class="old"><sup>&nbsp;</sup></h4><h4><sup>R$</sup><span>0</span><sup>/mês</sup></h4>';
        document.getElementById("idFit").innerHTML = '<h4 class="old"><sup>R$444/mês</sup></h4><h4><sup>R$</sup><span>370</span><sup>/mês</sup></h4>';
        document.getElementById("idMax").innerHTML = '<h4 class="old"><sup>R$1.428/mês</sup></h4><h4><sup>R$</sup><span>1.190</span><sup>/mês</sup></h4>';
        document.getElementById("idPro").innerHTML = '<h4 class="old"><sup>&nbsp;</sup></h4><h4><sup>sob consulta</sup></h4>';
        document.getElementById("idBtnMensal").className = 'desativo';
        document.getElementById("idBtnAnual").className = 'ativo';
      }
  }