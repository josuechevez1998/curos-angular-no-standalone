import { Component } from '@angular/core';

@Component({
  selector: 'app-list-technologies-component',
  standalone: false,
  templateUrl: './list-technologies-component.html',
  styleUrls: ['./list-technologies-component.css']
})
export class ListTechnologiesComponent {
  technologies = [
    { name: 'React JS', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Node.js con Express', category: 'Backend' },
    { name: 'MySQL', category: 'Base de Datos' },
    { name: 'SQL Server', category: 'Base de Datos' },
    { name: 'MongoDB', category: 'Base de Datos NoSQL' },
    { name: 'Laravel', category: 'Backend / PHP' },
    { name: 'CodeIgniter 3', category: 'Backend / PHP' },
    { name: 'CodeIgniter 4', category: 'Backend / PHP' }
  ];

  getLogo(name: string): string {
    const logos: { [key: string]: string } = {
      'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'Node.js con Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'SQL Server': 'https://img.icons8.com/color/48/000000/microsoft-sql-server.png',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Laravel': 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
      'CodeIgniter 3': 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg',
      'CodeIgniter 4': 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg'
    };
    return logos[name] || '';
  }

  getDescription(name: string): string {
    const descriptions: { [key: string]: string } = {
      'React JS': 'Librería de JavaScript para construir interfaces de usuario.',
      'Angular': 'Framework de desarrollo frontend mantenido por Google.',
      'Node.js con Express': 'Entorno de ejecución para JavaScript del lado del servidor.',
      'MySQL': 'Sistema de gestión de bases de datos relacional muy utilizado.',
      'SQL Server': 'Sistema de gestión de bases de datos de Microsoft.',
      'MongoDB': 'Base de datos NoSQL orientada a documentos.',
      'Laravel': 'Framework web de PHP con enfoque elegante y expresivo.',
      'CodeIgniter 3': 'Framework PHP rápido y liviano, versión 3.',
      'CodeIgniter 4': 'Framework PHP moderno y orientado a rendimiento, versión 4.'
    };
    return descriptions[name] || '';
  }
}
