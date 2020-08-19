// const btn = document.getElementById('gravar');
// btn.addEventListener("click", gravar);

// const btnRecuperar = document.getElementById('recuperar');
// btnRecuperar.addEventListener("click", recuperar);

// function gravar() {
//   const valor = document.getElementById('nome');
//   localStorage.setItem('nome', valor.value);
// }

// function recuperar() {
//   const nome = localStorage.getItem('nome');
//   alert(nome);
// }

save = () => {
  let oData = [];
  event.preventDefault();

  if($("#nome").val() && $("#sobrenome").val() && $("#email").val()) {
    let oNewData = {
      'nome'     : $("#nome").val()
     ,'sobrenome': $("#sobrenome").val()
     ,'email'    : $("#email").val()
    }
    
    if(localStorage.getItem('data')) {
      oData = JSON.parse(localStorage.getItem('data'));
    }

    oData.push(oNewData);
    localStorage.setItem('data', JSON.stringify(oData));
    cleanInputs();
  }
}

loadTableData = () => {
  let sHtml = '';
  
  if(localStorage.getItem('data')) {
    sHtml = `<table class="table table-striped">
                <thead class="thead-dark">
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>Email</th>
                </thead>`;

    $.each(JSON.parse(localStorage.getItem('data')), function(position, data) {
      sHtml += `<tr>
                  <td>${data.nome}</td>
                  <td>${data.sobrenome}</td>
                  <td>${data.email}</td>
                </tr>`
    });

    sHtml += `</table>`;
  }
  console.log(sHtml)

  $("#conteudo_modal").html(sHtml !== '' ? sHtml : 'Não há nenhum registro.');
}
  
cleanInputs = () => {
  $("#nome").val('');
  $("#sobrenome").val('');
  $("#email").val('');
}

cleanAllData = () => {
  localStorage.clear();
  $("#confirmacaoApagar").modal('hide');
}