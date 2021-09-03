import { Routes } from "@angular/router";
import { CadastrarComponent } from "./components/cadastrar/cadastrar.component";
import { CadstrarUsuarioComponent } from "./components/cadstrar-usuario/cadstrar-usuario.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

export const ROUTES: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: 'cadastrarusuario', component:CadstrarUsuarioComponent}
]
