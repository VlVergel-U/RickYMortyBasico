import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const protectionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      router.navigateByUrl('/login');
      return false;
    }
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};