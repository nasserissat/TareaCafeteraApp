import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'gracias-page',
    template: `
      <div class="flex flex-col h-screen w-screen overflow-hidden items-center justify-center content-center bg-[#1b1b1b]">
        <h1 class="text-6xl font-bold text-[#329a7f] m-6">¡Puede recoger su café!</h1>
        <h1 class="text-4xl font-bold text-[#329a7f] m-6">¡Gracias por preferirnos!</h1>
        <button routerLink="/bienvenida" class="bg-[#329a7f] rounded-lg px-4 py-2.5 font-bold text-white cursor-pointer hover:scale-110 duration-150">VOLVER</button>

    </div>
    `
})

export class GraciasPage implements OnInit {
    constructor(private router: Router) { }
    count = 6
    ngOnInit() {
        
      
     }
}