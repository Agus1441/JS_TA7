function getTheTitles(books){
    let titulos = [];
    for(let i = 0; i<books.length ;i++){
        titulos.push(books[i].titulo)
    }
    console.log(titulos);
}

const libros = [
    { autor: 'Gabriel García Márquez', titulo: 'Cien años de soledad' },
    { autor: 'George Orwell', titulo: '1984' },
    { autor: 'J.K. Rowling', titulo: 'Harry Potter y la piedra filosofal' },
    { autor: 'Jane Austen', titulo: 'Orgullo y prejuicio' },
    { autor: 'Miguel de Cervantes', titulo: 'Don Quijote de la Mancha' }
];

getTheTitles(libros);