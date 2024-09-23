import { checkUser } from '../DB/src/script.js'

//chama a função que somente retorna se o usuario esta logado ou não e ENTÃO, se o retorno(result) for "log", ou seja, logado, salva as informações que pegamos dentro da função userCheck, se não estiver logado, vai direcionar para a pagina de login 
await checkUser().then((result) => {
    if (result.status === 'log') {
        const userData = result.userAuthData
        console.log('Usuário logado com dados de autenticação:', result.userAuthData);
        console.log('Dados do usuário do banco de dados:', result.userData);
    } else {
        console.log('Usuário não está logado, redirecionando para login');
        window.location.href = "../cadastro_login/login.html";
    }
}).catch((error) => {
    console.error('Erro ao verificar usuário:', error);
});
