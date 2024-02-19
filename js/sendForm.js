function sendForm(e) {

    e.preventDefault()

    let url = ''

    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    let infoEmail = {
        'email': email,
        'assunto': subject,
        "mensagem": message
    }

    fetch(url, {
        method: 'POST'
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (data) {
            if(data.sucesso) {
                alert()
                clearForm()
            }
        })
        .catch(function (error) {
            console.error('Erro ao fazer a requisição:', error);
        })

}

function clearForm () {
   document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
   document.getElementById('message').value = ''
}
