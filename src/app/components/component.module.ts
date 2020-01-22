import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {CustomFooterComponent} from '../../app/components/custom-footer/custom-footer.component'
import { CommonModule } from '@angular/common';
import { GButtonComponent } from './g-button/g-button.component';
@NgModule({
    declarations: [CustomFooterComponent,GButtonComponent],
    exports: [CustomFooterComponent,GButtonComponent],
    imports: [ CommonModule ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}