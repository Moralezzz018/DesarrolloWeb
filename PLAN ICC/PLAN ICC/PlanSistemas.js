document.addEventListener("DOMContentLoaded", () => {
    const asignaturas = document.querySelectorAll(".asignatura");
    let currentOpen = [];
    let currentIsRequired = [];
    asignaturas.forEach((asignatura) => {

        asignatura.addEventListener("mouseenter", (e) => {
            console.log("Entro en el div" + e.target.id);
            e.target.classList.add("focus");
            const requiere = e.target.dataset.requiere.split(",");
            console.log(e.target.dataset);
            if(requiere) {
                currentIsRequired = requiere.map((requisito) => {
                    return document.getElementById(requisito);
                });
                currentIsRequired.forEach((requisito) => {
                    requisito.classList.add("isRequired");
                });
            }

            const apertura = e.target.dataset.apertura.split(",");
            if(apertura) {
                currentOpen = apertura.map((open)=>{
                    return document.getElementById(open);
                });
                currentOpen.forEach((open)=>{
                    open.classList.add("apertura");
                });
            }
        });

        asignatura.addEventListener("mouseleave", (e) => {
            e.target.classList.remove("focus");
            currentIsRequired.forEach((requisito) => {
                requisito.classList.remove("isRequired");
            });
            currentIsRequired = [];
            currentOpen.forEach((open)=>{
                open.classList.remove("apertura");
            });
            currentOpen = [];
        });
    });
});