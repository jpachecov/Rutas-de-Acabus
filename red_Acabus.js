"use strict"


























/**
* Para Dijkstra necesito un nodo
* para guardar si un nodo ya fue visitado 
* y su distancia y su padre en el recorrido.
*/

class nodo_D{
	constructor(id, data){
		this.id = id;
		this.data = data;
		this.isVisited = false;
		this.distance = undefined;
		this.father = undefined;
	}

}

/*
* Aristas No dirigida de A a B con peso w, (A,B)
*/
class Edge{
	constructor(A, B, W){
		this.a = A;
		this.b = B;
		this.w = W;
	}

	getExtremo(nodo){
		if(nodo.id == this.a.id){
			return this.b;
		}
		if(nodo.id == this.b.id){
			return this.a;
		}
	}
}


/**
* Una grafica G = (V,E) la representamos como una lista de vertices y una lista de listas de adyancencias,
*/
class Grafica{

	/**
	* Constructor 
	* La lista de adyacencias es una estructura Tipo EdgeList
	*/

	constructor(listaNodos, EdgeList){
		this.V = listaNodos;
		this.EdgeList = EdgeList;
	}

	/**
	* Obtiene el vértice de esta grafica cuyo identi
	* ficador es id.
	*/
	getVertex(id){
		var elem;
		for(i = 0; i < this.V.length; i++){
			if(this.V[i].id == id){
				elem = this.V[i];
			}	
		}
		return elem;
	}

	/**
	* Regresa la lista de aristas adyacentes al nodo (objetos tipo Edge)
	*/ 
	getAdyacentList(nodo){
		return this.EdgeList.getAdyacentList(nodo.id);
	}
}

/**
* Clase para instaciar un objeto capaz de reaizar el algoritmo de Dijstra para rutas mas cortas.
*/
class Dijkstra{

	// Una grafica y 2 identificadores de nodos.
	constructor(grafica){
		this.G = grafica;
		this.A = null;
		this.B = null;

	}

	getMinPath(a,b) {

		this.A = this.G.getVertex(a.id);
		this.B = this.G.getVertex(b.id);

		// Nodo inicial
		this.A.father = 'root';
		this.A.distance = 0;
		this.current = this.A;


		var arista;
		var vecino;
		var adyacencias;
		var ciclos = 0;
		var recorrido = [];

		// Lista de nodos etiquetados
		var nodos = [];

		// Ciclo principal
		while(!this.B.isVisited){

			this.current.isVisited = true;

			// Obtenemos la lista de adyacencias del nodo actual
			adyacencias = this.G.getAdyacentList(this.current);

			// Actualizamos pesos de los vecinos.
			for(i = 0; i < adyacencias.length; i++){
				arista = adyacencias[i];
				vecino = arista.getExtremo(this.current);

				if(!vecino.isVisited){
					// Actalizamos pesos si es necesario
					if(vecino.distance == undefined || this.current.distance + arista.w  < vecino.distance){
						vecino.distance = this.current.distance + arista.w;
						
						// Actualizamos padre
						vecino.father = this.current;
						nodos.push(vecino);
					}
				}
			}
			this.current = this.getMin(nodos);
			ciclos += 1;	
		}

		// Reconstruimos ruta de A a B
		var n = this.B;
		while(n.father != 'root'){
			recorrido.push(n);
			n = n.father;
		}
		recorrido.push(this.A);
		return recorrido.reverse();

	}


	/*
	* List es una lista de objetos tipo node_D
	* SI list fuera un arbol binario balanceado seria mas eficiente.
	*/

	getMin(list){	
		var min = list[0];
		var min_idx = 0;
		for(var i = 1; i < list.length; i++){
			if(list[i].distance < min.distance){
				min = list[i];
				min_idx = i;
			}
		}
		// Lo borramos
		list.splice(min_idx,1);
		return min;
	}

}


/**
* Estructura que representa una lista de aristas.
*/

class EdgeList{
	constructor(){
		this.list = [];
	}
	/**
	* Agrega una arista a la lista. Si se quiere agregar la arista (a,b)
	* y la aritsa (b,a) ya existe estonces no lo hace
	*/
	append(edge){

		for(var i = 0; i < this.list.length; i++){
			// Estoy comparando directo por objetos pero mejor por id.
			if(this.list[i].a.id == edge.a.id && this.list[i].b.id == edge.b.id || this.list[i].a.id == edge.b.id && this.list[i].b.id == edge.a.id){
				return;
			}
		}
		this.list.push(edge);
	}
	/**
	* Devuelve una lista de aristas que tengan a 'node' como uno de sus extremos
	*/
	getAdyacentList(nodeId){
		var adyacentes = [];
		for(var i = 0; i < this.list.length; i++){
			if(this.list[i].a.id == nodeId || this.list[i].b.id == nodeId){
				adyacentes.push(this.list[i]);
			}
		}
		return adyacentes;
	}
}








































class lista_estaciones{
	constructor(){
		this.lista = {};
	}
	agrega(estacion){
		this.lista[estacion.nombre + '-' + estacion.ruta] = estacion;
	}
}

class estacion{
	constructor(nombre, ruta){
		this.id = -1;
		this.nombre = nombre;
		this.ruta = ruta;
	}
}



todas = new lista_estaciones();