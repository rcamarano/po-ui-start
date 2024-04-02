import { OwnersServicesTsService } from './shared/services/owners.services.ts.service';
import { Component } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Owners } from './shared/interfaces/owners.model';


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
  OwnersServicesTsService: any;
  

  constructor() { }

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
   async  getOwners(): Promise<void> {
      this.OwnersServicesTsService.getOwners().then((owners: Owners) => (this.owners = owners));
    }
}
