import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import {Web3Service} from './services'

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService, Web3Service]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
