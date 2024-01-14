import './style.css'
import './cajero/interface/interface.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { verifyUser ,createUser} from './cajero/banca'



function singIn (){
  let numberDni = document.querySelector("#dni").value;
  let password = document.querySelector("#password").value;
  verifyUser(numberDni,password);
}

const inicio = `
<header><h1>BANCO PAGAME</h1></header>
<div>
<label>DNI</label>
<input type="text" placeholder="numero de Documento" id="dni" value="">
<br>
<label>contraseña</label>
<input id="password" type="password" placeholder="contraseña de Banca por internet" value="">

<p><a href="#" class="link-reset-password">¿Olvidaste o bloqueaste tu contraseña?</a></p>
<div class="btn-send-container">
<button class="btn-ingresar">ingresar</button> <button class="btn-afiliate">afiliate</button>
</div>

</div>
<dialog id="favDialog">
<h2>REGISTRATE</h2>  
<form method="dialog">
    <section>
      <label>Nombre</label>
      <input  id="new-name" type="text" placeholder="Nombre completo aqui"/>
      <br>
      <label>Dni</label>
      <input  id="new-dni" type="text" placeholder="Dni aqui"/>
      <br>
      <label>Email</label>
      <input id="new-email" type="text" placeholder="correo electronico  aqui"/>
      <br>
      <label>Contraseña</label>
      <input id="new-password" type="password" placeholder="Contraseña aqui"/>

    </section>
    <menu>
      <button id="cancel" type="reset">Cancel</button>
      <button  class="register">Confirm</button>
    </menu>
  </form>
</dialog>

`




document.querySelector('#app').innerHTML = inicio;

document.querySelector(".btn-ingresar").addEventListener("click",()=>{
  singIn();
});
document.querySelector(".register").addEventListener("click",()=>{
  let password = document.querySelector("#new-password").value;
  let email = document.querySelector("#new-email").value;
  let nameUser = document.querySelector("#new-name").value;
  let dni = document.querySelector("#new-dni").value;
  const dateUser ={
    password,
    email,
    nameUser,
    dni
  }
  createUser(dateUser);
})