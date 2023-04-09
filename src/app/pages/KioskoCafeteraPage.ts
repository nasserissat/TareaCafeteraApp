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
        <footer class="flex w-full h-[10vh] border-t border-[#329a7f] bg-[#1b1b1b] items-center">
        <p class="text-xs 2xl:text-sm font-bold text-[#329a7f] ml-8">Copyright © 2023 <span class="cursor-pointer">Nasser Issa 2019-8015 Tarea TDD ADM Proyecos de software</span></p>
        </footer>
    </div>
    
    `
})

export class KioskoCafeteraPage implements OnInit {
    constructor(private router: Router, private toastr: ToastrService, private dataService: DataService) {

     }
     salir(){
        const result = confirm('¿SEGURO DESEA SALIR?')
        if(result){
            this.router.navigate(['/bienvenida']);
        }
     }

    ngOnInit() {
     }
}