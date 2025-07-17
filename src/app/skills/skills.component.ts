import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills$ = this.resumeData.getSkills();

  // Define which skills are frontend and which are backend
  frontendSkills = [
    'resume.skills.technical.html',
    'resume.skills.technical.css',
    'resume.skills.technical.javascript',
    'resume.skills.technical.typescript',
    'resume.skills.technical.reactjs',
    'resume.skills.technical.angular',
    'resume.skills.technical.tailwindcss',
  ];
  backendSkills = [
    'resume.skills.technical.python',
    'resume.skills.technical.express',
    'resume.skills.technical.mongoose',
    'resume.skills.technical.mongodb',
    'resume.skills.technical.nodejs',
    'resume.skills.technical.flask',
    'resume.skills.technical.django',
  ];

  constructor(private resumeData: ResumeDataService) {}
  ngOnInit() {}
}
