import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ContractsUsers } from 'src/app/modules/consents/domain/contracts-users';

@Injectable( {
  providedIn: 'root'
})
export class ConsentsService {

  constructor(private http: HttpClient) {}

  getContracts(): Observable<any> {
    const url: string = environment.baseUrl + '/contracts';
    return this.http.get<any[]>(url);
  }
  getContract(id: number): Observable<any> {
    const url: string = environment.baseUrl + '/contracts/' + id ;
    return this.http.get<any[]>(url);
   }
  getCompanies(): Observable<any> {
    const url: string = environment.baseUrl + '/companies';
    return this.http.get<any[]>(url);
  }

  addContractsUsers(payload: ContractsUsers): Promise<ContractsUsers> {
    const url: string = environment.baseUrl + '/contractsUsers';
    return this.http.post<ContractsUsers>(url, payload).toPromise();
  }

  getSignedContractsUsers(): Observable<any> {
    const url: string = environment.baseUrl + '/getSignedContracts';
    return this.http.get<any[]>(url);
  }
}
