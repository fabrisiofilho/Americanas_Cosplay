import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageServicesService } from 'src/app/services/page-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: PageServicesService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioForm = new FormGroup({
      id: new FormControl(id),
      login: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  fazerLogin(){
    
  }

  cadastrarUser(){

  }

}
