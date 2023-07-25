import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


/**
 * Responsible for adding Library configuration as a provider in the root,
 * so that all library modules can use it, if needed. This module should be imported in App module with .forRoot().
 * @date 17/3/2022 - 7:58:51 pm
 *
 * @export
 * @class AppConfigModule
 * @typedef {AppConfigModule}
 */
@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [],
})
export class AppConfigModule {
  constructor() { }
}
