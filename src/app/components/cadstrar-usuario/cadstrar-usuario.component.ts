import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageServicesService } from 'src/app/services/page-services.service';

@Component({
  selector: 'app-cadstrar-usuario',
  templateUrl: './cadstrar-usuario.component.html',
  styleUrls: ['./cadstrar-usuario.component.css']
})
export class CadstrarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(
    private router: Router,
    private services: PageServicesService
  ) {
    this.usuarioForm = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      sobrenome: new FormControl(null, Validators.required),
      cpf: new FormControl(null, [Validators.required]),
      sexo: new FormControl(),
      email: new FormControl(null, [Validators.required]),
      telefone: new FormControl(null, [Validators.required]),
      carrinho: new FormControl(null, [Validators.required]),
      favoritos: new FormControl(null, [Validators.required]),
      endereco: new FormControl(null, [Validators.required]),
      metodoPagamento: new FormControl(null, [Validators.required]),
    });
   }

  ngOnInit(): void {
  }

  salvarUsuario(){

  }
}
