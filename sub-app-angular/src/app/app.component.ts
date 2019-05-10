import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sub-app-angular';
  user;
  fakeUser = {
    username: 'etest@example.com',
    displayName: 'Test Test'
  };

  options = {
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

  ngOnInit(): void {
    // sessionStorage.setItem('USER', JSON.stringify({
    //   username: 'session@example.com',
    //   displayName: 'Test Session'
    // }));
    this.user = JSON.parse(
      sessionStorage.getItem('USER') || JSON.stringify(this.fakeUser)
    );
  }

  toggleClock() {
    const event = new Event('toggleClock');
    window.dispatchEvent(event);
  }
}
