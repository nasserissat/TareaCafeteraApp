import { Component } from '@angular/core';

@Component({
  selector: 'pageNotFound',
  template: `
  <div class="py-10 px-28 flex flex-col h-screen items-center justify-center bg-white">

<h1 class="label text-3xl">¡Oops la página que buscabas no ha sido encontrada!</h1>
<img src="../../assets/5_5_.png" alt="404 error" class="w-96 h-96">
<button class="bg-[#329a7f] py-2.5 px-4 rounded-lg text-white font-bold cursor-pointer hover:scale-110 duration-150" routerLink="/vasos">Volver</button>
</div>
  
  `,
  styles: []
})
export class PageNotFound {
  title = 'pagina no encontrada';
}