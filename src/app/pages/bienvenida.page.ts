import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'bienvenida-page',
    template: `
    <div class="flex flex-col h-screen w-screen overflow-hidden items-center justify-center content-center bg-[#1b1b1b]">
        <h1 class="text-4xl font-bold text-[#329a7f] m-6">¡Bienvenido al Kiosko de cafe inteligente!</h1>
        <button routerLink="/vasos" class="bg-[#329a7f] rounded-lg px-4 py-2.5 font-bold text-white cursor-pointer hover:scale-110 duration-150">INICIAR</button>
    </div>
    
    `
})

export class BienvenidaPage implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.guardarMaquinaEnLocalStorage();
     }
}