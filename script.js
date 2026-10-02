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
        cardPedido.insertAdjacentHTML('beforeend', `> Bienvenido/a ${userName} A Freddy Fazbears Pizza
            <br><br>
            > Estamos enviando su pedido de ${mensajePedido} a la cocina, espere por favor...</>
            <br><br>`);

        setTimeout(() => {
            pedidoEstatus ?
            resolve(`> Todo su pedido ha sido entregado con exito`):
            reject(`> A ocurrido un error en su pedido...<br><br>`)
        }, 4000);
    })
};

const ordenarBebida = (drinkSelected) => {
    return new Promise((resolve, reject) => {

        const pedidoBebida = drinkSelected !== '' ? `> Su pedido de ${drinkSelected} ha sido entregado en su mesa` : `> No se pidio bebida`

        setTimeout(() => {
            pedidoEstatus ?
            resolve(cardPedido.insertAdjacentHTML('beforeend', `${pedidoBebida}<br>`)):
            reject(`Ah ocurrido un error con la entrega de bebida<br>`)
        }, 1000);
    })
};

const ordenarPlato = (foodSelected) => {
    return new Promise((resolve, reject) => {

        const pedidoPlato = foodSelected !== '' ? `> Su pedido de ${foodSelected} ha sido entregado en su mesa` : `> No se pidio plato<br>`

        setTimeout(() => {
            pedidoEstatus ?
            resolve(cardPedido.insertAdjacentHTML('beforeend', `${pedidoPlato}<br>`)):
            reject(`Ah ocurrido un error con la entrega del plato<br>`)
        }, 2000);
    })
};

const ordenarPostre = (dessertSelected) => {
    return new Promise((resolve, reject) => {

        const pedidoPostre = dessertSelected !== '' ? `> Su pedido de ${dessertSelected} ha sido entregado en su mesa` : `> No se pidio postre<br>`

        setTimeout(() => {
            pedidoEstatus ?
            resolve(cardPedido.insertAdjacentHTML('beforeend', `${pedidoPostre}<br>`)):
            reject(`Ah ocurrido un error con la entrega del postre<br>`)
        }, 3000);
    })
};

const procesarPedido = (respuesta, respuestaPlato, respuestaBebida, respuestaPostre) => {
    return new Promise((resolve) => {
        
        cardPedido.insertAdjacentHTML('beforeend', `${respuesta}<br><br>`);

        setTimeout(() => {
            resolve(`> Muchas gracias por ordenar en Freddy Fazbears Pizza <br><br>`)
        }, 1000);
    })
};

const reiniciarPagina = () => {
    let num = 20;
    const reinicio = setInterval(() => {
        tempReinicio.textContent = `> El terminal de pedido se reiniciara en ${num} segundos`
        num--
        if (num < 0) {
            clearInterval(reinicio);
            location.reload()
        }
    }, 1000);

};

const realizarPedido = async (userName, mensajePedido, foodSelected, drinkSelected, dessertSelected) => {
    try {
        formBtn.disabled = true;
        formBtn.textContent = 'Procesando...';
        const respuesta = await ordenarPedido(userName, mensajePedido);
        const respuestaBebida = await ordenarBebida(drinkSelected);
        const respuestaPlato = await ordenarPlato(foodSelected);
        const respuestaPostre = await ordenarPostre(dessertSelected);


        const respuestaProcesada = await procesarPedido(respuesta, respuestaPlato, respuestaBebida, respuestaPostre);
        cardPedido.insertAdjacentHTML('beforeend', respuestaProcesada)
        console.log(respuestaProcesada)
        reiniciarPagina()

    } catch (error) {
        cardPedido.insertAdjacentHTML('beforeend', error)
        console.log(error)
        reiniciarPagina()
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
        ? realizarPedido(userName, mensajePedido, foodSelected, drinkSelected, dessertSelected)
        : formMsg.textContent = `No has seleccionado ninguna opcion`

    formMsg.classList.toggle('form-invalid', !mensajePedido)
});