### Exam Four

1. Generirati novi Angular projekat na Dekstop-u,
ime projekta postaviti kao vaše ImePrezime

2. Generisati sljedeće komponente: HomeComponent,
EditMovieComponent

3. Dodati eksterni style za PicoCss

4. Kreirati interface klasu za listu filmova koju ćemo koristiti kroz cijelu aplikaciju.
Lista filmova se nalazi na dnu dokumenta, potrebno je dodati sve propertije ove liste unutar interface klase. Na svim mjestima prilikom korištenja liste inicijalizirati tu listu pomoću interface-a koji kreirate.

5. Kreirati DataService sa dvije funkcije:
- getMovies koja će vraćati sve filmove
- getMoviesById koja će vraćati film pomoću Id-a

6. Na HomeComponent potrebno je uraditi sljedeće stavke:
- Prikazati listu filmova u tabeli sa svim detaljima
- Dodati kolonu Action u kojoj će se nalaziti link natpisa Edit koji vodi na EditMovieComponent
- Iznad tabele dodati dugme "Hide" koje će sakrivati/prikazivati tabelu
- Dodati pipe za formatiranje cijene i postaviti cijenu kao euro
- Ako je broj dostupnih karata manji od 20, prikazati poruku "Only x tickets left"

7. Na EditMovieComponent potrebno je uraditi sljedeće stavke:
- Prikazati detalje odabranog filma unutar forme (Template Driven ili Reactive Form)
- Omogućiti korisniku da izmijeni podatke o filmu i na save prikazati novi film u konzoli

8. Dodati validaciju na Formi u EditMovieComponent:
- Polje "Movie" ne smije biti prazno
- Polje "Theater" ne smije biti prazno
- Polje "Tickets Available" ne smije biti prazno i mora biti broj veći od 0
- Polje "Ticket Price" ne smije biti prazno i mora biti broj veći od 0
- Polje "Show Date" ne smije biti prazno
- Polje "Show Time" ne smije biti prazno

9. Rutirati sve nepostojeće putanje na HomeComponent

```json
[
  { 
    id: 1,
    movie: "The Matrix",
    theater: "Screen 1",
    ticketsAvailable: 120,
    ticketPrice: 10.50,
    showDate: "May 10, 2024",
    showTime: "10:00 AM"
  },
  { 
    id: 3,
    movie: "Inception",
    theater: "Screen 2",
    ticketsAvailable: 90,
    ticketPrice: 11.00,
    showDate: "May 10, 2024",
    showTime: "01:30 PM"
  },
  { 
    id: 2,
    movie: "Interstellar",
    theater: "Screen 3",
    ticketsAvailable: 100,
    ticketPrice: 9.75,
    showDate: "May 10, 2024",
    showTime: "04:45 PM"
  },
  { 
    id: 5,
    movie: "The Dark Knight",
    theater: "Screen 4",
    ticketsAvailable: 80,
    ticketPrice: 12.00,
    showDate: "May 10, 2024",
    showTime: "08:15 PM"
  },
  { 
    id: 4,
    movie: "Avatar",
    theater: "Screen 5",
    ticketsAvailable: 18,
    ticketPrice: 10.00,
    showDate: "May 10, 2024",
    showTime: "10:30 PM"
  }
];
```