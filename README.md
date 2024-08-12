# Clean Code - SOLID Principles 🧼

## Deuda Técnica 🧾

La falta de calidad en el código de un proyecto de software se traduce en una deuda técnica que se acumula con el tiempo. Esta deuda técnica se traduce en un costo de mantenimiento y evolución del software que se incrementa con el tiempo. La deuda técnica se puede reducir con la aplicación de buenas prácticas de programación y diseño de software.

### Costos de la deuda Técnica 📉

- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender el código.
- Tiempo adicional en la transferencia del código.

### ¿Cómo pagar la deuda Técnica? 📈

- **Refactorizar el código**: Mejorar la estructura del código sin cambiar su comportamiento.
- **Pruebas unitarias**: Asegurar que el código funciona correctamente.
- **Pruebas automatizadas**: Asegurar que el código sigue funcionando correctamente.
- **Revisión de código**: Asegurar que el código cumple con los estándares de calidad.
- **Documentación**: Asegurar que el código es fácil de entender.

## Convenciones de Nombres de Variables (Pronunciables y Expresivos) 📝

Es importante que los nombres de las variables sean pronunciables y expresivos para que el código sea fácil de leer y entender.

### Tipos de variables 📊

- UpperCamelCase
  - Classes
- lowerCamelCase
  - Variables
  - Funciones
  - Métodos
  - Parámetros
  - Propiedades
  - Objetos
  - Arrays
  - Boolean
  - Numbers
  - Strings
- UPPERCASE
  - Constantes
- snake_case
  - Variables
  - Funciones
  - Métodos
  - Parámetros
  - Propiedades
  - Objetos
  - Arrays
  - Boolean
  - Numbers
  - Strings

### Reglas en bloques de código 📌 (if, else, for, while, funciones, clases, etc)

- Simplicidad es fundamental
- Funciones de tamaño reducido
- Funciones de una sola linea sin causar complejidad
- Funciones con un solo proposito
- Menos de 20 lineas
- Menos de 3 parametros por función, si lo supera se debe crear un interface
- Evitar el uso del "else"
- Evitar el uso de "switch"
- Priorizar el uso de la condicion ternaria "?"

### Ejemplos de nombres de variables 📝

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

// Mal - Classes
class Manager {};
class Data {};
class Info {};
class Individual {};
class Processor {};
class SpecialMonsterView {};

```

### Ejemplo de una funcion refactorizada 📈

```Javascript
// Mal
const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if ( isDead ) {
        result = 1500;
    } else {
        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000;
            }
        }
    }

    return result;
}

// Bien
const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
}): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
};
```

## Principio DRY (Don't Repeat Yourself) 🚫

_"Si quieres ser un programador productivo esfuérzate en escribir código legible"_

### ¿Qué es el principio DRY? 🤔

El principio DRY (Don't Repeat Yourself) es un principio de diseño de software que promueve la reducción de la duplicación de código. El principio DRY se basa en la idea de que cada pieza de conocimiento debe tener una representación única y no ambigua dentro de un sistema.

### ¿Por qué es importante el principio DRY? 📈

- **Facilita el mantenimiento del código**: Al reducir la duplicación de código, se reduce la cantidad de código que se debe mantener.
- **Facilita la evolución del código**: Al reducir la duplicación de código, se facilita la evolución del código.
- **Facilita la comprensión del código**: Al reducir la duplicación de código, se facilita la comprensión del código.
- **Facilita la reutilización del código**: Al reducir la duplicación de código, se facilita la reutilización del código.
