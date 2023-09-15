import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  constructor(private routerService: RoutingService){}

  items:any;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        command: () => {
          this.routerService.redirectToPage('')
        }
      },
      {
        label: 'Ingresar un nuevo empleado',
        icon: 'pi pi-fw pi-pencil',
        command: () => {
          this.routerService.redirectToPage('add-new-employee')
        }
      },
      {
        label: 'Consultar empleados',
        icon: 'pi pi-fw pi-search',
        command: () => this.routerService.redirectToPage('view-employees')
      },
    ];
  }


}
