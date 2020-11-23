import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    if (userToken) {
      const modifiedRequest = req.clone({
        headers: req.headers.append(
          'Authorization',
          `Bearer ${userToken.token}`
        ),
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(req);
  }
}
