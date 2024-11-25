export function dataHora () {
    const dataHora = new Date();

    return `${dataHora.toLocaleDateString("pt-BR", {weekday: "long" })} (${dataHora.toLocaleDateString("pt-BR")}) às ${dataHora.toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric", second: "numeric"})}`
}