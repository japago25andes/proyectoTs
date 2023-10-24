import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [new Curso ("Practicas esenciales para le agilismo", 20, 90, true, 2019),
new Curso ("Ingenieria para la web", 15, 99, true, 2018),
new Curso ("Pruebas automatizadas", 25, 50, false, 2020),
new Curso ("Principios de arquiectura", 30, 75, true, 2020)]

export const ap = new Aprendiz("John Alexander", "Pardo Gonzalez", "avatar.jpg", 33, NivelEducativo.POSGRADO, cursos);

console.log(ap.cursos);

let aprendizTable : HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable : HTMLElement = document.getElementById("estadisticas")!;

mostrarDatosPrendiz(ap);
mostrarEstadisticas(ap);

function mostrarDatosPrendiz(aprendiz: Aprendiz): void {

    let tbodyAprendiz = document.createElement("tbody");

    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`

    aprendizTable.appendChild(tbodyAprendiz);

}

function mostrarEstadisticas(aprendiz: Aprendiz): void{
    let numeroCertificados:number = aprendiz.darCursosCertificados();
    let trElement: HTMLElement = document.createElement("tr");

    trElement.innerHTML = `<td><b>Cursos Cetificados</b></td><td>${numeroCertificados}</td>`;

    estadisticasTable.appendChild(trElement);

}