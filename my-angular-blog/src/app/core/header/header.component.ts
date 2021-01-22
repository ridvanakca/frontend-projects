import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navMenu') navMenu: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
  
}
