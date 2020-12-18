import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpAnimalComponent } from './help-animal/help-animal.component';

@NgModule({
    declarations:[AboutComponent, ContactComponent,HelpAnimalComponent],
    imports:[CommonModule,RouterModule],
    exports:[AboutComponent, ContactComponent,HelpAnimalComponent]
})

export class DumbComponentsModule{}