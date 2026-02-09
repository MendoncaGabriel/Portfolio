import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
frontend = [
  { nome: 'HTML5', img: 'assets/tech/icons8-html-480.png' },
  { nome: 'CSS3', img: 'assets/tech/icons8-css-480.png' },
  { nome: 'JavaScript', img: 'assets/tech/icons8-javascript-480.png' },
  { nome: 'TypeScript', img: 'assets/tech/icons8-typescript-480.png' },
  { nome: 'React', img: 'assets/tech/icons8-react-96.png' },
  { nome: 'Next.js', img: 'assets/tech/icons8-nextjs-480.png' },
  { nome: 'Angular', img: 'assets/tech/icons8-angular-480.png' },
  { nome: 'TailwindCSS', img: 'assets/tech/icons8-tailwindcss-480.png' },
  { nome: 'Bootstrap', img: 'assets/tech/icons8-bootstrap-480.png' },
  { nome: 'EJS', img: 'assets/tech/icons8-ejs-480.png' },
];

backend = [
  { nome: 'Node.js', img: 'assets/tech/icons8-nodejs-480.png' },
  { nome: 'Express', img: 'assets/tech/icons8-express-js-480.png' },
  { nome: 'Fastify', img: 'assets/tech/fastify-logo.png' },
  { nome: 'NestJS', img: 'assets/tech/icons8-nestjs-480.png' },
  { nome: 'C#', img: 'assets/tech/csharp.png' },
  { nome: '.NET', img: 'assets/tech/dotnet.png' },
];

banco = [
  { nome: 'PostgreSQL', img: 'assets/tech/Postgresql_elephant.png' },
  { nome: 'MySQL', img: 'assets/tech/mysql.png' },
  { nome: 'SQL Server', img: 'assets/tech/sql-server.png' },
  { nome: 'Redis', img: 'assets/tech/redis-logo-512.png' },
  { nome: 'MongoDB', img: 'assets/tech/mongodb.png' },
];

infra = [
  { nome: 'Docker', img: 'assets/tech/docker.png' },
  { nome: 'Linux', img: 'assets/tech/Tux.png' },
  { nome: 'Nginx', img: 'assets/tech/nginx.png' },
  { nome: 'RabbitMQ', img: 'assets/tech/RabbitMQ.png' },
];

realtime = [
  { nome: 'WebSocket', img: 'assets/tech/WebSocket.png' },
  { nome: 'MQTT', img: 'assets/tech/mqtt.png' },
  { nome: 'Modbus', img: 'assets/tech/Modbus.png' },
  { nome: 'CLP', img: 'assets/tech/clp.png' },
];

testes = [
  { nome: 'Jest', img: 'assets/tech/jest-logo-svg-vector.png' },
  { nome: 'Supertest', img: 'assets/tech/supertest.png' },
];
}
