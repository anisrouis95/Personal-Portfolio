import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../resume-data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  animations: [
    trigger('fadeInImage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '600ms 0ms cubic-bezier(.4,0,.2,1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]),
    ]),
    trigger('fadeInTitle', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms 300ms cubic-bezier(.4,0,.2,1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]),
    ]),
    trigger('fadeInSubtitle', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '600ms 600ms cubic-bezier(.4,0,.2,1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]),
    ]),
    trigger('fadeInWriting', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 900ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SummaryComponent implements OnInit {
  summary$ = this.resumeData.getSummary();
  constructor(private resumeData: ResumeDataService) {}
  ngOnInit() {}
}
