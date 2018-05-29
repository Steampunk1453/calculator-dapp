import {Component, NgZone} from '@angular/core';
import {CalculatorService, Web3Service} from './services/services'
import {Calculator} from './domain/calculator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  account: any;
  accounts: any;

  private calculator: Calculator = {} as Calculator;

  constructor(
    private _ngZone: NgZone,
    private web3Service: Web3Service,
    private calculatorService: CalculatorService) {
    this.onReady();
  }

  onReady = () => {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];

      this._ngZone.run(() =>
        this.refreshResult()
      );
    }, err => alert(err))
  };

  refreshResult = () => {
    this.calculatorService.getResult(this.account).subscribe(data => {
      this.calculator.result = data
      console.log('Result: ' + this.calculator.result);
    });
  }

  addNumber() {
    if(this.calculator.value) {
      this.calculatorService.addNumber(this.account,  this.calculator.value).subscribe((data) =>{
        this.refreshResult();
      });
      this.calculator.value = undefined
    }
  }

  substractNumber() {
    if(this.calculator.value) {
      this.calculatorService.substractNumber(this.account,  this.calculator.value).subscribe((data) =>{
        this.refreshResult();
      });
      this.calculator.value = undefined
    }
  }

  multiplyNumber() {
    if(this.calculator.value) {
      this.calculatorService.multiplyNumber(this.account,  this.calculator.value).subscribe((data) =>{
        this.refreshResult();
      });
      this.calculator.value = undefined
    }
  }

  divideNumber() {
    if(this.calculator.value) {
      this.calculatorService.divideNumber(this.account,  this.calculator.value).subscribe((data) =>{
        this.refreshResult();
      });
      this.calculator.value = undefined
    }
  }

}
