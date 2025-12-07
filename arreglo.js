const personas =[
    {nombre:"Juan", edad:20, ciudad:"Ciudad de méxico"},
    {nombre:"Enrique", edad:20, ciudad:"Guadalajara"},
    {nombre:"Victor", edad:20, ciudad:"Veracruz"},
]
console.log("Lista de personas.")
for(const persona of personas){
    console.log("Hola mi nombre es "+persona.nombre+" tengo "+persona.edad+" años y vivo en la ciudad de "+persona.ciudad)
}