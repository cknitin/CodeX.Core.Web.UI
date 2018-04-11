import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { LoginModel } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = new LoginModel('', '');
  constructor(private accountService: AccountService) {
    this.accountService = accountService;
  }


  ngOnInit() {
  }

  login(): void {
    console.log(this.userLogin);
    this.accountService.login(this.userLogin).subscribe(
      (data: LoginModel) => console.log(data),
      (err: any) => console.log(err)
    );
  }

}
