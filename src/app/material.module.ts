import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatButtonModule, 
    MatToolbarModule,
    MatMenuModule,
    MatIconModule ,
    MatCardModule
} from '@angular/material';

@NgModule({
    declarations: [
      
    ],
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule
    ]
  })
  export class MaterialModule { }