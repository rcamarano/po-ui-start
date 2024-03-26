import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { SharedModule } from '../../shared/shared.module';
import { OwnersRoutingModule } from './owners.routing.module';
import { PoModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    OwnersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OwnersRoutingModule,
    PoModule,
  ]
})
export class OwnersModule { }
