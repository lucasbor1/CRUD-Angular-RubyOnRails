import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para animações
import { CommonModule } from '@angular/common';

// Rotas do aplicativo
import { routes } from './app.routes'; // Certifique-se de que este arquivo está configurado corretamente

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuração das rotas
    provideRouter(routes),

    // Configuração do cliente HTTP
    provideHttpClient(),

    // Importação de módulos
    importProvidersFrom(
      BrowserAnimationsModule, // Ativa animações do Angular Material
      CommonModule, // Permite uso de diretivas como *ngFor e *ngIf
      MatToolbarModule, // Toolbar (barra de ferramentas)
      MatCardModule, // Cartões
      MatButtonModule, // Botões estilizados
      MatIconModule, // Ícones
      MatTableModule, // Tabelas
      MatSnackBarModule, // Notificações do tipo "snackbar"
      MatDialogModule, // Modais e diálogos
      MatFormFieldModule, // Campos de formulário
      MatInputModule // Inputs estilizados
    ),
  ],
};
