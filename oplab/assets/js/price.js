  function changeValue(type, btn) {
      if(type === 'MONTH') {
        document.getElementById("idFree").innerHTML = '0';
        document.getElementById("idFit").innerHTML = '<sup>R$</sup><span>37</span><sup>/mês</sup>';
        document.getElementById("idMax").innerHTML = '<sup>R$</sup><span>119</span><sup>/mês</sup>';
        document.getElementById("idPro").innerHTML = 'sob consulta';
        document.getElementById("idBtnMensal").className = 'ativo';
        document.getElementById("idBtnAnual").className = 'desativo';
      }
      if(type == 'YEARLY') {
        document.getElementById("idFree").innerHTML = '0';
        document.getElementById("idFit").innerHTML = '<sup>R$</sup><span>370</span><sup>/ano</sup>';
        document.getElementById("idMax").innerHTML = '<sup>R$</sup><span>1.190</span><sup>/ano</sup>';
        document.getElementById("idPro").innerHTML = 'sob consulta';
        document.getElementById("idBtnMensal").className = 'desativo';
        document.getElementById("idBtnAnual").className = 'ativo';
      }
  }