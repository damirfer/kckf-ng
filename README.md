# Exam Two

1. Kreirati novi Angular projekat na Desktop, ime projekta
   postaviti kao vaše ImePrezime.

2. Generirajte sljedeće komponente unutar projekta: NavComponent, HomeComponent, AboutComponent, ContactComponent i NotFoundComponent.
3. NavComponent dodati na AppComponent, kako bi ova
   komponenta mogla biti stalno vidljiva. Na NavComponent
   potrebno je dodati navigacijsku traku. Na navigacijskoj traci potrebno da se nalaze
   Home, About i Contact. Te nakon kreiranja
   navigacijske trake potrebno je rutirati dodane stavke na
   način da se otvaraju HomeComponent, AboutComponent i ContactComponent.
4. Generirajte servis naziva Data Service. U servisu implementirajte metodu "getRandomQuote()" koja će koristiti API (https://api.quotable.io/random) kako bi dohvatila nasumični citat.
   Implementirajte interface IQuote za oblik podataka citata.
5. Koristeći servis DataService u AboutComponent prikažite nasumični citat.
6. Napravite formu za kontakt u ContactComponent-u. Forma treba sadržavati polja za ime, email adresu i poruku. Kada se forma pošalje, prikažite unesene podatke u konzoli. (Template-Driven Form ili Reactive Form)
7. Omogućite korisniku da klikom na dugme na Home stranici bude preusmjeren na About stranicu.
8. Postaviti Na NotFoundComponent tekst
   koji kaže da pretraživana stranica ne postoji, te na ovu
   komponentu rutirati sve nepostojeće rute.