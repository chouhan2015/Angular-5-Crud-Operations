import { Injectable} from '@angular/core';
import {Employee } from '../models/employee.model'

@Injectable()
export class EmployeeService {
    private listEmployee : Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            phoneNumber: 2345978640,
            email: 'mark@pragimtech.com',
            dateofbirth: new Date('10/12/2016'),
            department: 'IT',
            isActive: true,
            photopath: 'assets/images/img1.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateofbirth: new Date('11/20/1979'),
            department: 'HR',
            isActive: true,
            photopath: 'assets/images/img2.jpg'

        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateofbirth: new Date('3/25/1976'),
            department: 'IT',
            isActive: false,
            photopath: 'assets/images/img3.png'

        }
    ]
    getEmployee() : Employee[]{
        return this.listEmployee;
    }

    save(employee : Employee){
        this.listEmployee.push(employee);
    }
    
}