import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  loginService(userName:string,password:string){
   let data={
      userName:'jonersha@gmail.com',
      passWord:'123123'
  }
    this.http.post('https://store.besheger.com',data).subscribe((val)=>{},response=>{},()=>{console.log("The POST observable is now completed.");})
  }
}
