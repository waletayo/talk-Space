import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IprofilePage } from './iprofile';

@NgModule({
  declarations: [
    IprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(IprofilePage),
  ],
})
export class IprofilePageModule {}
