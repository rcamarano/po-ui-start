import { Component } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Owners } from './shared/interfaces/owners.model';
import { OwnersService } from './shared/services/local-owners.service';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent {
  actions: Array<PoPageAction> = [
    { label: 'New' }
  ]
  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Owners' }
    ]
  }
  columns!: Array<PoTableColumn>;
  owners: Owners = {
    items: [],
    hasnext: false,
    remaingrecords: 0
  }
  

  constructor(private ownersService: OwnersService) { }

  ngOnInit(): void {
    this.setColumns();
    this.getOwners();
    }

    setColumns(): void {
      this.columns = [
        {property: 'id', label: 'ID', type: 'number'},
        {property: 'name', label: 'Name'},
        {property: 'rg', label: 'RG', visible: true},
        {property: 'cpf', label: 'CPF'},
        {property: 'email', label: 'Email'},
        {property: 'phone 1', label: 'Phone 1'},
        {property: 'phone 2', label: 'Phone 2', visible: true},
        {property: 'pets', label: 'Pets', type: 'icon', icons: [
          { value: 'view-pet', icon: 'po-icon-eye', tooltip: 'View Pets'},
          { value: 'include-pet', icon: 'po-icon-plus-circle', tooltip: 'Include Pets'}, 
        ]
        }

      ]
    }
    // getOwners(): void {
    //   this.owners.items = [
    //     { id: 1,
    //       name: "Nome",
    //       rg: "Teste",
    //       cpf: "Teste",
    //       email: "Teste",
    //       phone1: "Teste",
    //       phone2: "Teste2"
    //     },
    //   ]
    // }
    getOwners(): void {
      this.ownersService.getOwners().subscribe(
        (data) => {
          this.owners = data;
        },
        (error) => {
          console.error('No owners found', error);
        }
      );
    }
}
