# Exam five

1. Kreirati novi Angular projekat na Desktop, ime projekta
postaviti kao vaše ImePrezime.
 - Dodati Picocss stylesheet 

2. Generisati sljedeće komponente: HomeComponent,
NavComponent, UrgentComponent i
NotFoundComponent
 
3. NavComponent dodati na AppComponent, kako bi ova
komponenta mogla biti stalno vidljiva. Na NavComponent
potrebno je dodati navigacijsku traku. Na navigacijskoj traci potrebno da se nalaze
sljedeća dva linka: Home i Urgent. Te nakon kreiranja
navigacijske trake potrebno je rutirati dodane stavke na
način da se otvaraju HomeComponent ili
UrgentComponent.
 
4. Kreirati interface klasu za listu zadataka koju ćemo
koristiti kroz cijelu aplikaciju. Lista zadataka se nalazi na
dnu dokumenta, potrebno je dodati sve propertije ove liste
unutar interface klase. Te svugdje prilikom korištenja liste
incijalizovati tu listu pomoću interface-a koji kreirate.
 
5. Na HomeComponent potrebno je uraditi sljedeće stavke:
- Kreirati listu zadataka
- Prikazati listu zadataka na stranici korištenjem tabele
- Tabelu formatirati na način ukoliko je priority zadatka 'High'
 boju teksta priority polja obojiti u crveno, a
ukoliko je priority 'Low' boju teksta obojiti u zeleno.
- Status formatirati na način da ukoliko je completed true,
da bude ispisano "Completed", a ukoliko je completed false,
da bude ispisano "To Do"
- Potrebno je dodati Action kolonu i unutar nje button ,
tako da ukoliko se klikne na status Completed određenog
zadatka da se isti prebaci u To Do i obratno.
 
6. Potrebno je postaviti da se HomeComponent učitava
defaultno prilikom pokretanja projekta.

7.  Na UrgentComponent je potrebno uraditi sljedeće
stavke:
- Kreirati listu zadataka samo onih koji su 'High' priority
- Za svaki zadatak ispisati
samo naziv zadatka i description.
 
8. Na UrgentComponent iznad tabele zadataka dodati
button koji će imati mogućnost da sakrije ili prikaže cijelu
tabelu. To znači da ukoliko je tabela prikazana, potrebno je
da button ima naziv Sakrij tabelu i klikom na button da se
tabela sakrije i obratno.
 
9. Postaviti Na NotFoundComponent tekst
koji kaže da pretraživana stranica ne postoji, te na ovu
komponentu rutirati sve nepostojeće rute.
 
Statička lista zadataka:
```json
[
  {
    "id": 1,
    "task": "Buy groceries",
    "description": "Milk, eggs, bread, vegetables",
    "dueDate": "2024-05-15",
    "priority": "High",
    "completed": false
  },
  {
    "id": 2,
    "task": "Finish homework",
    "description": "Complete math assignment",
    "dueDate": "2024-05-13",
    "priority": "Medium",
    "completed": false
  },
  {
    "id": 3,
    "task": "Call mom",
    "description": "Wish her happy birthday",
    "dueDate": "2024-05-12",
    "priority": "Low",
    "completed": false
  },
  {
    "id": 4,
    "task": "Go for a run",
    "description": "Run for 30 minutes",
    "dueDate": "2024-05-12",
    "priority": "Medium",
    "completed": false
  },
  {
    "id": 5,
    "task": "Clean the house",
    "description": "Vacuum, mop floors, clean windows",
    "dueDate": "2024-05-12",
    "priority": "High",
    "completed": false
  }
]
```
