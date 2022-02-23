import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/Utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurservice: UtilisateurService,private router: Router) { }

  ngOnInit() {}

  save(): void {
    this.utilisateurservice.ajoutUtilisateur(this.utilisateur)
    .subscribe(data => {
      console.log(data)
      this.utilisateur = new Utilisateur();
    })
  }

  gotoList() {
    this.router.navigate(['']);
  }

  onSubmit(){
    this.save();
    //this.gotoList();
  }

}
