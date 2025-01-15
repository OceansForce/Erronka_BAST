export const checkToken = (navigate) => {
    // console.log('pro'+localStorage.getItem('token'));
      if (localStorage.getItem('token') === null) {
        // Redirigir si 'protektora' es null
        navigate('/');
      }
    };
    