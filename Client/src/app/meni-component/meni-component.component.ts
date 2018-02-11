import { Component, OnInit } from '@angular/core';
import { Page } from 'app/model/page';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { VestService } from 'app/meni-component/vest.service';
import { KategorijaService } from 'app/meni-component/kategorija.service';
import { Vest } from 'app/model/vest';
import { Kategorija } from 'app/model/kategorija';

@Component({
  selector: 'app-meni-component',
  templateUrl: './meni-component.component.html',
  styleUrls: ['./meni-component.component.css']
})
export class MeniComponentComponent implements OnInit {
  kategorija: Kategorija;

  kategorije: Kategorija[];



  page: Page<Vest>;

  currentPageNumber: number;


  vesti: Vest;

  forEdit: Vest;


  kategorijaId: number;
  nameItem: string = "";




  ngOnInit() {
    this.currentPageNumber = 0;
    this.loadData();

  }

  constructor(private authenticationService: AuthenticationService, private vestService: VestService, private kategorijaService: KategorijaService) { }



  changePage(i: number) {
    this.currentPageNumber += i;
    this.loadData();
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }

  resetFilter() {
    window.location.reload();
  }

  loadData() {
    this.vestService.getVestiPage(this.currentPageNumber).subscribe(data => {
      this.page = data;

    });

    this.vestService.getVesti().subscribe(
      (vesti) => {
        this.vesti = vesti;
      }
    );
    this.kategorijaService.getKategorije().subscribe(
      (kategorije) => {
        this.kategorije = kategorije;
      }
    );
  }

  addVest(vest: Vest) {
    this.vestService.saveVest(vest).subscribe(
      (savedComp) => {
        this.loadData();
      }
    )
  }

  delete(vest: Vest) {
    this.vestService.deleteVest(vest).subscribe(
      (response) => {
        this.loadData();
      },
      (error) => {
        console.log('This is not good!', 'Oops!');
      }
    );
  }

  edit(meniItem: Vest) {
    //kopija objekta
    this.forEdit = Object.assign({}, meniItem);
  }

  filter(nameItem: string, kategorija: Kategorija, currentPageNumber: number) {
    this.vestService.filterByNameAndKategorija(this.nameItem, this.kategorija, this.currentPageNumber).subscribe(
      (data) => { this.page = data; })
  }

  byId(kategorija1: Kategorija, kategorija2: Kategorija) {
    if (kategorija1 && kategorija2) {
      return kategorija1.id === kategorija2.id;
    }
  }

}
