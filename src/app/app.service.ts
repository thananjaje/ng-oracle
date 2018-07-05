import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getTables() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/tables/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  
  getTable(tid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/getTable/${tid}`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  totalCuriosities() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/totalCuriosities/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  GetEffiency() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/GetEffiency/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  FPGAtypeo() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/FPGAtypeo/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  totalRCES() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/totalRCES/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getMaxTemperature() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/getMaxTemperature/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  DeleteFPGAS() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/DeleteFPGAS/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  UPDATEearth() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/UPDATEearth/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  AvgPressure() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/AvgPressure/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  GetMaxTemp() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/GetMaxTemp/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addcuriosity() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/addcuriosity/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  MarsOrbiterbeforeinsert() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/MarsOrbiterbeforeinsert/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  Curiositybeforeupdate() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/Curiositybeforeupdate/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  APXSbeforedelete() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`http://localhost:1995/APXSbeforedelete/`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
