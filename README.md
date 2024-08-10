# Clean Code - SOLID

## Deuda Técnica

La falta de calidad en el código de un proyecto de software se traduce en una deuda técnica que se acumula con el tiempo. Esta deuda técnica se traduce en un costo de mantenimiento y evolución del software que se incrementa con el tiempo. La deuda técnica se puede reducir con la aplicación de buenas prácticas de programación y diseño de software.

### Costos de la deuda Técnica

- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender el código.
- Tiempo adicional en la transferencia del código.

### Cómo pagar la deuda Técnica?

- **Refactorizar el código**: Mejorar la estructura del código sin cambiar su comportamiento.
- **Pruebas unitarias**: Asegurar que el código funciona correctamente.
- **Pruebas automatizadas**: Asegurar que el código sigue funcionando correctamente.
- **Revisión de código**: Asegurar que el código cumple con los estándares de calidad.
- **Documentación**: Asegurar que el código es fácil de entender.

## Convenciones de Nombres de Variables (Pronunciables y Expresivos)

Es importante que los nombres de las variables sean pronunciables y expresivos para que el código sea fácil de leer y entender.

```Javascript
// Mal
const n = 54;
const cat = 't-shirt';
const ddmmyyyy = new Data('August 25, 2021');

// Bien
const age = 54;
const category = 't-shirt';
const birthDate = new Data('August 25, 2021');

// Mal - Arrays
const fruit = ['apple', 'banana', 'orange'];

// Bien - Arrays
const fruits = ['apple', 'banana', 'orange'];
const fruitNames = ['apple', 'banana', 'orange'];

// Mal - Boolean
const open = true;
const write = true;
const active = false;
const noValues = false;
const empty = false;

// Bien - Boolean
const isOpen = true;
const canWrite = true;
const isActive = false;
const hasValues = false;
const isEmpty = false;

// Mal - Numbers
const cars = 10;
const fruits = 3;

// Bien - Numbers
const numberOfCars = 10;
const maxFruits = 3;
const minFruits = 1;
const totalFruits = 3;
const totalOfCars = 3;

// Mal - Functions
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFielsValid();

// Bien - Functions
createUser();
updateUser();
sendEmail();
```
