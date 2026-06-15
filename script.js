// =========================
// MENSAGEM
// =========================

function mostrarMensagem() {

    const surpresa =
        document.getElementById("surpresa");

    surpresa.innerHTML = `
             Obrigado por tudo meu amor.
            <br>
            Embora simples, cada gesto de carinho seu tem um significado único para mim. Sou profundamente grato por você ter aceitado meu amor e por caminhar ao meu lado. Em cada abraço, sorriso e olhar, sinto que nos tornamos um só coração, unidos por um amor sincero, puro e eterno.
            <br><br>
            Eu te amo mil milhões minha princesa, e sempre a amarei! ❤️
        `;

    surpresa.style.opacity = "1";
}

// =========================
// CONTADOR
// =========================FF

const dataNamoro =
    new Date("2024-06-22T00:00:00");

function atualizarTempo() {

    const agora = new Date();

    let anos =
        agora.getFullYear() -
        dataNamoro.getFullYear();

    let meses =
        agora.getMonth() -
        dataNamoro.getMonth();

    let dias =
        agora.getDate() -
        dataNamoro.getDate();

    if (dias < 0) {

        meses--;

        const ultimoMes =
            new Date(
                agora.getFullYear(),
                agora.getMonth(),
                0
            );

        dias += ultimoMes.getDate();
    }

    if (meses < 0) {

        anos--;
        meses += 12;
    }

    // Diferença total para horas, minutos e segundos
    const diferenca =
        agora.getTime() -
        dataNamoro.getTime();

    const totalSegundos =
        Math.floor(diferenca / 1000);

    const segundos =
        totalSegundos % 60;

    const minutos =
        Math.floor(totalSegundos / 60) % 60;

    const horas =
        Math.floor(totalSegundos / 3600) % 24;

    const tempo =
        document.getElementById("tempo");

    if (tempo) {

        tempo.innerHTML =
            `
            💜 ${anos} ano(s),
            ${meses} mês(es),
            ${dias} dia(s),
            ${horas} hora(s),
            ${minutos} minuto(s)
            e ${segundos} segundo(s)
            juntos
            `;
    }
}

setInterval(atualizarTempo, 1000);
atualizarTempo();



// =========================
// ÁLBUM
// =========================

const pages =
    document.querySelectorAll(".page");

const totalPages =
    pages.length;

let current = 0;
let animando = false;

pages.forEach((page, index) => {

    page.style.zIndex =
        totalPages - index;

});

// =========================
// BOTÕES
// =========================

const next =
    document.getElementById("next");

const prev =
    document.getElementById("prev");

function proximaPagina() {

    if (animando) return;

    if (current < totalPages) {

        animando = true;

        pages[current]
            .classList.add("flipped");

        current++;

        setTimeout(() => {

            animando = false;

        }, 1800);
    }
}

function paginaAnterior() {

    if (animando) return;

    if (current > 0) {

        animando = true;

        current--;

        pages[current]
            .classList.remove("flipped");

        setTimeout(() => {

            animando = false;

        }, 1800);
    }
}

// Eventos dos botões

if (next) {
    next.addEventListener(
        "click",
        proximaPagina
    );
}

if (prev) {
    prev.addEventListener(
        "click",
        paginaAnterior
    );
}

// =========================
// CLICAR NA PÁGINA
// =========================

pages.forEach(page => {

    page.addEventListener(
        "click",
        proximaPagina
    );

});

// =========================
// TECLADO
// =========================

document.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "ArrowRight") {

            proximaPagina();
        }

        if (e.key === "ArrowLeft") {

            paginaAnterior();
        }
    }
);

// =========================
// ANIMAÇÃO DE ENTRADA
// =========================

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity = "1";
    }
)