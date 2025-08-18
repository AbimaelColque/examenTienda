import { Component } from '@angular/core';
import { CategoriasService } from '../core/services/categorias.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  imports: [FormsModule, CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss'
})
export class Categorias {

  categorias:any[]=[];
  nuevaCategoria: string = '';

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


  agregarCategoria() {
    if (!this.nuevaCategoria.trim()) {
      alert('El nombre de la categoría no puede estar vacío');
      return;
    }

    const categoria = { nombre: this.nuevaCategoria.trim() };

    this.categoriaService.crearCategoria(categoria).subscribe({
      next: (response) => {
        console.log('Categoría creada:', response);
        this.nuevaCategoria = ''; 
        this.listarCategorias(); 
      },
      error: (error) => {
        console.error('Error al crear categoría:', error);
        alert('Error al crear la categoría');
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
