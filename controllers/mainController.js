let controller = {
    home: (req, res) => {
        res.render('home')
    },
    about: (req, res) => {
        res.render('about')
    }
};

/* res.render() -> renderiza la vista y envía el HTML resultante como respuesta.
Para indicar qué vista vamos a renderizar y enviarla al cliente, usamos el método res.render().
El método render se encuentra dentro del objeto response de la petición y como
parámetro debemos enviar un string, con el nombre de la vista que queremos renderizar.
No hace falta aclararle la carpeta en donde está almacenada esa vista. 
Tampoco hace falta aclarar la extensión del archivo */

module.exports = controller;