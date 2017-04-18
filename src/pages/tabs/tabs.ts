import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { DiccionarioPage } from '../diccionario/diccionario';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = DiccionarioPage;
  tab4Root = LoginPage;

  constructor() {

  }
}
