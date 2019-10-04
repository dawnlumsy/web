import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSliderModule } from '@angular/material/slider';

const MATERIAL = [ MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, 
    MatRadioModule, MatCheckboxModule, MatMomentDateModule, MatDatepickerModule, MatSliderModule
];
@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
}) export class MaterialModule {}