# despegar-test

1 - Ejercicio de maquetación:
![Maqueta de desarrollar](/maqueta.png)

- [x] Maquetar la página adjunta en HTML5 de la forma mas fiel posible.
- [x] Utilizar css3 cuando sea posible aplicando 'Graceful degradation' en los navegadores que no soporten.
- [x] Compatibilidad con IE > 8 ,FF > 4 , Safari y Chrome.
- [x] Se valorará el uso de Sprites CSS para las imágenes.

2 - Ejercicio JavaScript:

Una vez generado el maquetado, hacer que los hoteles del listado
se muestren en base a una información simulada de la siguiente estructura JSON.

Generar la lógica en una clase que maneje esta información obtenida y la represente en el DOM.
Una vez representada agregar un 'listener' al boton 'ver disponibilidad' haga que le muestre
al usuario de cualquier forma posible, las fechas de 'availability' de los datos.

- [ ] Será requisito que el JSON dado sea cargado asincronicamente.
- [ ] Se valorará generar un diagrama de clases para manilupar los datos.
- [ ] Se pueden usar librerías estilo jQuery / prototype.
- [ ] Se valorará el uso de templates y patron MVC para la representación.
- [ ] No hace falta tomar en cuenta el paginado, ni tampoco que deban mostrarse en el mapa.

```json
{
	"hotels" : [
		{
			"name" : "Rio Othon Palace",
			"adress" : "Cesare Street 321",
			"stars" : "3",
			"description" : "Confortable",
			"rating" "8",
			"comments" : "20",
			"price" : "215",
			"availability" : {
				"from" : "2013-03-02",
				"to" : "2013-03-22"
			}
		},
		{
			"name" : "Granada Hotel Rio de Janeiro",
			"adress" : "Fake street 123",
			"stars" : "4",
			"description" : "Muy Confortable",
			"rating" "8",
			"comments" : "60",
			"price" : "148",
			"availability" : {
				"from" : "2013-02-01",
				"to" : "2013-02-28"
			}
		},
		{
			"name" : "Ibiza Hotel",
			"adress" : "Via Cesare Battisti 133",
			"stars" : "2",
			"description" : "Poco confortable",
			"rating" "5",
			"comments" : "10",
			"price" : "127",
			"availability" : {
				"from" : "2013-05-12",
				"to" : "2013-05-18"
			}
		},
		{
			"name" : "Rio Othon Palace 2",
			"adress" : "Cesare Street 221",
			"stars" : "3",
			"description" : "Confortable",
			"rating" "7",
			"comments" : "5",
			"price" : "200",
			"availability" : {
				"from" : "2013-03-06",
				"to" : "2013-03-10"
			}
		},
	]
}
```