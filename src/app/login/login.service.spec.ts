import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { Login } from './login';

describe('LoginService', () => {
  let service: LoginService;
  let login: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be authenticated', (s: string) => {

    let entrou = false;

    if(login.entrar('API_KEY', '17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4')){
      entrou = true;
    }

    expect(entrou).toBeTruthy();
  });
});
