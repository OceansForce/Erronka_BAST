export const checkProtektora = (navigate) => {
  //console.log('pro'+localStorage.getItem('protektora'));
    if (localStorage.getItem('protektora') === null) {
      // Redirigir si 'protektora' es null
      navigate('/');
    }
  };
  