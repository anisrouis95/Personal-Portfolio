import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top.component';
import { MobilesidebarComponent } from './mobilesidebar/mobilesidebar.component';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent,
    MobilesidebarComponent,
    CertificationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Anis Rouis';
}
