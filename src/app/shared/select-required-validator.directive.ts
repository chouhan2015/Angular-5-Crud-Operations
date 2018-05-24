import { Directive,Input } from '@angular/core';
import { Validator, AbstractControl,NG_VALIDATORS } from '@angular/forms'


@Directive ({
    selector : '[appSelectValidator]',
    providers:  [{
        provide : NG_VALIDATORS,
        useExisting : selectRequiredValidatorDirective,
        multi : true
    }]
})


export class selectRequiredValidatorDirective implements Validator{
    @Input() appSelectValidator : string;
    validate(control: AbstractControl): { [ key: string]: any } | null {
        return control.value === this.appSelectValidator ? {'defaultSelected' : true} : null; 

        }
}