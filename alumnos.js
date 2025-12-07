const alumnos = [
    {nombre:"Juan", calificacion:5.4},
    {nombre:"Carlos", calificacion:8.0},
    {nombre:"Jose", calificacion:6.9},
    {nombre:"Marcos", calificacion:9.0}
]
console.log("Alumnos con calificacion igual o mayor a 8:")
for(let alumno of alumnos){
    if(alumno.calificacion>=8){
        console.log("Nombre: "+alumno.nombre)
        console.log("Calificacion: "+alumno.calificacion)
    }
}