export function UserConnexion() : boolean {
    if(localStorage.getItem("userId") != null){
        return true 
    }else{
        return false
    }

}