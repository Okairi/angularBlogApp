import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContenfullService {
  constructor() {}

  private cliente = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllEntry(): Observable<any> {
    const primise = this.cliente.getEntries();

    return from(primise);
  }

  getEntryById(id: string) {
    const primise = this.cliente.getEntry(id);

    return from(primise);
  }
}
