import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  GetPatientRecord(){
    return this.http.get("http://localhost:46942/getCompanyEmpDatas")
  }

  Adddata(dat:any){
    console.log("service data : ",dat)
    return this.http.post("http://localhost:46942/AddingEmpData",dat)
  }

   UpdateData(dat:any){
    return this.http.put("http://localhost:46942/UpdateingEmpData",dat)
   }
   
   
   GetEmpDataById(id:any){
      return this.http.get("http://localhost:46942/GetEmpDataById?UpdateId="+id)
   }
   DeleteData(data:any){
    console.log(data);
    
    return this.http.delete("http://localhost:46942/DeleteEmpData?UpdateId="+data)
   }
}
