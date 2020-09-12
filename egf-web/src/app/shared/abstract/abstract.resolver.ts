import {UserService} from '../../administration/users/service/user.service';

export abstract class AbstractResolver {

  public constructor(protected userService?: UserService) {
  }

  role: any;

  // abstract getRolePath(): string;

  protected async getRole(): Promise<any> {
    const user = await this.userService.user;
    //const temp: Role[] = this.userService.roleObservables$.getValue();
    const uid = user ? user.uid : null;
    /*if (temp.length <= 0 && uid) {
      await this.userService.initRoles(uid, this);
    }*/
    //const roles: Role[] = temp.length > 0 ? temp : this.userService.roleObservables$.getValue();
    return new Promise((resolve) => {
      //this.role = roles.find(role => role.for === this.getRolePath());
      resolve(this.role);
    });
  }
}
