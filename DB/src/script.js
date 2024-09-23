import { firebaseConfig  } from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Inicializa o Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);     
const auth = getAuth(app); // Inicia a autenticação do usuário (somente para o usuário atual)
const db = getDatabase(app); // Inicializa o banco de dados

// Função para registrar um novo usuário
async function signUp(name, email, password) {
    try {
        // Cria um novo usuário no Firebase Authentication com email e senha fornecidos
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user; // Obtém o usuário criado
        console.log('Usuário criado:', user);

        // Armazena os dados do usuário no banco de dados Firebase Realtime Database
        await set(ref(db, `users/${user.uid}`), {  // `set` cria uma nova entrada ou substitui uma existente no banco de dados
            userName: name,
            email: user.email
        });
    } catch (error) { // Se houver um erro durante a criação do usuário
        console.error('Erro ao criar usuário:', error);
    }
}



// Função para fazer login de um usuário existente
async function signIn(email, password) {
    try {
        // Tenta fazer login com email e senha fornecidos
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado:', userCredential.user);
    } catch (error) {
        // Se houver um erro durante o login
        console.error('Erro de login:', error.code, error.message);
    }
}

// Função para verificar se o usuário está autenticado
function checkUser() {
    return new Promise((resolve, reject) => {  // Cria uma promessa porque precisa retornar algo (resolvido ou rejeitado)
        onAuthStateChanged(auth, (user) => {  // Verifica a autenticação (se o usuário está logado ou não)
            if (user) {  // Se houver um usuário logado, pega as informações úteis
                console.log('Usuário está logado:', user);
                const userAuthData = {
                    uid: user.uid,
                    email: user.email
                };
                get(ref(db, `users/${user.uid}`))
                .then((snapshot) => { // `get` obtém os dados do usuário do banco de dados
                        const userData = snapshot.val(); // Extrai os dados reais do snapshot retornado
                        if (userData) { // Se o usuário estiver logado, retorna o status "log" quando a função checkUser for chamada
                            console.log('Dados do usuário encontrados:', userData);
                            resolve({ status: 'log', userAuthData, userData: userData }); // Se houver um usuário, resolve a promessa com o status "log"
                        } else {
                            console.warn('Usuário encontrado, mas sem dados específicos de tipo (empresa ou normal).');
                            resolve({ status: 'log', userAuthData, userData: {} });
                        }
                    })
                    .catch((error) => {
                        console.error('Erro ao obter dados de usuário normal:', error);
                        reject(error); // Rejeita a promessa em caso de erro
                    });
            } else {
                console.log('Usuário não está logado');
                resolve({ status: 'not log' }); // Resolve a promessa com o status "not log" se o usuário não estiver logado
            }
        });
    });
}

// Função para definir ou atualizar a pontuação de um usuário
async function pergunta(titulo, r1, r2, r3, r4, certa) {
    try {
        await set(ref(db, `pergunta/${titulo}`), {
            r1: r1,
            r2: r2,
            r3: r3,
            r4: r4,
            certa: certa
        })
    } catch (error) { // Se houver um erro durante
        console.error('Erro ao criar pergunta:', error);
    }
}

async function SetScore(user, score) {
    try {
        // Atualiza a pontuação do usuário no banco de dados
        await update(ref(db, `users/${user}`), {  // `update` atualiza o valor existente sem substituir outros dados
            score: score,
        });
        console.log('Score atualizado');
    } catch (error) {
        // Se houver um erro durante a atualização da pontuação
        console.error(error);
    }
}

// Função para obter a pontuação de um usuário
async function GetScore(user) {
    try {
        // Obtém a pontuação do usuário do banco de dados
        const snapshot = await get(ref(db, `users/${user}/score`));
        if (snapshot.exists()) { // Verifica se a pontuação existe no banco de dados
            const score = snapshot.val(); // Extrai o valor da pontuação do snapshot
            console.log(`Score: ${score}`);
            return score; // Retorna a pontuação
        } else {
            console.log('Nenhum score encontrado');
            return null; // Retorna `null` se não houver pontuação
        }
    } catch (error) {
        // Se houver um erro durante a obtenção da pontuação
        console.error(error);
    }
}

// Exporta as funções que serão utilizadas em outros módulos
export {  
    SetScore,
    GetScore,
    signIn,
    signUp,
    checkUser
}
