document.addEventListener('DOMContentLoaded', () => {
    const asignaturas = document.querySelectorAll('.asignatura');

    asignaturas.forEach(asignatura => {
        asignatura.addEventListener('mouseenter', () => {
            const apertura = asignatura.dataset.apertura ? asignatura.dataset.apertura.split(',') : [];
            const requiere = asignatura.dataset.requiere ? asignatura.dataset.requiere.split(',') : [];

            // Destacar las asignaturas que pueden abrirse
            apertura.forEach(aperturaId => {
                const aperturaCard = document.getElementById(aperturaId);
                if (aperturaCard) {
                    aperturaCard.classList.add('highlight-green');
                }
            });

            // Destacar las asignaturas que requieren la actual
            requiere.forEach(requiereId => {
                const requiereCard = document.getElementById(requiereId);
                if (requiereCard) {
                    requiereCard.classList.add('highlight-red');
                }
            });
        });

        asignatura.addEventListener('mouseleave', () => {
            const apertura = asignatura.dataset.apertura ? asignatura.dataset.apertura.split(',') : [];
            const requiere = asignatura.dataset.requiere ? asignatura.dataset.requiere.split(',') : [];

            // Quitar el resaltado de las asignaturas que pueden abrirse
            apertura.forEach(aperturaId => {
                const aperturaCard = document.getElementById(aperturaId);
                if (aperturaCard) {
                    aperturaCard.classList.remove('highlight-green');
                }
            });

            // Quitar el resaltado de las asignaturas que requieren la actual
            requiere.forEach(requiereId => {
                const requiereCard = document.getElementById(requiereId);
                if (requiereCard) {
                    requiereCard.classList.remove('highlight-red');
                }
            });
        });
    });
});
