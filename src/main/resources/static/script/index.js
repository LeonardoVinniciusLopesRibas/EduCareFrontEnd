document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('http://localhost:4848/educare/usuario/validacao', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, senha: password })
                });

                const data = await response.json();
                console.log(data);
                if (data === true) {
                    localStorage.setItem('isLoggedIn', 'true');
                    window.location.href = '/retaguarda';
                } else {
                    alert('Email ou senha inválidos. Por favor, tente novamente.');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
            }
        });
    }
});
