import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public fireData:any[] = [];

  firestore: Firestore = inject(Firestore)
  items$!: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'goty')
    this.items$ = collectionData(aCollection);
    this.getFireInfo();
  }

  getFireInfo() {
    this.items$.pipe(
      map(( resp:Game[] ) => {
        return resp.map( ({ name, votes }) => ({name, value: votes}) );
      })
    ).subscribe({
      next: (games) => this.fireData = games,
    })
  }

}
