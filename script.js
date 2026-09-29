// ========== VARIABLES GLOBALES ========== //
// porcentaje de exito de pedido (80%)
const pedidoEstatus = Math.random() < 0.8

// ========== SELECTORES ========== //
// selectores del formulario de pedido
const formPedido = document.querySelector('#form-pedido');
const inputName = document.querySelector('#input-name');
const selectFood = document.querySelector('#select-food');
const selectDrink = document.querySelector('#select-drink');
const selectDessert = document.querySelector('#select-dessert');
const formMsg = document.querySelector('#form-msg');
const formBtn = document.querySelector('#form-btn');
// selectores de la tarjeta de rendderizado
const cardPedido = document.querySelector('#card-pedido');
const tempReinicio = document.querySelector('#temp-reinicio')

// ========== FUNCIONES ========== //
const ordenarPedido = (userName, mensajePedido) => {
    return new Promise((resolve, reject) => {
        cardPedido.insertAdjacentHTML('beforeend', `> Bienvenido/a A Freddy Fazbears Pizza ${userName}
            <br>
            > Estamos enviando su pedido de ${mensajePedido} a la cocina, espere por favor...</>
            <br>`);

        setTimeout(() => {
            pedidoEstatus ?
            resolve(`> Su pedido de ${mensajePedido}, ha sido entregado con exito`):
            reject(`> A ocurrido un error en su pedido...`)
        }, 4000);
    })
};

const procesarPedido = (respuesta) => {
    return new Promise((resolve) => {
        cardPedido.insertAdjacentHTML('beforeend', `${respuesta}<br>`);
        console.log(respuesta)

        setTimeout(() => {
            resolve(`> Muchas gracias por ordenar en Freddy Fazbears Pizza <br><br>`)
        }, 1000);
    })
};

const reiniciarPagina = () => {
    let num = 10;
    const reinicio = setInterval(() => {
        tempReinicio.textContent = `El terminal de pedido se reiniciara en ${num} segundos`
        num--
        if (num < 0) {
            clearInterval(reinicio);
            location.reload()
        }
    }, 1000);

};

const realizarPedido = async (userName, mensajePedido) => {
    try {
        const respuesta = await ordenarPedido(userName, mensajePedido);

        const respuestaProcesada = await procesarPedido(respuesta);
        cardPedido.insertAdjacentHTML('beforeend', respuestaProcesada)
        console.log(respuestaProcesada)
        reiniciarPagina()

    } catch (error) {
        cardPedido.insertAdjacentHTML('beforeend', error)
        console.log(error)
    }
}

// ========== EVENTOS ========== //
formPedido.addEventListener('submit', async (event) => {
    //evita reiniciar la pagina
    event.preventDefault();

    // variables de datos de usuarios
    const userName = inputName.value;
    const foodSelected = selectFood.value;
    const drinkSelected = selectDrink.value;
    const dessertSelected = selectDessert.value;

    formMsg.textContent = ''

    const opcionesPedido = [
        foodSelected ? foodSelected : null,
        drinkSelected ? drinkSelected : null,
        dessertSelected ? dessertSelected : null
    ].filter(Boolean);

    const mensajePedido = opcionesPedido.length
        ? opcionesPedido.join(', ')
        : false

    mensajePedido !== false
        ? realizarPedido(userName, mensajePedido)
        : formMsg.textContent = `No has seleccionado ninguna opcion`

    formMsg.classList.toggle('form-invalid', !mensajePedido)
});