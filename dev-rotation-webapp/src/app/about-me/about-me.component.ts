import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  age = 19;
  today = new Date();
  startDate = new Date("2025-09-15T00:00:00.000Z")

  atResonate = new Date(this.today.getTime() - this.startDate.getTime())

  totalDaysAtResonate = Math.floor((this.today.getTime() - this.startDate.getTime()) / (8.64*10**7))
  totalHoursAtResonate = Math.floor((this.today.getTime() - this.startDate.getTime()) / (3.6*10**6))
  totalMinutesAtResonate = Math.floor((this.today.getTime() - this.startDate.getTime()) / (60000))

  daysAtResonate = this.atResonate.getDate() - 1
  monthsAtResonate = this.atResonate.getMonth()
  yearsAtResonate = this.atResonate.getFullYear() - 1970;
}
