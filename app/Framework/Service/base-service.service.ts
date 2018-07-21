import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService { 
    constructor(private http: Http) { }
    public get(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.get(this.getFullQualifiedURL(url), this.getOptions(options));
    } 
    /**
     * Performs a request with `post` http method.
     */
    public post(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.post(this.getFullQualifiedURL(url), body, this.getOptions(options));
    }

    /**
     * Performs a request with `put` http method.
     */
    public put(url: string, body:any, options?: RequestOptions): Observable<Response> {
        return this.http.put(this.getFullQualifiedURL(url), body, this.getOptions(options));
    }

    /**
     * Performs a request with `delete` http method.
     */
    public delete(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.delete(this.getFullQualifiedURL(url), this.getOptions(options));
    }

    /**
     * Performs a request with `patch` http method.
     */
    public patch(url: string, body:any, options?: RequestOptions): Observable<Response> {
        return this.http.patch(this.getFullQualifiedURL(url), body, this.getOptions(options));
    }

    /**
     * Performs a request with `head` http method.
     */
    public head(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.head(this.getFullQualifiedURL(url), this.getOptions(options));
    }

    /**
     * Performs a request with `options` http method.
     */
    public options(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.options(this.getFullQualifiedURL(url), this.getOptions(options));
    }

    private getFullQualifiedURL(apiUrl: string): string {
        return "http://localhost:1141/" + apiUrl;
    }

    private getOptions(options?: RequestOptions): RequestOptions { 
        if (options == null)  
            options = new RequestOptions();
         
        if (options.headers == null)
            options.headers = new Headers();

        options.headers.append('Content-Type', 'application/json; charset=utf-8');
        options.headers.append('Accept', 'application/json'); 
        return options;
    }
}