import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'vasos-page',
    template: `
    <div class="flex flex-col justify-center items-center content-center h-[80vh]">
        <h1 class="text-2xl text-[#329a7f] font-semibold flex justify-center items-center h-1/3">Seleccione el tamaño de su vaso: </h1>
        <div class="flex w-1/2 h-2/3 items-start justify-between content-center">
            <div (click)="selectVaso('pequeno')" class="flex flex-col items-center justify-center h-auto hover:bg-[#329a7f]/20 rounded pb-10">
                <img src="../../assets/vaso-small-removebg-preview.png" alt="vaso de 7 onz" class="cursor-pointer hover:scale-150 duration-300 h-80">
                <p class="text-2xl text-[#329a7f] font-semibold">Pequeño (3 Onz)</p>
            </div>
            <div (click)="selectVaso('mediano')" class="flex flex-col items-center justify-center h-auto hover:bg-[#329a7f]/20 rounded pb-10">
                <img src="../../assets/vaso-md-removebg-preview.png" alt="vaso de 7 onz" class="cursor-pointer hover:scale-150 duration-300 h-80">
                <p class="text-2xl text-[#329a7f] font-semibold">Mediano (5 Onz)</p>
            </div>
            <div (click)="selectVaso('grande')" class="flex flex-col items-center justify-center h-auto hover:bg-[#329a7f]/20 rounded pb-10">
                <img src="../../assets/vaso-xs-removebg-preview.png" alt="vaso de 7 onz" class="cursor-pointer hover:scale-150 duration-300 h-80">
                <p class="text-2xl text-[#329a7f] font-semibold">Grande (7 Onz)</p>
            </div>
        </div>
    </div>
`
})

export class VasosPage implements OnInit {
    constructor(private router: Router, private dataService: DataService, private toastr: ToastrService) { }

    ngOnInit() {
        this.dataService.obtenerMaquinaDesdeLocalStorage()
     }
    
     selectVaso(tipoDeVaso: string) {
        try {
            this.dataService.verificarDisponibilidadEnLocalStorage(tipoDeVaso);
        } catch (error: any) {
            this.toastr.error(error.message, 'error')
            return
        }
  
        this.dataService.actualizarMaquinaEnLocalStorage(tipoDeVaso);
        
        this.router.navigate(['/cafe']);
      }
}