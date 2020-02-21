import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomFooterComponent } from '../../app/components/custom-footer/custom-footer.component'
import { CommonModule } from '@angular/common';
import { GButtonComponent } from './g-button/g-button.component';
import { InfoComponent } from './info/info.component';
var module =
    [
        CustomFooterComponent, 
        GButtonComponent,
        InfoComponent,
    ]
@NgModule({
    declarations: module,
    exports: module,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }