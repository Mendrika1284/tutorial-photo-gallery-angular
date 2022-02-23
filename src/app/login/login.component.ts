import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
email: string;
mdp: string;
  constructor(private router: Router) { }

  ngOnInit() {}

  gotoAccueil() {
    this.router.navigate(['/acceuil']);
  }

  onSubmit(){
    this.gotoAccueil();
  }

}



