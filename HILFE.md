# JS Snake

## JavaScript Hilfe

------------------------------------------------------------

### Datentypen

#### String (Text)
```javascript
let variable = "Das ist ein String";
```


#### Number (ganze Zahl)
```javascript
let variable = 123;
```

#### Float (Zahl mit Nachkommastellen)
```javascript
let variable = 0.123;
```

#### Boolean (wahr oder falsch)
```javascript
let variable = true;
```

#### Array (Listen)
```javascript
let variable = [10, 20, 30];
```

#### Objekt (Listen mit bennanten Einträgen)
```javascript
let variable = { a: 10, b: 20, c: 30};
```

------------------------------------------------------------

### Sprachkonstrukte


#### Bedingungen (if)
```javascript
if(5 > 3)
  // ... hier Code, der ausgeführt wird, wenn Bedingung erfüllt ist
}
```

#### Bedingungen (if - else)
```javascript
if(a && b)
  // ... hier Code, der ausgeführt wird, wenn Bedingung erfüllt ist
}
else {
  // ... hier Code, der ausgeführt wird, wenn Bedingung NICHT erfüllt ist
}
```

#### For-Schleifen:
```javascript
for(let i=0; i < 5; i++){
  // ... hier Code in der For-Schleife
}
```

#### While-Schleifen
```javascript
while(!gameOver)
  // ... hier Code in der While-Schleife
}
```



#### Funktionen erstellen:
```javascript
function meineFunktion() {
  // ... hier Code der Funktion
}

function meineFunktion(erstesArgument, zweitesArgument) {
  // ... hier Code der Funktion, mit zwei Argumenten
}

function meineFunktion() {
  // ... hier Code der Funktion, mit Rückgabewert
  return 3;
}
```

#### Funktionen aufrufen:
```javascript
meineFunktion();

meineFunktion(erstesArgument, zweitesArgument);

let ergebnis = meineFunktion();
```

------------------------------------------------------------

### Mit "canvas" arbeiten

#### Setup (Zeichencontext und Größe)
```javascript
canvas=document.getElementById("canvas");

canvas.width = 200;
canvas.height = 200;

ctx = canvas.getContext("2d");
```

#### Zeichenfarbe festlegen
```javascript
ctx.fillStyle = "blue";
```

Liste der Farb-Namen:

https://html-color-codes.info/color-names/


#### Rechteck zeichen
```javascript
ctx.fillRect(x, y, width, height);
```

------------------------------------------------------------

### Mit Arrays (Listen) arbeiten

#### Ein Element hinten in der Liste anfügen
```javascript
array.push( {a: 1, b: 2} );
```

#### Das erste Element von der Liste entfernen
```javascript
array.shift());
```


------------------------------------------------------------

### Mit Zeit arbeiten

#### Etwas 1x in 2 Sekunden passieren lassen
```javascript
setTimeout(einmalFunktion, 2000)
```

#### Etwas alle 2 Sekunden passieren lassen
```javascript
setInterval(vielfachFunktion, 1000)
```

#### Zeitversetzte Funktion stoppen
```javascript
clearTimeout(timeout);

clearInterval(interval)
```

------------------------------------------------------------

### Mit Tastatur Eingaben arbeiten

#### Tastatur Ereignisse verarbeiten
```javascript
document.addEventListener("keydown", onKeyDown);

function onKeyDown(evt){
  // "evt" enthält Informationen zu dem Ereignis
}
```

#### Gedrückte Tasten erkennen
```javascript
function onKeyDown(evt){
  // evt.code == "ArrowLeft"
  // evt.code == "ArrowUp"
  // evt.code == "ArrowRight"
  // evt.code == "ArrowDown"
}
```

------------------------------------------------------------

### Mathe

#### Zufallszahl erzeugen (zwischen 0 und 1, z.B. 0.312379)
```javascript
Math.random()
````

#### Eine Zahl runden (Nachkommastellen entfernen)
```javascript
Math.floor();
```
#### Ganze Zufallszahl zwischen 0 und 30 erzeugen
```javascript
Math.floor(Math.random() * 30); // z.B. 13
```