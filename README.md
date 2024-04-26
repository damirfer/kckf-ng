# Exam one

1. Kreirati novi Angular projekat na Desktop, ime projekta
postaviti kao vaše ImePrezime.
 
2. Generisati sljedeće komponente: HomeComponent,
NavComponent, ProductComponent i
NotFoundComponent
 
3. NavComponent dodati na AppComponent, kako bi ova
komponenta mogla biti stalno vidljiva. Na NavComponent
potrebno je dodati navigacijsku traku. Na navigacijskoj traci potrebno da se nalaze
sljedeća dva linka: Home i Product. Te nakon kreiranja
navigacijske trake potrebno je rutirati dodane stavke na
način da se otvaraju HomeComponent ili
ProductComponent.
 
4. Kreirati interface klasu za listu proizvoda koju ćemo
koristiti kroz cijelu aplikaciju. Lista proizvoda se nalazi na
dnu dokumenta, potrebno je dodati sve propertije ove liste
unutar interface klase. Te svugdje prilikom korištenja liste
incijalizovati tu listu pomoću interface-a koji kreirate.
 
5. Na HomeComponent potrebno je uraditi sljedeće stavke:
- Kreirati listu proizvoda
- Za svaki proizvod ispisati
samo naziv proizvoda iz liste koju kreirate.
 
6. Potrebno je postaviti da se HomeComponent učitava
defaultno prilikom pokretanja projekta.

7.  Na ProductComponent je potrebno uraditi sljedeće
stavke:
- Kreirati listu proizvoda
- Prikazati listu proizvoda na stranici korištenjem tabele
- Cijenu formatirati na način da bude prikazana kao valuta EUR
- Cijenu formatirati na način da ukoliko je cijena veća
od 100 EUR boju teksta cijene obojiti u crveno, a
ukoliko je cijena manja od 100 EUR boju teksta cijene
obojiti u zeleno.
- Status formatirati na način da ukoliko je status true,
da bude ispisano Aktivan, a ukoliko je status false,
da bude ispisano Neaktivan
- Potrebno je da Aktivan/Neaktivan budu buttoni,
tako da ukoliko se klikne na status Aktivan određenog
proizvoda da se isti prebaci u Neaktivan i obratno.
 
8. Na ProductComponent iznad tabele proizvoda dodati
button koji će imati mogućnost da sakrije ili prikaže cijelu
tabelu. To znači da ukoliko je tabela prikazana, potrebno je
da button ima naziv Sakrij tabelu i klikom na button da se
tabela sakrije i obratno.
 
9. Postaviti Na NotFoundComponent tekst
koji kaže da pretraživana stranica ne postoji, te na ovu
komponentu rutirati sve nepostojeće rute.
 
Statička lista proizvoda:
```json
[
    {
        "id": 1,
        "name": "T-shirt",
        "quantity": 20,
        "price": 25.99,
        "dateAdded": "2022-01-01",
        "status": true,
        "type": "Clothing"
    },
    {
        "id": 2,
        "name": "Jeans",
        "quantity": 15,
        "price": 45.99,
        "dateAdded": "2022-01-02",
        "status": true,
        "type": "Clothing"
    },
    {
        "id": 3,
        "name": "Sneakers",
        "quantity": 10,
        "price": 59.99,
        "dateAdded": "2022-01-03",
        "status": true,
        "type": "Footwear"
    },
    {
        "id": 4,
        "name": "Jacket",
        "quantity": 8,
        "price": 89.99,
        "dateAdded": "2022-01-04",
        "status": true,
        "type": "Clothing"
    },
    {
        "id": 5,
        "name": "Socks",
        "quantity": 30,
        "price": 9.99,
        "dateAdded": "2022-01-05",
        "status": true,
        "type": "Accessories"
    }
]
```