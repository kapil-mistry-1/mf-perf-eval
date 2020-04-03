import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Axis Focused 25 Fund','Axis Bluechip Fund','Axis Mid Cap Fund','Axis Multicap Fund','Axis Growth Opportunities Fund','Axis Small Cap Fund','Axis Long Term Equity Fund','Aditya Birla Sun Life Tax Relief 96','Aditya Birla Sun Life Frontline Equity Fund','Aditya Birla Sun Life Equity Fund','Aditya Birla Sun Life Equity Advantage Fund','Aditya Birla Sun Life Pure Value Fund','Aditya Birla Sun Life Focused Equity Fund','Aditya Birla Sun Life Arbitrage Fund','Aditya Birla Sun Life MNC Fund','Aditya Birla Sun Life Midcap Fund','Aditya Birla Sun Life Small Cap Fund','Aditya Birla Sun Life Banking & Financial Services Fund','DSP Top 100 Equity Fund','DSP Equity Fund','DSP Equity Opportunities Fund','DSP India T.I.G.E.R Fund','DSP Small Cap Fund','DSP Midcap Fund','DSP Tax Saver Fund','DSP Natural Resources & New Energy Fund','DSP Focus Fund','DSP Dynamic Asset Allocation Fund','DSP Equity Savings Fund','DSP Arbitrage Fund','DSP Healthcare Fund','DSP Equal Nifty 50 Fund','HDFC TaxSaver Fund','HDFC Capital Builder Value Fund','HDFC Equity Fund','HDFC Focused 30 Fund','HDFC Growth Opportunities Fund','HDFC Mid-Cap Opportunities Fund','HDFC Small Cap Fund','HDFC Top 100 Fund','HDFC Infrastructure Fund','ICICI Prudential Bluechip Fund','ICICI Prudential Value Discovery Fund','ICICI Prudential Long Term Equity Fund (Tax Saving)','ICICI Prudential Infrastructure Fund','ICICI Prudential Pharma Healthcare and Diagnostics Fund','ICICI Prudential Multicap Fund','ICICI Prudential Technology Fund','ICICI Prudential Large & Mid Cap Fund','ICICI Prudential US Bluechip Equity Fund','ICICI Prudential Exports & Services Fund','ICICI Prudential MidCap Fund','ICICI Prudential Dividend Yield Equity Fund','ICICI Prudential FMCG Fund','ICICI Prudential Small Cap Fund','ICICI Prudential Focused Equity Fund','ICICI Prudential Banking and Financial Services Fund','Kotak Standard Multicap Fund','Kotak Emerging Equity Scheme','Kotak Bluechip Fund','Kotak Equity Opportunities Fund','Kotak Small Cap Fund','Kotak India EQ Contra Fund','Kotak Infrastructure & Economic Reform Fund','Kotak India Growth Fund Series 4,5, and 7','Kotak Tax Saver Fund'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
