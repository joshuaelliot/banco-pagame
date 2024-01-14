export function transfer(user,importTransfered){
users.forEach(element => {
    if(element.dni === user.dni){
        element.saldo -= importTransfered;
    }
});
    alert("se transfirio exitosamente a la cuenta  0395868283")
}