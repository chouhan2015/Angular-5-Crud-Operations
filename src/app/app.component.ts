import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import {OnInit, ViewChild } from '@angular/core';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  showLoadingIndicator = true;
  name:string;
    constructor(private _router: Router,private toastr: ToastrService) {
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }

    })  
}

ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;
  }

  onClick() {
    this.toastr.success('This is success message');
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}