import {Injectable} from '@angular/core';
import {Role} from "../model/role";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class RoleService {


  get roles(){
   return   environment.roles.map((map) => this.fromMap(map));
  }

    fromMap(map: any): Role{
        return <Role> {
          name: map.name,
          description: map.description,
        };
    }




    public checkInRole(url, roles) {

    }





}
