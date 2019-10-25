import { Directive, HostListener } from '@angular/core';
//import for AngularFireAuth
import { AngularFireAuth} from '@angular/fire/auth';

// Import all modules from firebase
import *as firebase from 'firebase/app';


@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor( private afAuth: AngularFireAuth) { }
  @HostListener('click') 
    onClick(){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    }  
}
