var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, username, galerianame, email, password, repitpassword, imagenperfil) {
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
    return Usuario;
}());
