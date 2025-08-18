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

  editarCategoria(categoria: any) {
   
    console.log('Editando categoría:', categoria);
    
  
    const nuevoNombre = prompt('Editar nombre:', categoria.nombre);
    if (nuevoNombre !== null) {
      categoria.nombre = nuevoNombre;
      
      this.categoriaService.actualizarCategoria(categoria.id, categoria).subscribe({
        next: (response) => {
          console.log('Categoría actualizada:', response);
         
          this.listarCategorias();
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
        }
      });
    }
  }
}
