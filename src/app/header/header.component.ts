import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTime: string = '';

  ngOnInit(): void {
    // Met à jour une seule fois après 1 seconde
    if (typeof window !== 'undefined') { // S'assure que ce code n'est exécuté que côté client
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }
  }
  
  

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleString(); // Formate la date et l'heure
  }
}

  


