# Pedidos De Restaurante
> Bienvenidos a un simulador de realizar pedidos en un restaurante tematizado de **FNAF**, el cual es un ejercicio de programación con el fin de practicar principalmente el uso de **promesas** y **`setTimeout`** para simular código asíncrono, junto con la sintaxis de **`async/await`** y de **`Try/catch`**.

>El objetivo de este proyecto, es simular el proceso de pedir comida en un restaurante, con un 80% de probabilidad de que el pedido salga bien y un 20% de que salga mal, empleando el control de errores para controlar este ultimo caso.

---

## Demo En Vivo
>Demo en vivo desplegada en GitHub Pages: https://migueldh137.github.io/pedido-restaurante/

---

## Stack Tecnológico
- **Lenguajes:**

  - **HTML5:** Estructura y contenido de los elementos web.

  - **CSS3:** Estilos y animaciones para tematizar la web de FNAF y las tarjetas como terminal de pc.

  - **JavaScript:** Dinamismo de la web, lógica para:
    - Recoger datos del formulario y renderizar información en una tarjeta (`manipulación del DOM`).
    - Simular el proceso del pedido mediante código asíncrono emulado (`promise`, `async/await`, `try/catch`, `setTimeout/setInterval`)

- **Destacado:**

  - **promise:** Se utilizo el objeto de JS **promise** que sirve para representar el resultado eventual que arrojara una función asíncrona, ya sea exitosa (resolve) o fallida (reject). Tiene tres estados:
    - **Pendiente** (pending) desde que inicia la funcion hasta que finaliza.
    - **Cumplida** (resolve) cuando la función termina de forma exitosa.
    - **Rechazada (Rejected):** La función falló o lanzó un error.
    - **Documentación:** https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
   
  - **async/await:**
    - Se utilizo la sintaxis **async/await** que facilita el uso de promesas y permite escribir y leer código asíncrono como si fuera sincrono.
    - **async:** Se coloca antes de una función para declararla como asíncrona, de ese modo la función siempre retorna su resultado en forma de promesa.
    - **await:** Se utiliza dentro de las funciones **`async`** para pausar la ejecución del código hasta una promesa se resuelve o rechaza.
    - **Documentacion:** https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
   
  - **try/catch:**
    - Se utilizo la sintaxis de **`try/catch`**, que sirve para ejecutar un bloque de código (`try`) y en caso de que surja un fallo "atraparlo" para no romper la ejecución del codigo.
    - **try:** Contiene el código que se ejecuta y que podría generar un error o 'excepción'.
    - **catch (error):** Se ejecuta solo si ocurre un error en el bloque try, recibiendo un objeto con los detalles del fallo.
    - **Documentación:** https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch
   
---

## Diseño De Baja Fidelidad
- **Vista Desktop:**

  <img width="1583" height="512" alt="image" src="https://github.com/user-attachments/assets/b28b268f-8f64-4db4-a513-f1c3fd95dc74" />

- **Vista Mobile:**

    <img width="616" height="754" alt="image" src="https://github.com/user-attachments/assets/abc7735c-b333-4e6c-8a22-9b1c0e19a609" />

---

## Vistas De La Web
- **Vista Desktop:**
  
    <img width="1356" height="727" alt="image" src="https://github.com/user-attachments/assets/ee109185-d0a0-44a3-af4b-2529bccc85be" />
(Referencia: 1356x641)

- **Vista Mobile**
  
    <img width="251" height="876" alt="image" src="https://github.com/user-attachments/assets/c42eb1fa-1a9e-412d-bd0e-4f7ab3f353b9" />
(Referencia: 360x800)

---

## Uso

### Para Desarrollo:
> Para contribuir con cambios o crear tu propia version puedes seguir las siguientes indicaciones:

**Descarga:**

- **Crear un Fork:** Haz clic en el botón **Fork** (arriba a la derecha en GitHub) para crear una copia del repositorio en tu cuenta, desde la cual podrás sugerir cambios y actualizaciones a través de **`pull request`**, luego solo tendrás que clonar el repositorio para modificarlo en local.

- **clonar el repo:** Haz click en botón verde de **`<>code`** y copia el codigo **`HTTPS`**, y en la terminal de tu sistema operativo o en la integrada en tu editor de código, seleccionas el directorio local para el proyecto y ejecutas el comando dependeindo:
  - **Si hiciste Fork del repo:** `git clone https://github.com/<-Tu nombre de usuatio->/<-nombre del repo->`
  - **Si clonaste directamente el original:** `git clone https://github.com/MiguelDH137/pedido-restaurante.git`

**Ejecucion local:**
- **index.html:** Al tratarse de un frontend estático (HTML, CSS y JavaScript), puedes simplemente ejecutar el archivo **`index.html`** del proyecto en elnavegador de tu preferencia.

- **VSCODE:** Con el uso de extensiones de **VSCode**, como **LiveServer**, puedes ejecutar el proyecto en el navegador de tu preferencia en tiempo real.

**Edicion:**
> Para modificar el código puede usar cualquier editor de codigo como **VSCode** o **cursor**.

---

### Para Usuario Final:
> Para entrar a la pagina y probar como funciona sigue los siguientes pasos:

- Presiona el enlace de la demo en vivo (https://migueldh137.github.io/pedido-restaurante/).

- Una vez estas dentro de la web debes llenar lo datos del formulario:
  - Primero es escribir el nombre de la persona que realiza el pedido de comida.
  - Segundo es elegir de las listas el plato, bebida y postre que se desea pedir.
  - Tercero es presionar el botón para realizar el pedido de lo seleccionado.
    
<img width="386" height="417" alt="image" src="https://github.com/user-attachments/assets/4869910a-a594-44e6-94c7-d4eff62535f1" /> <img width="378" height="402" alt="image" src="https://github.com/user-attachments/assets/3448af68-e9dc-41c3-8d23-871385f28eb4" />

  - En caso de no seleccionar nada para el pedido aparecerá un mensaje de error por ese motivo.
    
  <img width="379" height="423" alt="image" src="https://github.com/user-attachments/assets/59ea2fe7-a32c-4362-8b82-7d2aadcb1fbe" />

- Después de presionar el botón de **realizar pedido**, en la tarjeta de la derecha se empezara a mostrar el proceso del pedido
  
<img width="411" height="299" alt="image" src="https://github.com/user-attachments/assets/44665ec4-7f08-4ad6-8ef4-aeba617302fd" /> <img width="415" height="302" alt="image" src="https://github.com/user-attachments/assets/181b9e16-0dfa-421d-af55-24e84f733a48" />

  - En el caso de que el pedido sea exitoso (80%), se indicara el éxito en la tarjeta y se mostrara un temporizador para reiniciar la pagina para hacer mas pedidos.

    <img width="411" height="300" alt="image" src="https://github.com/user-attachments/assets/8f3515cd-6ed2-44ea-bd5a-0e9b3fc4e64b" />
    
  - En e caso de que el pedido falle (20%), se indicara la falla en la tarjeta y se mostrara un temporizador para reiniciar la pagina para hacer mas pedidos.

    <img width="419" height="307" alt="image" src="https://github.com/user-attachments/assets/2a3c03c8-a5d4-4039-aca8-e0222e0c0a0c" />


---

## Colaboradores
- **Miguel Amaya** ([@MiguelDH137](https://github.com/MiguelDH137))
