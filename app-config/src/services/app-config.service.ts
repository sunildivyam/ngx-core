import { Injectable } from '@angular/core';
import { AppConfig } from '../interfaces/app-config.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private _appConfig: AppConfig = null;

  constructor(private router: Router) { }


  public get config(): AppConfig {
    return this._appConfig;
  }


  public set config(v: AppConfig) {
    this._appConfig = v;
  }

  public get openai(): any {
    return this._appConfig.openai;
  }


  public set openai(v: any) {
    this._appConfig.openai = v;
  }


  public get firebase(): any {
    return this._appConfig.firebase;
  }


  public set firebase(v: any) {
    this._appConfig.firebase = v;
  }
}
