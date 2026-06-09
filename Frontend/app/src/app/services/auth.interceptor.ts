import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userJson = localStorage.getItem('user');
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      if (user && user.token) {
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
        return next(cloned);
      }
    } catch (e) {
      console.error('Error parsing user data from localStorage', e);
    }
  }
  return next(req);
};
