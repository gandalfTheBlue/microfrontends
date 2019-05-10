import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { eventOn, eventOff } from '../utils/eventBus';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {
  constructor(
    @Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef
  ) {}

  objectKeys = Object.keys;
  optionArr = {};

  updatePies = ({ country }) => {
    let optionArrCopy = deepClone(this.optionArr);
    optionArrCopy[country] = getCountryOption(country);
    this.optionArr = { ...optionArrCopy };
    this.changeDetector.detectChanges();
  };

  ngOnInit(): void {}

  ngAfterContentInit() {
    eventOn('showPieGraph', this.updatePies);
  }

  ngOnDestroy(): void {
    eventOff('showPieGraph', this.updatePies);
  }
}

const baseOption = {
  title: {
    text: '1990年寿命百分比',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{d}%'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 24, name: '0-20岁' },
        { value: 35, name: '20-40岁' },
        { value: 30, name: '40-60岁' },
        { value: 20, name: '60岁以上' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

const countryMap = {
  中国: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  印度: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  澳大利亚: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  加拿大: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  古巴: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  芬兰: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  法国: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  德国: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  冰岛: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  日本: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  朝鲜: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  韩国: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  新西兰: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  挪威: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  波兰: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  俄罗斯: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  土耳其: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  英国: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ],
  美国: [
    { value: 24, name: '0-20岁' },
    { value: 35, name: '20-40岁' },
    { value: 30, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ]
};

function deepClone(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

function getCountryOption(country: any): any {
  let baseOptionCopy = deepClone(baseOption);
  const countryData = countryMap[country];
  baseOptionCopy.series[0].data = countryData;
  baseOptionCopy.title.text = country + baseOptionCopy.title.text;
  return baseOptionCopy;
}
