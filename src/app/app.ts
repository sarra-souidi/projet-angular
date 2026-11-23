import { Component } from '@angular/core';
import { Header } from './sharedComponent/header/header';
import { NavMenu } from './sharedComponent/nav-menu/nav-menu';
import { Footer } from './sharedComponent/footer/footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, NavMenu, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}