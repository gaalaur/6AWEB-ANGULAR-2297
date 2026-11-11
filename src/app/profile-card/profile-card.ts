
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = `I'm a third-year Information Technology student at Holy Angel University, currently balancing my academic responsibilities with my varsity scholarship. Being a student-athlete has taught me discipline, time management, and perseverance. I'm passionate about technology, creativity, and exploring how things work behind the screen. My biggest career goal is to become a game developer, where I can combine my technical knowledge and creativity to bring interactive ideas to life. I'm always eager to learn new skills, improve myself, and take on new challenges.`;
}
