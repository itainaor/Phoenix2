import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import { LoaderComponent } from './components/loader/loader.component';
import {ToastrModule} from 'ngx-toastr';
import {ResultsComponent} from './components/results/results.component';
import {PopoverModule} from 'ngx-smart-popover';

@NgModule({
  declarations: [TruncatePipe, LoaderComponent, ResultsComponent],
  exports: [
    TruncatePipe,
    LoaderComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    ToastrModule.forRoot(),
    PopoverModule
  ]
})
export class ShareModule { }
