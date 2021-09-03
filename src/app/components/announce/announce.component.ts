import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { PageServicesService } from 'src/app/services/page-services.service';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private services: PageServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.services.getProdutos().subscribe(
      (produto: Produto[])=>{
        this.produtos = produto;
      }
    );
  }

}
