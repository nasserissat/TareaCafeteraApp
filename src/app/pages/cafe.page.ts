import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'cafe-page',
    template: `
    <div class="flex flex-col justify-center items-center content-center h-[80vh]">
        <h1 *ngIf="hayCafe && countDown != 0" class="text-2xl text-[#329a7f] font-semibold flex justify-center items-center h-1/3 mb-6">Se le está sirviendo su café, por favor espere</h1>
        <h1 *ngIf="hayCafe && countDown != 0" class="text-7xl text-[#329a7f] font-semibold flex justify-center items-center h-1/3">{{countDown}}</h1>
        <h1 *ngIf="this.countDown === 0" class="text-7xl text-[#329a7f] font-semibold flex justify-center items-center h-1/3">Listo, café servido</h1>
        <button *ngIf="this.countDown === 0"  routerLink="/azucar" class="bg-[#329a7f] rounded-lg px-4 py-2.5 font-bold text-white cursor-pointer hover:scale-110 duration-150">CONTINUAR</button>

    </div>
    
    `
})

export class CafePage implements OnInit {
    countDown: number = 1
    hayCafe: boolean = true;
    constructor(private router: Router, private dataService: DataService) { }

    ngOnInit() {
      
        setInterval(()=>{
            setTimeout(() => {
                if (this.countDown > 0) {
                    this.countDown--;
                  } else {
                       
                  }
            }, 1000);
        }, 1000)  
     }
}