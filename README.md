📂 Proyecto de Manipulación de Objetos en JavaScript
Este proyecto contiene una serie de ejercicios prácticos en JavaScript que trabajan con objetos, demostrando diferentes operaciones como iteración, modificación, filtrado, métodos de objetos y análisis de propiedades.

📁 Estructura del Proyecto
text
📂 proyecto-objetos/

├── auto.js               # Iteración sobre propiedades de un objeto

├── personas.js           # Modificación de propiedades de un objeto

├── alumnos.js            # Filtrado de objetos en un arreglo

├── arreglo.js            # Iteración sobre un arreglo de objetos

├── rectangulo.js         # Objeto con método (función como propiedad)

├── contarPropiedades.js  # Conteo de propiedades de un objeto

└── README.md             # Este archivo

📋 Descripción de los Archivos
1. auto.js - Iteración sobre Propiedades
Propósito: Muestra cómo recorrer todas las propiedades de un objeto usando for...in.

Entrada: {marca: "Ford", modelo: "F-150", año: "1975"}

Salida:

text
marca:Ford
modelo:F-150
año:1975
Lógica: Usa el bucle for...in para acceder a cada propiedad y su valor.

2. personas.js - Modificación de Objetos
Propósito: Demuestra cómo agregar y modificar propiedades de un objeto existente.

Entrada: {nombre: "Alex", edad: 26, ocipacion: "programador"}

Modificaciones:

Agrega: ciudad: "Aguascalientes"

Modifica: ocipacion: "Doctor"

Salida:

text
Nombre: Alex
Edad: 26
Ocupacion: Doctor
Ciudad: Aguascalientes
Nota: Hay un error ortográfico en "ocipacion" (debería ser "ocupacion").

3. alumnos.js - Filtrado de Objetos en Arreglo
Propósito: Filtra y muestra alumnos con calificación igual o mayor a 8.

Entrada: Arreglo de 4 objetos de alumnos con nombre y calificación

Salida:

text
Alumnos con calificacion igual o mayor a 8:
Nombre: Carlos
Calificacion: 8
Nombre: Marcos
Calificacion: 9
Lógica: Usa for...of para iterar y condicional if para filtrar.

4. arreglo.js - Presentación de Personas
Propósito: Muestra cómo iterar sobre un arreglo de objetos y acceder a sus propiedades.

Entrada: Arreglo de 3 objetos persona con nombre, edad y ciudad

Salida:

text
Lista de personas.
Hola mi nombre es Juan tengo 20 años y vivo en la ciudad de Ciudad de méxico
Hola mi nombre es Enrique tengo 20 años y vivo en la ciudad de Guadalajara
Hola mi nombre es Victor tengo 20 años y vivo en la ciudad de Veracruz
5. rectangulo.js - Objeto con Método
Propósito: Crea un objeto con propiedades y un método que realiza un cálculo.

Estructura:

Propiedades: alto, ancho

Método: area() que calcula el área

Salida:

text
Rectangulo: 
Ancho = 19
Alto = 12
Area = 228
Concepto clave: Uso de this para referenciar propiedades dentro del método.

6. contarPropiedades.js - Análisis de Objetos
Propósito: Cuenta el número de propiedades que tiene un objeto.

Entrada: {nombre: "Alex", edad: 26, ocipacion: "programador", ciudad: "Aguascalientes"}

Salida: "El numero de propiedades es: 4"

Lógica: Usa Object.keys() para obtener un arreglo de propiedades y .length para contarlas.

🚀 Cómo Ejecutar
Asegúrate de tener Node.js instalado en tu sistema.

Navega hasta la carpeta del proyecto en tu terminal.

Ejecuta cualquiera de los archivos con el comando:

bash
node nombre_del_archivo.js
Por ejemplo:

bash
node auto.js
🛠️ Habilidades Practicadas
Creación y manipulación de objetos JavaScript

Iteración sobre objetos con for...in

Iteración sobre arreglos de objetos con for...of

Adición y modificación de propiedades

Uso de métodos dentro de objetos

Acceso a propiedades con notación de punto y corchetes

Uso de Object.keys() para análisis de objetos

Aplicación de lógica condicional en estructuras complejas

📝 Notas y Errores Comunes
Errores ortográficos:

"ocipacion" en lugar de "ocupacion" (varios archivos)

"inpares" en lugar de "impares" (proyecto anterior)

Mejoras sugeridas:

En alumnos.js, se podría usar filter() para un código más limpio:

javascript
const aprobados = alumnos.filter(alumno => alumno.calificacion >= 8);
En arreglo.js, todas las personas tienen 20 años - podría variarse para mayor realismo.

Concepto importante:

for...in → para iterar propiedades de objetos

for...of → para iterar elementos de arreglos

✨ Posibles Extensiones del Proyecto
Validación de datos: Agregar validación para asegurar que los datos sean correctos.

Funciones constructoras: Refactorizar para usar funciones constructoras o clases.

Persistencia de datos: Guardar los objetos en localStorage o en archivos.

Interfaz gráfica: Crear una interfaz web para interactuar con los objetos.

Operaciones CRUD: Implementar operaciones completas de creación, lectura, actualización y eliminación.

Exportación/Importación: Convertir objetos a JSON y viceversa.

Pruebas unitarias: Agregar pruebas para cada funcionalidad.

Autor: Alexander
Tecnologías: JavaScript (ES6+), Node.js
Propósito: Educativo - Práctica de manipulación de objetos
Nivel: Intermedio - Conceptos de objetos y arreglos de objetos
