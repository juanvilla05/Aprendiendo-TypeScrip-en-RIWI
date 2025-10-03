type User = {
  id: number;
  name: string;
};

export class UserStore {
  list() {
    console.log("Se enlistan todos los usuarios");
  }

  findByName() {
    console.log("Encontrar por nombre");
  }

  
  create() {
    console.log("Con este creamos el usuario:");
  }

  update() {
    console.log("Modificación o mejora");
  }

  remove() {
    console.log("Pasar de un lugar a otro o eliminar");
  }
}
