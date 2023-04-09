import { Injectable } from '@angular/core';
import { MaquinaCafe } from 'src/models/models.model';

@Injectable({providedIn: 'root'})
export class DataService {
    MaquinaCafe: MaquinaCafe ={
        cafe: {cantidadCafe: 8},
        vasoPequenos: {cantidadDisponible: 8, contenido: 3},
        vasoMediano: {cantidadDisponible: 12, contenido: 5},
        vasoGrande: {cantidadDisponible: 0, contenido: 7},
        azucar: {cantidadAzucar: 4}
    }
    constructor() { }
    guardarMaquinaEnLocalStorage(): void {
        const maquinaCafeString = localStorage.getItem('maquinaCafe');
  if (maquinaCafeString) {
    // Si ya existe una máquina de café en localStorage, utiliza esa
    this.MaquinaCafe = JSON.parse(maquinaCafeString);
  } else {
    // Si no, crea una nueva con los valores predeterminados
    this.MaquinaCafe = {
      cafe: {cantidadCafe: 8},
      vasoPequenos: {cantidadDisponible: 8, contenido: 3},
      vasoMediano: {cantidadDisponible: 12, contenido: 5},
      vasoGrande: {cantidadDisponible: 0, contenido: 7},
      azucar: {cantidadAzucar: 4}
    };
  }
  // Guarda la máquina de café actual en localStorage
  localStorage.setItem('maquinaCafe', JSON.stringify(this.MaquinaCafe));
    }

    obtenerMaquinaDesdeLocalStorage(): MaquinaCafe | null {
        const maquinaCafeString = localStorage.getItem('maquinaCafe');
        if (maquinaCafeString) {
            return JSON.parse(maquinaCafeString);
        }
        return null;
    }
    actualizarMaquinaEnLocalStorage(variable: string) {
        // obtener la máquina de café desde localStorage
    
        const maquinaCafe = JSON.parse(localStorage.getItem('maquinaCafe') || 'null');

        
        // actualizar la cantidad de café disponible según el tamaño del vaso seleccionado
        switch (variable) {
          case 'pequeno':
            maquinaCafe.cafe.cantidadCafe -= maquinaCafe.vasoPequenos.contenido;
            maquinaCafe.vasoPequenos.cantidadDisponible--;
            break;
          case 'mediano':
            maquinaCafe.cafe.cantidadCafe -= maquinaCafe.vasoMediano.contenido;
            maquinaCafe.vasoMediano.cantidadDisponible--;
            break;
          case 'grande':
            maquinaCafe.cafe.cantidadCafe -= maquinaCafe.vasoGrande.contenido;
            maquinaCafe.vasoGrande.cantidadDisponible--;
            break;
          default:
            break;
        }
        switch (variable) {
            case 'una-cucharada':
              maquinaCafe.azucar.cantidadAzucar -= 1;
              break;
            case 'dos-cucharada':
                maquinaCafe.azucar.cantidadAzucar -= 2;
              break;
            case 'tres-cucharada':
                maquinaCafe.azucar.cantidadAzucar -= 3;
              break;
            default:
              break;
          }
        // guardar la máquina de café actualizada en localStorage
        localStorage.setItem('maquinaCafe', JSON.stringify(maquinaCafe));
      }
}