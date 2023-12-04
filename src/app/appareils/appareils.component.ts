import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../appareil';
import { AppareilService } from '../service/appareil.service';
import { Route, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.css']
})
export class AppareilsComponent implements OnInit{
  @Input() appareilStatus!: boolean;
  appareil : Appareil[] | undefined;
  appareils : Appareil = new Appareil();
  categorie : Categorie[] | undefined;

  constructor(private appareilService : AppareilService, private router : Router,private categorieService : CategorieService){}

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
    this.categorie = data;
    });
  }
  updateAppareils(id : number | undefined){
    this.router.navigate(['update-appareil', id]);
      }

  ngOnInit(): void {
    this.getAppareils();
    this.getCategories();
  }
  private getAppareils(){
    this.appareilService.getAppareilsList().subscribe(data => {
    this.appareil = data;

    });
  }
  deleteAppareil(id : number|undefined){
    this.appareilService.deleteAppareil(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }

  createAppareil(){
    this.appareilService.createAppareil(this.appareils).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
      }

      ngSubmit(){
        this.createAppareil();
      }

      getColor():string {
        if(this.appareilStatus === true) return "green";
        else if (this.appareilStatus === false) return "red";
        else return "white";
      }
    
      // ChangeState():void {
      //   this.service.switchOn(this.id);
      // }

}
