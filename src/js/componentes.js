import '../css/componentes.css';
//import '../assets/img/webpack-logo.png';
import webpacklogo from '../assets/img/webpack-logo.png';

// debmos colocar export para poder importar  para que que funcionen en otors arichhvos
export const saludar = (nombre) =>{
    console.log('creado etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `hola, ${ nombre }?`;

    document.body.append( h1 );


    // img
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}
