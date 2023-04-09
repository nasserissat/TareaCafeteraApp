import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'azucar-page',
    template: `
    <div class="flex flex-col justify-center items-center content-center h-[80vh]">
        <h1 class="text-2xl text-[#329a7f] font-semibold flex justify-center items-center h-1/3">Seleccione cuantas cucharadas de azúcar desea: </h1>
        <div class="flex w-1/2 h-2/3 items-start justify-between content-center">
            <div (click)="selectAzucar('una-cucharada')" class="flex flex-col items-center justify-center h-auto mx-3 hover:bg-[#329a7f]/20 rounded pb-10">
                <img src="../../assets/azucar-1-removebg-preview.png" alt="vaso de 7 onz" class="cursor-pointer hover:scale-150 duration-300 h-80">
                <p class="text-2xl text-[#329a7f] font-semibold">1 cucharada</p>
            </div>
            <div (click)="selectAzucar('dos-cucharada')" class="flex flex-col items-center justify-center h-auto mx-3 hover:bg-[#329a7f]/20 rounded pb-10">
                <img src="../../assets/azucar-3.png" alt="vaso de 7 onz" class="cursor-pointer hover:scale-150 duration-300 h-80">
                <p class="text-2xl text-[#329a7f] font-semibold">2 cucharada</p>
            </div>
            <div (click)="selectAzucar('tres-cucharada')" class="flex flex-col items-center justify-center h-auto mx-3 hover:bg-[#329a7f]/20 rounded pb-10">
                <img src="../../assets/azucar-4.png" alt="vaso de 7 onz" class="cursor-pointer hover:scale-150 duration-300 h-80">
                <p class="text-2xl text-[#329a7f] font-semibold">3 cucharada</p>
            </div>
        </div>
    </div>
    `
})

export class AzucarPage implements OnInit {
    constructor(private router: Router, private dataService: DataService,private toastr: ToastrService) { }

    ngOnInit() {this.dataService.obtenerMaquinaDesdeLocalStorage() }
    selectAzucar(cucharadas: string){
        try {
            this.dataService.verificarDisponibilidadEnLocalStorage(cucharadas)
        } catch (error: any) {
            this.toastr.error(error.message, 'error')
            return
        }
        this.dataService.actualizarMaquinaEnLocalStorage(cucharadas)
        this.router.navigate(['/gracias'])
    }
}