// creamos la funcione donde vamos a recibir los parametros que vamos agregar al decorador
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function agregarPropiedades (propiedadesExtras:Record<string,any>){ // aqui le ponemos los parametros en record, que finalmente son los que cvan a tomar en la funcion create
    return function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any,        // los decoradores tienen esta estructura predeterminada en la documentacion de Typescript (hay varios tipos, este es, decoradores para metodos)
    propertyKey: string,
    descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value // metodo descriptor vaa  hacer igual al valor original // descriptor es la descripcion de todo el decorador 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        descriptor.value = function (...argumentos:any[]){
            //le damoslogica a esta funcion mtodoOriginal
            const usuario = argumentos[0] // con cero indicamos la posicion inicial, el primer argumento que vamos a recibir es un usuario
            const extras = typeof propiedadesExtras === "function" ? propiedadesExtras () : propiedadesExtras ;

            const propiedadesUsuario = {...usuario,...extras}
            return metodoOriginal.apply(this,[propiedadesUsuario,...argumentos.slice(1)])
        }
        return descriptor

    }
}