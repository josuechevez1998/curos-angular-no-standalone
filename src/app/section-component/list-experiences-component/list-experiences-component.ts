import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from './services/experiences.service';
import { Experience } from './helpers/experience.interface';

@Component({
  selector: 'app-list-experiences-component',
  standalone: false,
  templateUrl: './list-experiences-component.html',
  styleUrls: ['./list-experiences-component.css']
})
export class ListExperiencesComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experiencesService: ExperiencesService) { }

  ngOnInit(): void {
    this.experiences = this.experiencesService.experience;
    console.log('Experiencias cargadas:', this.experiences);
  }


  formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'short' });
  }


}
