
class Usuario { //CONSTRUCTOR
  private id: number;
  private nombre: string;
  private username: string;
  private galerianame: string;
  private email: string;
  private password: string;
  private repitpassword: string;
  private imagenperfil: string;
  //private Galeria/*[]*/ galerias: number[];
  private numeroGaleria: number;

  constructor (id: number, nombre: string, username: string, galerianame: string, email: string, password: string, repitpassword: string, imagenperfil: string){
    this.id = id;
    this.nombre = nombre;
    this.username = username;
    this.galerianame = galerianame;
    this.email = email;
    this.password = password;
    this.repitpassword = repitpassword;
    this.imagenperfil = imagenperfil;
    this.numeroGaleria = 0;
  }

}
