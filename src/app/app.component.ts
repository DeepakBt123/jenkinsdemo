import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'otpread';
  mainObj: any = { isWebOtpSupported: ('OTPCredential' in window) };
  constructor() { }

  ngOnInit(): void {
  }

  myOTP:any;
  ngAfterViewInit() {
    if ('OTPCredential' in window) {
        debugger;
        window.addEventListener('DOMContentLoaded', e => {
            debugger;
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest('form');
        debugger;
        if (form) {
            debugger;
            form.addEventListener('submit', e => {
            ac.abort();
            });
        }
        var reqObj =  {
          otp: { transport:['sms'] },
          signal: ac.signal
      };
        navigator.credentials.get(
          reqObj
        ).then((otp:any) => {
            debugger;
            if(
              otp
            ){
              if(
                otp && otp.code
              ){
                // alert('GOT OTP***'+ otp.code);
                // input.value = otp.code;
                this.myOTP = otp.code;
              }
            }
            
            // if (form) form.submit();
        }).catch(err => {
            debugger;
            console.log(err);
        });
        });
    } else {
      // Web OTP API not supported; `isWebOtpSupported` was initialized already.
    }
  }
}
