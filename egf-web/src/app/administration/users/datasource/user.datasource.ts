import {AbstractCustomDatasource} from "../../../shared/abstract/abstract.custom.datasource";
import {UserService} from "../service/user.service";
import {User} from "../model/user";


export class UserDatasource extends AbstractCustomDatasource<User> {

  constructor(protected service: UserService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['name', 'email', 'phone'];
  }
}
