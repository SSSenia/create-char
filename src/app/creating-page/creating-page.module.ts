import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RaceSetupComponent } from './race-setup/race-setup.component';
import { ClassSetupComponent } from './class-setup/class-setup.component';
import { ThemeSetupComponent } from './theme-setup/theme-setup.component';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    RaceSetupComponent,
    ClassSetupComponent,
    ThemeSetupComponent
  ],
  imports: [
    ColorPickerModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: '', redirectTo: '/create/race', pathMatch: 'full' },
          { path: 'race', component: RaceSetupComponent },
          { path: 'class', component: ClassSetupComponent },
          { path: 'theme', component: ThemeSetupComponent }
        ]
      }
    ])
  ]
})
export class CreatingPageModule { }
