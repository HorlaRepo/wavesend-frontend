import {Component, HostListener, Input} from '@angular/core';
import {NavigationEnd, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
// import {UserInactivityService} from "./services/timeout/user-inactivity.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class AppComponent {
  title: string = 'WaveSend';
  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  isLoginPage: boolean = false;
  isRegisterPage: boolean = false;
  isHomePage: boolean = false;
  isAboutPage: boolean = false;
  isFeesPage: boolean = false;
  isHelpPage: boolean = false;
  isContactPage: boolean = false;
  is404Page: boolean = false;



  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        this.isRegisterPage = event.url === '/register';
        this.isHomePage = event.url === '/';
        this.isAboutPage = event.url === '/about';
        this.isFeesPage = event.url === '/fees';
        this.isHelpPage = event.url === '/help';
        this.isContactPage = event.url === '/contact-us';
        this.is404Page = event.url === '/not-found';
      }
    });
  }

  shouldDisplayHeader(): boolean {
    return this.isHomePage ||
      this.isAboutPage ||
      this.isFeesPage ||
      this.isHelpPage ||
      this.isContactPage ||
      this.is404Page;
  }

  // @HostListener('window:mousemove')
  // onMouseMove() {
  //   if(this.isLoggedIn()){
  //     this.userInactivityService.resetTimer();
  //     console.log('Restarted')
  //   }
  // }

  // @HostListener('window:click')
  // onClick() {
  //   if (this.isLoggedIn()){
  //     console.log('Restarted')
  //     this.userInactivityService.resetTimer();
  //   }
  // }

  // @HostListener('window:keypress')
  // onKeyPress() {
  //   if(this.isLoggedIn()){
  //     this.userInactivityService.resetTimer();
  //   }
  // }

  isLoggedIn(){
    return localStorage.getItem('user') != null
    && localStorage.getItem('token') != null
  }

}
