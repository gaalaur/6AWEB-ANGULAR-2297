import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Lauren A. Garin';
  location = 'San Fernando, Pampanga';
  email = 'laurenagarin@gmail.com';
  phone = '0908 584 8778';


profile = 'I enjoy front-end development, creating visually engaging websites, and exploring UI design. I also aspire to become a game developer, combining creativity and programming to bring ideas to life.';


skills = [
  'HTML and CSS',
  'JavaScript',
  'Angular',
  'Object-Oriented Programming',
  'Problem Solving',
  'UI/UX Design'
];


  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
