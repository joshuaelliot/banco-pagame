import { transfer } from "./transactions";
const users = [
    {
        dni: 12345,
        password: 12345,
        block: false,
        saldo: 2000,
        email: "nuevo@gmail.com",
        nameUser:"Fernando Figueroa",
        imageUser:"https://us.123rf.com/450wm/rmeyner/rmeyner2309/rmeyner230902455/212168742-retrato-de-un-hombre-barbudo-con-sombrero-en-la-calle.jpg?ver=6"
    }
];

//console.log(users.filter((user) => user.dni === 12345));

export function createUser({ dni, password, email ,nameUser}) {
    let dniNumber = parseInt(dni);
    let passwordNumber = parseInt(password);
    users.push({dni : dniNumber, password: passwordNumber, block: false, saldo: 2000, email ,nameUser:nameUser,imageUser:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"});
    console.log(users);
}
export function deleteUser() {

}
export function addMoney(dniUser, money) {
    // agregar dinero
    users.forEach((user) => {
        if (user.dni === dniUser) {
            user.saldo += money;
        }
    })
}
export function withdrawMoney(dniUser, money) {
    // retirar dinero
    users.forEach((user) => {
        if (user.dni === dniUser) {
            user.saldo -= money;
        }
    })
}
export function transferMoney(dniUser, money, acount) {
    users.forEach((user) => {
        if (user.dni === dniUser) {
            user.saldo -= money;
            alert(`Se transfirio  ${money} a la cuenta ${acount} exitosamente `);
        }
    })
}
const verifyBlock = (user, passwordUserLogin) => {
    const { block } = user;
    !block ? verifyPassword(user, passwordUserLogin) : alert("su Usuario esta bloqueado por exceso de intentos comuniquese al 55555");
}
const verifyPassword = (user, passwordUser) => {
    const { password, dni } = user;
    password === passwordUser ? showUser(user) : warning(dni);
}
export function verifyUser(dni, password) {
    let DNI = parseInt(dni);
    let PASSWORD = parseInt(password);
    console.log(DNI,PASSWORD);
    console.log(users)
    try {
        let userLogin = users.filter((user) => { return user.dni === DNI });
        console.log(userLogin);
        if (userLogin[0]) {
            verifyBlock(userLogin[0], PASSWORD);
            console.log("esto lo puse yo :",userLogin)
        } else {
            alert("usuario no existe " + DNI + "  :  no esta registrado");
        }
    } catch (error) {
        console.log("sucedio este error : ")
        console.error(error);
    }
}
export function blockUser(document) {
    users.forEach((user) => {
        if (user.dni === document) {
            user.block = true;
        }
    })
}

export function showUser(dateUser) {
    const { dni, nameUser, email, saldo,imageUser } = dateUser
    console.log("usuario logeado");
    document.querySelector("#app").innerHTML = `
    <section>
    <header><span>BANCO PAGAME</span><div><img class="image-user"src="${imageUser}"alt="image-user"/></div></header>
    <div class="date-user-container">
    <h2>Bienvenido ${nameUser}</h2>
    <p>Saldo Actual : <span> s/ ${saldo}</span></p>
    
    <div class="controls-container">
    <button id="btn-depositar">Depositar</button>
    <button id="btn-retirar">Retirar</button>
    <button id="btn-transfer">transferir</button>
    </div>
    
    </div>
    </section>
    <dialog id="dialogTransfer">
<h2>TRANSFERIR</h2>  
<form method="dialog">
    <section>
      <label>Numero de cuenta de destino</label>
      <input  id="acount-reception" type="text" placeholder="NUMERO DE CUENTA A TRANSFERIR"/>
      <br>
      <label>Dni</label>
      <input  id="import-transfer" type="number" placeholder="IMPORTE A TRANSFERIR"/>
      <br>
    </section>
    <menu>
      <button id="btn-transfer-cancel" type="reset">Cancel</button>
      <button  id="btn-transfer-confirm">Confirm</button>
    </menu>
  </form>
</dialog>
    `
}

let INTENTOS = 3;
export function warning(dniUser) {

    if (INTENTOS > 0) {
        alert(`la contraseña es incorrecta `);
        INTENTOS -= 1;
        console.log(INTENTOS)
    } else if (INTENTOS <= 0) {
        blockUser(dniUser);
        alert("excedio el numero de intentos permitidos : usuario bloqueado ")
    }
}

let userProvisional = {};

