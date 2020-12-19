import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpAnimalComponent } from './help-animal/help-animal.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations:[AboutComponent, ContactComponent,HelpAnimalComponent, NotFoundComponent],
    imports:[CommonModule,RouterModule],
    exports:[AboutComponent, ContactComponent,HelpAnimalComponent, NotFoundComponent]
})

export class DumbComponentsModule{}