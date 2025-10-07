import { toast } from "react-toastify";


export const notificacion = (text:string, type:"error"|"success", tiempo?:number)=>{
if (type === "success" ){
    toast.success(text, {
        position: "bottom-center",
        autoClose: tiempo || 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

if (type === "error"){
    toast.error(text, {
        position: "bottom-center",
        autoClose: tiempo || 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}}

export const suma = (a:number, b:number)=> a + b;

export const isEven = (n:number)=> n % 2 === 0;

export const calculateIva = (valor:number)=> {
    return valor * 0.19
}
