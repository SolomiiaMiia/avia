import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GetFlightsService } from 'src/app/shared/services/getflightsservice';
import { SearchbarComponent } from '../searchBar/searchbar.component';

@Component({

  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() search = '';

  arrival: any;
  departure: any;
  filteradArrival: any;
  filteradDeparture: any;

  constructor(private arrive: GetFlightsService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.arrive.getAll().subscribe(data => {
      this.arrival = data.arrival;
      this.departure = data.departure;
      this.filteradArrival = data.arrival;
      this.filteradDeparture = data.departure;
      console.log(data);
    });
  }

  searchInfo(e: any) {

    console.log(this.filteradArrival);

    this.filteradArrival = this.arrival?.filter((elem: any) => elem["airportFromID.city"]?.startsWith(this.search) || elem.codeShareData[0].codeShare?.startsWith(this.search) )

  }

}
