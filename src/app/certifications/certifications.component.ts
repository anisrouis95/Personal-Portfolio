import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements OnInit {
  certificates$ = this.resumeData.getCertificates();

  constructor(private resumeData: ResumeDataService) {}

  ngOnInit() {}
}
