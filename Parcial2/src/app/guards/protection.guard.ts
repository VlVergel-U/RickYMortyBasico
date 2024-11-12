import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const protectionGuard: CanActivateFn = (route, state) => {
 const router = inject(Router)
 console.log("pase por el guard")
 let token = localStorage.getItem("token")
 console.log(token);

 if (token === null) {
  router.navigateByUrl("/");
  return false;
}

    return true;
};
