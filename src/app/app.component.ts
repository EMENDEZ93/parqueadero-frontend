import { Component } from '@angular/core';
import { ParqueaderoService } from './parqueadero/parqueadero.service';
import { Message } from './utils/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parqueadero-frontend';

  alertMessageTrm = {} as Message;
  
  trm: any;

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit() {
  }

}
