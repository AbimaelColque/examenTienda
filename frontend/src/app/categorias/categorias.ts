import { Component } from '@angular/core';
import { CategoriasService } from '../core/services/categorias.service';

@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss'
})
export class Categorias {

  categorias:any[]=[];

  constructor(private categoriaService:CategoriasService){

  }

  ngOnInit():void{
    this.listarCategorias();
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe({
      next:(rows)=>{
        this.categorias=rows;
        console.log(this.categorias);
      }
    });
  }
}
