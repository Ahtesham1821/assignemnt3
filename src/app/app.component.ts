import { Component } from '@angular/core';
import {ServiceService} from './service.service'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { UpdateFormComponent } from './update-form/update-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2Angular';

  constructor(private PatientData: ServiceService ,private route:Router, private matDialog:MatDialog) {}
  data:any
  dataSource=new MatTableDataSource<any>();
  displayedColumns= ['employeeId','employeeName','designation','dateOfJoinning','Action'];

  ngOnInit(): void {
    this.GetPatientRecord(); 
  }
  GetPatientRecord() {
    this.PatientData.GetPatientRecord().subscribe((result:any) => {
      debugger
      this.data=result;
      this.dataSource=this.data;
    })
  }
  AddData(){
    this.matDialog.open(UpdateComponent);
}
UpdateData(data:any){
this.matDialog.open(UpdateFormComponent,{
  data,
});

}
getPaySlip(sid:any){
  
  this.route.navigate(['Slip'],{queryParams:{id:sid}})
  console.warn(sid)
}
DeleteData(Id:any){
  debugger
  this.PatientData.DeleteData(Id).subscribe(res=>{
    alert ("Patient data Deleted");

    this.GetPatientRecord();
  })
}
}