import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { SharedModule } from '../../shared/shared.module';
import { OwnersRoutingModule } from './owners.routing.module';
import { PoModule } from '@po-ui/ng-components';
import { OwnersService } from '../owners/shared/services/local-owners.service';



@NgModule({
  declarations: [
    OwnersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OwnersRoutingModule,
    PoModule,
  ],
  providers: [
    OwnersService
  ]
})
export class OwnersModule { }
