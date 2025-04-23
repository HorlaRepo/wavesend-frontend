import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  isScrolled = false;
  currentRoute: string = '/';

  constructor(private router: Router, private renderer: Renderer2) { 
    // Listen to route changes
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // Close mobile menu when navigating
      this.isCollapsed = true;
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  ngOnInit(): void {
    // Check initial scroll position
    this.checkScroll();
    
    // Add padding to body to account for fixed header
    this.renderer.setStyle(document.body, 'padding-top', '76px');
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    // Apply scrolled class when page is scrolled down
    this.isScrolled = window.scrollY > 50;
  }
}