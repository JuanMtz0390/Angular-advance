import { Component } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component{
 
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1= [
    [10, 40, 100],
  ];

  public labels4: string[] = ['Atendidos', 'OK', 'Cancelados'];
  public data4= [
    [20, 50, 90],
  ];
}
