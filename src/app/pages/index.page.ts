import { Component } from '@angular/core';
import { createClient } from '@supabase/supabase-js'

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <p class="read-the-docs">
      For guides on how to customize this project, visit the
      <a href="https://analogjs.org" target="_blank">Analog documentation</a>
    </p>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {

  count = 0;

  constructor() {
    const supabaseUrl = 'https://auadwaqdxgmonljlucla.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1YWR3YXFkeGdtb25samx1Y2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NTk4MTMsImV4cCI6MjAyOTMzNTgxM30.oa2hI9TiSfhgPtjXtQbTQqV38hDG6L9p8trJ27HaAh0'

    // Issue when using createClient
    const supabase = createClient(supabaseUrl, supabaseKey)
  }


  increment() {
    this.count++;
  }
}
