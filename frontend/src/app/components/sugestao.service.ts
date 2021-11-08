import { catchError, map } from 'rxjs/operators';
import { Sugestao } from './create-sugestao/sugestao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugestaoService {

  baseUrl = "http://localhost:3001/sugestoes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean=false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(sugestao: Sugestao): Observable<Sugestao> {
    return this.http.post<Sugestao>(this.baseUrl, sugestao).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado', true)
    return EMPTY
  }

  read(): Observable<Sugestao[]>{
    return this.http.get<Sugestao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Sugestao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Sugestao>(url).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandler(e))
    );
  }

  update(sugestao: Sugestao): Observable<Sugestao> {
    const url = `${this.baseUrl}/${sugestao.id}`
    return this.http.put<Sugestao>(url, sugestao).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Sugestao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Sugestao>(url).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandler(e))
    );
  }
}
