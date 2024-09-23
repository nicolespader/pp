let button = document.getElementById("handleSubmit");

button.onclick = async function() {
    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let data = {name, senha, email}
    console.log(data)
    const response = await fetch('http://localhost:3005/api/store/user', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        alert("Sucesso")
    } else {
        alert('Não');
    }
}


