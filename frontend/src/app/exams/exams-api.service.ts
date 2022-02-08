import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Exam} from './exam.model';

@Injectable()
export class ExamsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError( () => (err.message || 'Error: Unable to complete request.'));
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> | any{
    return this.http
      .get(`${API_URL}/exams`)
      .pipe(
       catchError(ExamsApiService._handleError));
  }
}