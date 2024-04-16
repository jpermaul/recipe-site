const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (email && password) {
      
      const response = await fetch('./api/users/signUp', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Signup failed');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpFormHandler);