import { Injectable } from '@angular/core';
import { Experience } from '../helpers/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  public experience: Experience[] = [];

  constructor() {
    this.experience = [
      {
        company: 'La Cornucopia',
        description: 'Mantenimiento y desarrollo de sistemas informáticos aplicando buenas prácticas de programación, administración de base de datos SQL y No SQL, administración de servidores. Actualmente como consultor interino.',
        init_date: '2025-01-01',
        end_date: null,
        actual: true
      },
      {
        company: 'U. Evangélica de El Salvador',
        description: 'Diseño, análisis, desarrollo y mantenimiento de aplicaciones a medida. Integración de nuevas tecnologías y servicios informáticos a los sistemas.',
        init_date: '2023-01-01',
        end_date: '2024-12-31',
        actual: false
      },
      {
        company: 'Mira Law Group, A.P.C.',
        description: 'Desarrollo y mantenimiento de sistemas internos.',
        init_date: '2022-01-01',
        end_date: '2022-12-31',
        actual: false
      }
    ];
  }
}
