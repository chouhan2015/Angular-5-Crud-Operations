import {Validator, NG_VALIDATORS,AbstractControl } from '@angular/forms';
import {Directive } from '@angular/core';



@Directive ({
    selector : '[appConfirmEqualValidator]',
    providers : [{
        provide : NG_VALIDATORS,
        useExisting : confirmEqualValidatorDirective,
        multi : true
    }]
})

export class confirmEqualValidatorDirective implements Validator{
    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
        const password = passwordGroup.get('password'); 
        const confirmPassword = passwordGroup.get('confirmPassword'); 
        if(password && confirmPassword &&  password.value !==confirmPassword.value){
            return {'notEqual' : true}
        }
        return null;
    }
}