import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  summary$ = this.resumeData.getSummary();
  constructor(private resumeData: ResumeDataService) {}
  ngOnInit() {}
}
