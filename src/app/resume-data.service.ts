import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeDataService {
  private dataUrl = 'assets/resume-data.json';
  private data$ = this.http.get<any>(this.dataUrl).pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  getSummary() {
    return this.data$.pipe(map((data) => data.summary));
  }
  getSkills() {
    return this.data$.pipe(map((data) => data.skills));
  }
  getExperience() {
    return this.data$.pipe(map((data) => data.experience));
  }
  getProjects() {
    return this.data$.pipe(map((data) => data.projects));
  }
  getEducation() {
    return this.data$.pipe(map((data) => data.education));
  }
  getCertificates() {
    return this.data$.pipe(map((data) => data.certificates));
  }
}
