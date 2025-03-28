document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.querySelector('.email .input-form').value;
  const password = document.querySelector('.password .input-form').value;

  fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
      if (data.message === 'Connexion réussie') {
          alert('Connexion réussie');
          // Redirigez vers une autre page ou faites une action après la connexion
      } else {
          alert(data.message);
      }
  })
  .catch(error => {
      console.error('Erreur:', error);
  });
});
