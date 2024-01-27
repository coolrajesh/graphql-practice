import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class GraphQLServiceService {

  constructor(private apollo: Apollo) { }  

  apiQuery(query:any){    
    return this.apollo
      .watchQuery<any>({
        query: query,
        // context: {
        //   headers: new HttpHeaders().set("Authorization", "Bearer " + '#@2221AQ2kjjl^588nn@!+'),
        // }    
      }).valueChanges.pipe(map((result) => result.data));
  }

  apiMutation(createQuery:any){
    this.apollo.mutate({ mutation: createQuery }).subscribe();
  }
}
