import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		        "x-rapidapi-key": "c2233c2216mshe798217c40755d1p194e01jsn1ff9b6ada5d2"
            },
            setParams: {
                key: '774f067d15b34f069f200c850ac5b0ae'
            }
        });
        return next.handle(req);
    }
}