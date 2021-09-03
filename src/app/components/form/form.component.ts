import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageServicesService } from 'src/app/services/page-services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: PageServicesService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoForm = new FormGroup({
      id: new FormControl(id),
      nome: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, Validators.required),
      avaliação: new FormControl(),
      cor: new FormControl(null, [Validators.required]),
      marca: new FormControl(null, [Validators.required]),
      preco: new FormControl(null, [Validators.required]),
      categoria: new FormControl(null, [Validators.required]),
      urlImg: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  salvarProduto() {
    const novoFunc = this.produtoForm.getRawValue();
    console.log(novoFunc.nome);
    if (novoFunc.id) {
      this.services.putProduto(novoFunc.id, novoFunc).subscribe(() => {});
    } else {
      this.services.postProduto(novoFunc).subscribe(() => {
        this.router.navigate(['table']);
      });
    }
  }
}
