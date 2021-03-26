import { Component } from '@angular/core';
import { DBService } from './shared/services/db_service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopKeeperAppV1';
  constructor(private bdServer: DBService){
  }
  ngOnIt(): void {
  }
}
