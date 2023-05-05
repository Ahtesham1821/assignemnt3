import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  data:any

  DataForms= new FormGroup({


  employeeName:new FormControl('',Validators.required),
  
    
  employeeId: new FormControl('',Validators.required),
  
   
  companyName:new FormControl(),
    
  companyAddress:new FormControl('', Validators.required),
    
   currentMonth:new FormControl(''),
   currentYear: new FormControl (''), 
   dateOfJoining: new FormControl (),
   uan: new FormControl (''),
   pfno: new FormControl(''),
   bankName:new FormControl(''),
   bankAcNo:new FormControl(),
   esiNo:new FormControl(''),
   basic: new FormControl(),
   hra:new FormControl(''),
   departmentId: new FormControl(),
   designationId:new FormControl()



   
  
   })
   constructor (private UpdateData: ServiceService ){}
   onFormSubmit(data:any)

 {

  this.UpdateData.Adddata(data).subscribe((res:any)=>

   {

    console.warn(res);

   

    alert("New Patient Added!");

    location.reload();

   

   })

 }
   
}