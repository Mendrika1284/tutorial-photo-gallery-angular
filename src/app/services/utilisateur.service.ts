import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Utilisateur } from '../model/Utilisateur';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:8081/api/ajoutUtilisateur';

  ajoutUtilisateur(utilisateur: Utilisateur){
    return this.http.post<Utilisateur>(this.Url,utilisateur);
  }

}
