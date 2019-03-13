import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName":"BEN",
    "lastName":"TAN",
    "username":"SO HANDSOME",
    "email":"Gladyce.Weber@yahoo.com"};

    render() {
        return html`
        <style>
        *{margin:10px; padding:10px;}
        #h11 {color:blue;font-size:100px;shadow: 2px 4px 3px rgba(0,0,0,0.3); }
        #h22 {color:green; font-size:100px;}
        #p1{color:red; font-size:100px;}   
       
        </style>
        <h1 id=h11>${this.foo.firstName}</h1>
        <h2 id=h22>${this.foo.lastName}</h2>
        <p id =p1>${this.foo.username}</p>`;


    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) =>{
                this.foo = bodyRes;
            });
        }   
    }
