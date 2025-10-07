import { isEven, calculateIva, suma } from '../helpers/utils';


describe('probamos la funcion suma',()=>{
    test('validando suma',()=>{
        expect(suma(4,5)).toBe(9)
        expect(suma(8,5)).toBe(13)
        expect(isEven(8)).toBe(0)
    })
})
describe('probando las funciones de ./utils', ()=>{
    test('funcion debe retornar el iva del 19% delvalor', ()=>{
        expect(calculateIva(100)).toBe(19)
        expect(calculateIva(200)).toBe(38)
    })
} ) 

