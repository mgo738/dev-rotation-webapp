import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skills-rating',
  imports: [],
  templateUrl: './skills-rating.component.html',
  styleUrl: './skills-rating.component.scss'
})
export class SkillsRatingComponent {
  skills: Skill[] = [
    { name: 'HTML', rating: 9 },
    { name: 'CSS', rating: 6 },
    { name: 'JavaScript', rating: 7 },
    { name: 'TypeScript', rating: 7 },
    { name: 'Angular', rating: 5 },
    { name: 'Java', rating: 1 },
    { name: 'Spring Boot', rating: 0 },
    { name: 'AWS', rating: 6 },
    { name: 'SQL', rating: 8 },
    { name: 'Python', rating: 10 },
  ];

  ratingToPercentage(rating: number): string {
    return `${(rating / 10) * 100}%`;
  }

  fillingColour(rating: number): string {
    switch (rating) {
      case 0:
        return '#990000'
      case 1:
        return '#f30000'
      case 2:
        return '#ff1e00'
      case 3:
        return '#ff6811'
      case 4:
        return '#ff8009'
      case 5:
        return '#ffa600'
      case 6:
        return '#ffe600'
      case 7:
        return '#bbff00'
      case 8:
        return '#a6ff00'
      case 9:
        return '#7bff00'
      case 10:
        return '#07d300'
      default:
        return '#000000'
    }
  }
}
