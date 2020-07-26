import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(
    private noticiasServ: NoticiasService
  ) {}

  ngOnInit() {
    this.noticiasServ.getTopHeadlines()
      .subscribe( resp => {
        console.log('noticias', resp);
        /* forma normal de tener la información en el array noticias definido por las interfaces */
        // this.noticias = resp.articles;
        this.noticias.push( ...resp.articles )
      })
  }

}
