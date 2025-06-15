'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Carrega o JS do Bootstrap só no cliente
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log("Bootstrap JS carregado no cliente");
      })
      .catch((err) => {
        console.error("Erro ao carregar Bootstrap JS:", err);
      });
  }, []);

  return null;
}

// 'use client';

// import { useEffect } from 'react';

// export default function BootstrapClient() {
//   useEffect(() => {
//     require('bootstrap/dist/js/bootstrap.bundle.min.js');
//   }, []);

//   return null;
// }
