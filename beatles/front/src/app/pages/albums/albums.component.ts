import { Component, OnInit } from '@angular/core';
import { DiscosService } from 'src/app/services/disco.service';
import { DiscoInterface } from 'src/app/interface/discoInterface';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit { public discos: DiscoInterface[] = [];

  constructor(private discosService: DiscosService) { }

  ngOnInit(): void {
    this.discosService.getDiscos().subscribe((data: any) => {
      this.discos = data
    console.log(this.discos)
  })
  }

}
