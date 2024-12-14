export interface LoginInterface {
    id: number;
    userName: string;
    token: string;
    roles: string[];
    refreshToken: string;
    name: string;
    accessLevelId: string;
  }

  export interface LoginInputValue {
    username: string;
    password: string;
  }