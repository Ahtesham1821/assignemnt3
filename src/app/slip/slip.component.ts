import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.css']
})
export class SlipComponent {
  salaryid : any;
 user:any=[];

constructor(private empservice : ServiceService, private route:Router, private actRoute: ActivatedRoute){}




ngOnInit(): void {

 this.actRoute.queryParams.subscribe((params)=>

 {

  this.salaryid = +params["id"];

  console.log(this.salaryid);

 

 })

 this.GetSalaryDetails();

}




GetSalaryDetails(){

 this.empservice.GetEmpDataById(this.salaryid).subscribe((result:any) =>{

  console.log(result);

  this.user =result;

  console.warn(this.user.id);

 

 })

}
goBack(){
  
  this.route.navigate([''])
  

}



}
