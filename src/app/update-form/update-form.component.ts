import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  constructor (private UpdaData: ServiceService ){}
  
  Data= new FormGroup({


    employeeName:new FormControl('',Validators.required),
    
      
    employeeId: new FormControl('',Validators.required),
    
     
    companyName:new FormControl(),
      
    companyAddress:new FormControl('', Validators.required),
      
     currentMonth:new FormControl(''),
     currentYear: new FormControl (''), 
     dateOfJoining: new FormControl (),
     
     bankName:new FormControl(''),
     bankAcNo:new FormControl(),
     
     basic: new FormControl(),
     hra:new FormControl(''),
     departmentId: new FormControl(),
     designationId:new FormControl()
  
  
  
     
    
     })
     onFormSubmit(data:any){
      
        this.UpdaData.UpdateData(data).subscribe((res:any)=>
  
        {
     
         console.warn(res);
         alert("New Patient updated!");
  
      location.reload();
  
       }
        )}
     }
    

