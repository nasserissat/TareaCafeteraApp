import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'kiosko-cafetera-app',
    template: `
    <div class="flex flex-col w-screen h-screen bg-[#1b1b1b] overflow-hidden">
        <header class="flex w-full h-[10vh] bg-[#1b1b1b] border-b border-[#329a7f] items-center justify-between">
            <p class="text-4xl font-bold text-[#329a7f] ml-8">Kiosko Cafetera App</p>
            <i (click)="salir()" class="fa-solid fa-arrow-right-from-bracket text-4xl mr-8 text-[#329a7f] cursor-pointer hover:scale-105 duration-150 hover:text-red-600"></i>
        </header>
        <main class="flex flex-col w-full h-[80vh] bg-[#1b1b1b] mx-8">
            <router-outlet></router-outlet>
        </main>
        <footer class="flex w-full h-[10vh] border-t border-[#329a7f] bg-[#1b1b1b] items-center justify-between">
            <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] ml-8">Copyright © 2023 <span class="cursor-pointer">Nasser Issa 2019-8015 Tarea TDD</span></p>
            <div class="flex flex-col justify-center items-center mr-12">
                <p class="text-xs 2xl:text-sm font-bold text-[#329a7f]">Tablero de disponibilidad:</p>
                <div class="flex">
                    <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] mx-3 mt-2">Café: {{cafeDisponible}}</p>
                    <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] mx-3 mt-2">Vasos 3 Onz: {{vasoSmallDisponible}}</p>
                    <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] mx-3 mt-2">Vasos 5 Onz: {{vasoMediumDisponible}}</p>
                    <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] mx-3 mt-2">Vasos 7 Onz: {{vasoLargeDisponible}}</p>
                    <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] mx-3 mt-2">Azúcar: {{azucarDisponible}}</p>
                </div>
                <p class="text-sm font-bold text-white mt-2">(Los datos de este tablero se actualizan al finalizar el proceso completo)</p>
            </div>
        </footer>
    </div>
    
    `
})

export class KioskoCafeteraPage implements OnInit {
    cafeDisponible!: number;
    vasoSmallDisponible!: number;
    vasoMediumDisponible!: number;
    vasoLargeDisponible!: number;
    azucarDisponible!: number;
    constructor(private router: Router, private toastr: ToastrService, private dataService: DataService) {

     }
     salir(){
        const result = confirm('¿SEGURO DESEA SALIR?')
        if(result){
            this.router.navigate(['/bienvenida']);
        }
     }

    ngOnInit() {
        this.dataService.obtenerMaquinaDesdeLocalStorage();
            this.cafeDisponible = this.dataService.MaquinaCafe.cafe.cantidadCafe;
            this.vasoSmallDisponible = this.dataService.MaquinaCafe.vasoPequenos.cantidadDisponible;
            this.vasoMediumDisponible = this.dataService.MaquinaCafe.vasoMediano.cantidadDisponible;
            this.vasoLargeDisponible = this.dataService.MaquinaCafe.vasoGrande.cantidadDisponible;
            this.azucarDisponible = this.dataService.MaquinaCafe.azucar.cantidadAzucar;
        }
}