import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  message: string;
  model = new RegisterModel('', '', '', '', '');
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(
      (data: RegisterModel) => {
        console.log(data);
        this.submitted = true;
        this.message = 'Registration completed successfully';
      },
      (err: any) => {
        console.log(err);
        this.message = 'Something goes wrong.';
      }
    );

  }

  newUser() {
    this.model = new RegisterModel('', '', '', '', '');
  }


}
