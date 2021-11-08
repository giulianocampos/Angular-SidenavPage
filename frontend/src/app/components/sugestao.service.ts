import { Sugestao } from './create-sugestao/sugestao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugestaoService {

  baseUrl = "http://localhost:3001/sugestoes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(sugestao: Sugestao): Observable<Sugestao> {
    return this.http.post<Sugestao>(this.baseUrl, sugestao)
  }

  read(): Observable<Sugestao[]>{
    return this.http.get<Sugestao[]>(this.baseUrl)
  }

  readById(id: string): Observable<Sugestao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Sugestao>(url)
  }

  update(sugestao: Sugestao): Observable<Sugestao> {
    const url = `${this.baseUrl}/${sugestao.id}`
    return this.http.put<Sugestao>(url, sugestao)
  }
} 
