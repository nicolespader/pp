import { signIn } from '../DB/src/script.js'
document.addEventListener('DOMContentLoaded', function() { /** o domcontentloaded espera todo o html ser executado pra cmç */
    const bt = document.getElementById('handleSubmit');
    const userEmail = document.getElementById('email');
            const userSenha = document.getElementById('senha');
        bt.addEventListener("click", async (event) => {
           
            event.preventDefault();
            await signIn(userEmail.value, userSenha.value);
            window.location.href = "../tela_principal/principal.html";
        });
});

