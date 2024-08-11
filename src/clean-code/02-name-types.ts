(() => {
  // arreglo de temperaturas celsius
  const arrayOfNums = [33.6, 12.34];
  const temperaturesCelcius = arrayOfNums;

  // Dirección ip del servidor
  const ip = "123.123.123.123";
  const serverIp = ip;

  // Listado de usuarios
  const people = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const users = people;

  // Listado de emails de los usuarios
  const emails = users.map((user) => user.email);
  const userEmails = emails;

  // Variables booleanas de un video juego
  const jump = false;
  const canJump = jump;
  const run = true;
  const canRun = run;
  const noTieneItems = true;
  const hasItems = noTieneItems;
  const loading = false;
  const isLoading = loading;

  // Otros ejercicios
  // tiempo inicial
  const start = new Date().getTime();
  const startTime = start;
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const end = new Date().getTime() - start;
  const endTime = end;

  // Funciones
  // Obtiene los libros
  function book() {
    throw new Error("Function not implemented.");
  }
  const getBooks = book;

  // obtiene libros desde un URL
  function BooksUrl(url: string) {
    throw new Error("Function not implemented." + url);
  }
  const getBooksFromUrl = BooksUrl;

  // obtiene el área de un cuadrado basado en sus lados
  function areaCuadrado(lados: number) {
    throw new Error("Function not implemented." + lados);
  }
  const squareArea = areaCuadrado;

  // imprime el trabajo
  function printJobIfJobIsActive() {
    throw new Error("Function not implemented.");
  }
  const printJob = printJobIfJobIsActive;
})();
