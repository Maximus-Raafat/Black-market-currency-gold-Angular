import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router:Router) {}

  updatePramater(newName:string):void {
    console.log(newName)
    const currentRouter = this.router.url;
    const updateRoute = currentRouter.replace('home',`${newName}`)
    this.router.navigateByUrl(updateRoute)
  }
}
