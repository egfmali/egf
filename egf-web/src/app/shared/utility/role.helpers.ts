

export class RoleHelpers {

  // private static map = definitions;
  private static map = [];

  static checkIfFalse(role) {
    for (const key in role) {
      if (key !== 'for' && role[key] === true) {
        return false;
      }
    }
    return true;
  }

  static checksIfFalse(roles) {
    for (const role of roles) {
      if (!RoleHelpers.checkIfFalse(role)) {
        return false;
      }
    }
    return true;
  }

  static checkRole(url, roles) {
    const map = RoleHelpers.map;
    const m = map.find(__ => url.includes(__.url));
    if (!m) {
      return false;
    }
    let name = m.data.name;
    const available = m.data.available;

    let sub = available;
    if (!name) {
      for (const array of map) {
        const key = array.url;
        if (url.includes(key)) {
          name = key;
          const part = url.substr(key.length + 2);

          if (part === 'new') {
            sub = ['add'];
          } else {
            sub = ['edit'];
          }

        }
      }
    }

    let role = roles.find(r => r.for === name);
    let redirect = false;
    if (!role) {
      const keys = map.filter(__ => __.data.name !== name).map(__ => __.data.name);
      role = RoleHelpers.checkOtherKeys(keys, roles);
      if (!role) {
        return false;
      }
      name = role.for;
      redirect = true;
    }

    if (role['for'] === name && (sub.length === 0 || RoleHelpers.has(role, sub))) {
      const _m = map.find(__ => __.data.name === name);
      if (_m) {
        return {url: url, redirect: redirect};
      }
    }

    return false;
  }

  static has(role, available) {
    for (const key of available) {
      if (role[key]) {
        return true;
      }
    }

    return false;
  }

  private static checkOtherKeys(keys: string[], roles: any) {
    for (const key of keys) {
      const role = roles.find(__ => __.for === key);
      if (role) {
        return role;
      }
    }
    return null;
  }
}
