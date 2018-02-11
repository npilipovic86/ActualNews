import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Vest } from 'app/model/vest';



@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  vest: Vest;
  id: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.http.get(`api/tiding/${this.id}`).subscribe(
        (res: any) => {
          this.vest = res;
        }
      )
    })

  }

}
