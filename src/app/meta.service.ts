import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class MetaService {
    private browserType;
    constructor(private meta: Meta) {
        console.log(navigator, 'navigator')
        this.browserType = navigator.userAgent;
        console.log(this.browserType, 'type');
        var ismobile = / mobile/i.test(this.browserType);
        var mgecko = !!( / gecko/i.test( this.browserType) && / firefox\//i.test( this.browserType)) 
       
        console.log(ismobile, 'Is Mobile');
        console.log(mgecko, 'mgecko')

    
        
      }
    
    
    
      updateMeta () {
        this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=2' });
      }
    
    
}