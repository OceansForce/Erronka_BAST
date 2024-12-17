export const checkProtektora = (navigate) => {
    if (localStorage.getItem('protektora') === null) {
      // Redirigir si 'protektora' es null
      navigate('/');
    }
  };
  