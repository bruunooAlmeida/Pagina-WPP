function enviarMsg(){
    console.log('teste');
    // https://api.whatsapp.com/send?phone=5544997500721&text=Oi%20sua%20bolinha%20linda
    window.open("https://api.whatsapp.com/send?phone=55" + document.getElementById('numero').value + "&text=" + getMensagem());
   
    /*
     5544997500721
    const response = await fetch('https://api.whatsapp.com/send?phone=5544997500721&text=Oi%20sua%20bolinha%20linda');
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    
    const result = await response.json();
        return result;
    
   // } catch (err) {
        console.log(err);
    //}
    
    /* 
    fetch("https://api.whatsapp.com/send?phone=55" + document.getElementById('numero').value + '&text=' + '"' +  getMensagem() + '"'),{
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    }
    .then(response => response.json())
    .then(response => response.json())  // converter para json
    .then(json => console.log(json))    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); 
    */
}

function getMensagem(){
    return  encodeURI( document.getElementById('texto').value);
}

function getDDD(){
    return  document.getElementById('numeroNacional').checked ? '55' : document.getElementById('ddd').value;
}

function mascaraTelefone(event) {
    let tecla = event.key;
    let telefone = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        if (tamanho >= 12) {
            return false;
        }
        
        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }

        event.target.value = telefone;
    }

    if (!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
}