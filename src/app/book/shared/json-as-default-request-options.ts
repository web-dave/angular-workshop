import { RequestOptions, Headers } from '@angular/http';

export class JsonAsDefaultRequestOptionsService extends RequestOptions {
  constructor() {
    super({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }
}
