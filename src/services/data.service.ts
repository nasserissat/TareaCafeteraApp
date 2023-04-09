import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { MaquinaCafe } from 'src/models/models.model';

@Injectable({providedIn: 'root'})
export class DataService {
    MaquinaCafe: MaquinaCafe ={
        cafe: {cantidadCafe: 14},
        vasoPequenos: {cantidadDisponible: 8, contenido: 3},
        vasoMediano: {cantidadDisponible: 12, contenido: 5},
        vasoGrande: {cantidadDisponible: 1, contenido: 7},
        azucar: {cantidadAzucar: 5}
    }
    constructor(private toastr: ToastrService) { }
    guardarMaquinaEnLocalStorage(): void {
        const maquinaCafeString = localStorage.getItem('maquinaCafe');
  if (maquinaCafeString) {
    // Si ya existe una máquina de café en localStorage, utiliza esa
    this.MaquinaCafe = JSON.parse(maquinaCafeString);
    console.log('maquina existente: ', maquinaCafeString)
  } else {
    // Si no, crea una nueva con los valores predeterminados
    this.MaquinaCafe = {
        cafe: {cantidadCafe: 14},
        vasoPequenos: {cantidadDisponible: 8, contenido: 3},
        vasoMediano: {cantidadDisponible: 12, contenido: 5},
        vasoGrande: {cantidadDisponible: 1, contenido: 7},
        azucar: {cantidadAzucar: 5}
    };
    console.log('maquina nueva', this.MaquinaCafe)
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
        try {
            this.verificarDisponibilidadEnLocalStorage(variable);
        } catch (error) {
            throw error
            
        }
        const maquinaCafe = JSON.parse(localStorage.getItem('maquinaCafe') || 'null');

        
        // actualizar la cantidad de café disponible según el tamaño del vaso seleccionado
        switch (variable) {
          case 'pequeno':
            maquinaCafe.cafe.cantidadCafe -= maquinaCafe.vasoPequenos.contenido;
            if(maquinaCafe.cafe.cantidadCafe <= 0){
                maquinaCafe.cafe.cantidadCafe = 0
            }
            maquinaCafe.vasoPequenos.cantidadDisponible--;
            if(maquinaCafe.vasoPequenos.cantidadDisponible <= 0){
                maquinaCafe.vasoPequenos.cantidadDisponible = 0
            }
            break;
          case 'mediano':
            maquinaCafe.cafe.cantidadCafe -= maquinaCafe.vasoMediano.contenido;
            if(maquinaCafe.cafe.cantidadCafe <= 0){
                maquinaCafe.cafe.cantidadCafe = 0
            }
            maquinaCafe.vasoMediano.cantidadDisponible--;
            if(maquinaCafe.vasoMediano.cantidadDisponible <= 0){
                maquinaCafe.vasoMediano.cantidadDisponible = 0
            }
            break;
          case 'grande':
            maquinaCafe.cafe.cantidadCafe -= maquinaCafe.vasoGrande.contenido;
            if(maquinaCafe.cafe.cantidadCafe <= 0){
                maquinaCafe.cafe.cantidadCafe = 0
            }
            maquinaCafe.vasoGrande.cantidadDisponible--;
            if(maquinaCafe.vasoGrande.cantidadDisponible <= 0){
                maquinaCafe.vasoGrande.cantidadDisponible = 0
            }
            break;
          default:
            break;
        }
        switch (variable) {
            case 'una-cucharada':
              maquinaCafe.azucar.cantidadAzucar -= 1;
              if(maquinaCafe.azucar.cantidadAzucar <= 0){
                maquinaCafe.azucar.cantidadAzucar = 0
              }
              break;
            case 'dos-cucharada':
                maquinaCafe.azucar.cantidadAzucar -= 2;
                if(maquinaCafe.azucar.cantidadAzucar <= 0){
                    maquinaCafe.azucar.cantidadAzucar = 0
                  }
              break;
            case 'tres-cucharada':
                maquinaCafe.azucar.cantidadAzucar -= 3;
                if(maquinaCafe.azucar.cantidadAzucar <= 0){
                    maquinaCafe.azucar.cantidadAzucar = 0
                  }
              break;
            default:
              break;
          }
        // guardar la máquina de café actualizada en localStorage
        localStorage.setItem('maquinaCafe', JSON.stringify(maquinaCafe));
      }
      verificarDisponibilidadEnLocalStorage(variable: string){
        const maquinaCafe = JSON.parse(localStorage.getItem('maquinaCafe') || 'null');
        switch(variable){
            case 'pequeno':
                if(maquinaCafe?.vasoPequenos.cantidadDisponible === 0){
                    throw new Error('Lo sentimos, los vasos pequeños se han agotado');
                }
                if(maquinaCafe?.cafe.cantidadCafe == 0 || maquinaCafe?.cafe.cantidadCafe < maquinaCafe?.vasoPequenos.contenido){
                    throw new Error('Lo sentimos, no hay suficinete café');
                }
                break;
            case 'mediano':
                if(maquinaCafe?.vasoMediano.cantidadDisponible === 0){
                    localStorage.setItem('maquinaCafe', JSON.stringify(maquinaCafe));
                    throw new Error('Lo sentimos, los vasos medianos se han agotado');
                }
                if(maquinaCafe?.cafe.cantidadCafe == 0 || maquinaCafe?.cafe.cantidadCafe < maquinaCafe?.vasoMediano.contenido){
                    throw new Error('Lo sentimos, no hay suficinete café');
                }
                break;
            case 'grande':
                if(maquinaCafe?.vasoGrande.cantidadDisponible === 0){
                    throw new Error('Lo sentimos, los vasos grandes se han agotado');
                }
                if(maquinaCafe?.cafe.cantidadCafe == 0 ||  maquinaCafe?.cafe.cantidadCafe < maquinaCafe?.vasoGrande.contenido){
                    throw new Error('Lo sentimos, no hay suficinete café');
                }
                break;
                default:
                break;
        }
        switch (variable) {
            case 'una-cucharada':
                let azucarSolicitada1 = 1
                if (maquinaCafe.azucar.cantidadAzucar === 0 || maquinaCafe.azucar.cantidadAzucar < azucarSolicitada1) {
                    throw new Error('No hay suficiente azúcar');
                  }
              break;
            case 'dos-cucharada':
                let azucarSolicitada2 = 2
                if (maquinaCafe.azucar.cantidadAzucar === 0 || maquinaCafe.azucar.cantidadAzucar < azucarSolicitada2) {
                    throw new Error('No hay suficiente azúcar');
                  }
              break;
            case 'tres-cucharada':
                let azucarSolicitada3 = 3
                if (maquinaCafe.azucar.cantidadAzucar === 0 || maquinaCafe.azucar.cantidadAzucar < azucarSolicitada3) {
                    throw new Error('No hay suficiente azúcar');
                  }
              break;
            default:
              break;
          }
        
      }
     
}