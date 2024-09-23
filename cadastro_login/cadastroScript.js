import { signUp, signIn } from '../DB/src/script.js'

const signUpBt = document.getElementById('handleSubmit')
signUpBt.addEventListener("click", async () => {
    let userName = document.getElementById('nome')
    let email = document.getElementById('email')
    let password = document.getElementById('senha')
    let passwordConfirm = document.getElementById('confirma_senha')

    if (password.value === passwordConfirm.value) {
        await signUp(userName.value, email.value, password.value);
        signIn(email.value, password.value)
        window.location.href = "../tela_principal/principal.html";
    } else {
        console.log('erro ao cadastrar usuario')
    }
})