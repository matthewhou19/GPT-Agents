import { Injectable } from '@angular/core';

interface EnvironmentVariables {
  BACKEND_URL: string;
}

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  private env: EnvironmentVariables;

  constructor() {
    this.env = (window as any).__env;
  }

  public get(key: keyof EnvironmentVariables): string {
    return this.env[key];
  }
}
