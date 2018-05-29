import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Web3Service} from './web3.service'

const calculatorArtifacts = require('../../../build/contracts/Calculator.json');
const contract = require('truffle-contract');

@Injectable()
export class CalculatorService {

	Calculator = contract(calculatorArtifacts);

  constructor(
  	private web3Ser: Web3Service) {
  	this.Calculator.setProvider(web3Ser.web3.currentProvider);
  }

  getResult(account): Observable<number> {
  	let calcu;
  	return Observable.create(observer => {
  		this.Calculator
  		  .deployed()
  		  .then(instance => {
  		    calcu = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return calcu.getResult.call({
  		      from: account
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
  	})
  }

  addNumber(from, num): Observable<any>{
  	let calcu;
  	return Observable.create(observer => {
  	  this.Calculator
  	    .deployed()
  	    .then(instance => {
  	      calcu = instance;
  	      return calcu.addToNumber(num, {
  	        from: from
  	      });
  	    })
  	    .then(() => {
  	      observer.next()
  	      observer.next()
  	    })
  	    .catch(e => {
  	    	console.log(e);
  	      observer.error(e)
  	    });
  	})
  }

  substractNumber(from, num): Observable<any>{
    let calcu;
    return Observable.create(observer => {
      this.Calculator
        .deployed()
        .then(instance => {
          calcu = instance;
          return calcu.substractNumber(num, {
            from: from
          });
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })
  }

  multiplyNumber(from, num): Observable<any>{
    let calcu;
    return Observable.create(observer => {
      this.Calculator
        .deployed()
        .then(instance => {
          calcu = instance;
          return calcu.multiplyWithNumber(num, {
            from: from
          });
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })
  }

  divideNumber(from, num): Observable<any>{
    let calcu;
    return Observable.create(observer => {
      this.Calculator
        .deployed()
        .then(instance => {
          calcu = instance;
          return calcu.divideByNumber(num, {
            from: from
          });
        })
        .then(() => {
          observer.next()
          observer.next()
        })
        .catch(e => {
          console.log(e);
          observer.error(e)
        });
    })
  }
}
