import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
})
export class ProductDialogComponent {
  product: any = {
    name: '',
    description: '',
    price: null,
    stock: null,
  }; // Inicializar com valores padrão

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly dialogRef: MatDialogRef<ProductDialogComponent>,
    private readonly productService: ProductService
  ) {
    // Preencher os campos caso esteja no modo de edição
    if (data.mode === 'edit') {
      this.product = { ...data.product };
    }
  }

  // Salvar Produto (Adicionar ou Editar)
  saveProduct(): void {
    // Validação dos campos antes de enviar
    if (!this.product.name || !this.product.price || this.product.price <= 0 || this.product.stock < 0) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente!');
      return;
    }

    const payload = { product: this.product }; // Dados enviados ao backend

    if (this.data.mode === 'add') {
      // Adicionar novo produto
      this.productService.createProduct(payload).subscribe({
        next: () => this.dialogRef.close(true),
        error: () => alert('Erro ao adicionar produto. Tente novamente.'),
      });
    } else if (this.data.mode === 'edit') {
      // Atualizar produto existente
      this.productService.updateProduct(this.product.id, payload).subscribe({
        next: () => this.dialogRef.close(true),
        error: () => alert('Erro ao editar produto. Tente novamente.'),
      });
    }
  }
}
