import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup
  loading = false;
  type: 'login';
  serverMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb:FormBuilder) { }

  /*
  ngOnInit is a lifecycle hook - which starts when this component is alive
  and then is taken down when the component is destroyed
  */
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    })
  }

  // This will check what the user is trying to do based on the "Type"
  changeType(val){
    this.type = val
  }

  get isLogin(){
    return this.type === 'login';
  }
  
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  
  // The onSubmit Method which will be a Promise Based function using async/await
  async onSubmit(){
    this.loading = true;
    const email = this.email.value; // This is Form data coming from the form
    const password = this.password.value // Same as above

    try {
      if (this.isLogin){
        await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      }
    }
    catch (err) {
      this.serverMessage = err
    }
    this.loading = false;
  }  
}
