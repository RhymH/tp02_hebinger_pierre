import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.scss']
})
export class FormulaireClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Client {
  nom: string;
  prenom: string;
  adresse: string;
  codepostal: number;
  tel: number;
  mail: string;
  passwd: string;

  constructor(nom: string, prenom: string, adresse: string, codepostal: number, tel: number, mail: string, passwd: string) {

    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.codepostal = codepostal;
    this.tel = tel;
    this.mail = mail;
    this.passwd = passwd;

  }
}
