# Practice Three

1. Generirati novi Angular projekat na Dekstop-u,
ime projekta postaviti kao vaše ImePrezime

2. Generisati sljedeće komponente: HomeComponent,
NewBookComponent, BookDetailsComponent

3. Kreirati interface klasu za listu knjiga koju ćemo koristiti kroz cijelu aplikaciju. Lista knjiga se nalazi 
na dnu dokumenta, potrebno je dodati sve propertije ove liste unutar intercae klase. Na svim mjestima prilikom korištenja liste inicijalizirati tu listu pomoću interface-a koji kreirate.

4. Kreirati DataService sa dvije funkcije:
- getBooks koja će vraćati sve knjige
- getBooksById koja će vraćati knjigu pomoću njenog Id-a

5. Na HomeComponent potrebno je uraditi sljedeće stavke:
- Prikazati listu knjiga u tabeli sa svim detaljima
- Dodati kolonu Action u kojoj će se nalaziti link natpisa Details koji vodi na BookDetailsComponent
- Iznad tabele dodati dugme "Create" koje će voditi na NewBookComponent

6. Na NewBookComponent potrebno je uraditi sljedeće stavke: 
- Koristeći Reactive Forms Module napraviti formu
- Postaviti sva polja kao obavezna
- Na submit forme, formu ispisati u konzoli

7. Na BookDetailsComponent potrebno je uraditi sljedeće stavke:
- Prikazati detalje knjige
- Dodaj dugme koje će prikazivati i sakrivati detalje knjige
- Dodaj dugme koje će vraćati korisnika nazad na HomeComponent

8. Napraviti CenturyPipe koji će na osnovu godine publikacije knjige
vraćati u kojem je stoljeću knjiga napisana

9. U HomeComponent tabeli dodati novu kolonu Century i koristeći CenturyPipe
prikazati stoljeće u kojem je napisana knjiga
- Oznaciti godinu izdavanja knjige crvenom bojom ukoliko je godina izdavanja manja od 1900
- Oznaciti godinu izdavanja knjige zelenom bojom ukoliko je godina izdavanja veca od 1900

10. Rutirati sve nepostojeće putanje na HomeComponent



```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Fiction",
    "publication_year": 1925
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "publication_year": 1960
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Science Fiction",
    "publication_year": 1949
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "publication_year": 1813
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "publication_year": 1951
  }
]
```
