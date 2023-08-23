// Crear Un Array Y Recorrerlo
let ArrayNombre = new Array(5);

for( let i = 0; i < ArrayNombre.length; i ++ ) {
   ArrayNombre[i] = prompt(" Ingrese Los Nombres Del Array" + (i));
   
}
for ( let i = 0 ; i < ArrayNombre.length; i ++ ) {
    console.log(ArrayNombre[i]);
}