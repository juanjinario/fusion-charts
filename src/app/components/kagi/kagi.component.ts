import { Component, OnInit } from '@angular/core';

const data = {
  "chart": {
    "caption": "S&P 500 Index Daily Price Chart",
    "subcaption": "Last 30 days",
    "numberprefix": "$",
    "labeldisplay": "Rotate",
    "theme": "fusion",
    "plottooltext": "$label: <b>$dataValue</b>"
  },
  "data": [
    {
      "label": "Day 1",
      "value": "200"
    },
    {
      "label": "Day 2",
      "value": "200"
    },
    {
      "label": "Day 3",
      "value": "200"
    },
    {
      "label": "Day 4",
      "value": "200"
    },
    {
      "label": "Day 5",
      "value": "200"
    },
    {
      "label": "Day 6",
      "value": "250"
    },
    {
      "label": "Day 7",
      "value": "160"
    },
    {
      "label": "Day 8",
      "value": "160"
    },
    {
      "label": "Day 9",
      "value": "160"
    },
    {
      "label": "Day 10",
      "value": "350"
    },
    {
      "label": "Day 11",
      "value": "350"
    },
    {
      "label": "Day 12",
      "value": "350"
    },
    {
      "label": "Day 13",
      "value": "350"
    },
    {
      "label": "Day 14",
      "value": "350"
    },
    {
      "label": "Day 15",
      "value": "92"
    },
    {
      "label": "Day 16",
      "value": "92"
    },
    {
      "label": "Day 17",
      "value": "92"
    },
    {
      "label": "Day 18",
      "value": "92"
    },
    {
      "label": "Day 19",
      "value": "92"
    },
    {
      "label": "Day 20",
      "value": "92"
    },
    {
      "label": "Day 21",
      "value": "100"
    },
    {
      "label": "Day 22",
      "value": "100"
    },
    {
      "label": "Day 23",
      "value": "100"
    },
    {
      "label": "Day 24",
      "value": "100"
    },
    {
      "label": "Day 25",
      "value": "100"
    },
    {
      "label": "Day 26",
      "value": "100"
    },
    {
      "label": "Day 27",
      "value": "100"
    },
    {
      "label": "Day 28",
      "value": "110"
    },
    {
      "label": "Day 29",
      "value": "110"
    },
    {
      "label": "Day 30",
      "value": "110"
    }
  ]
};
@Component({
  selector: 'app-kagi',
  templateUrl: './kagi.component.html',
  styleUrls: ['./kagi.component.scss']
})
export class KagiComponent implements OnInit {

  width = '100%';
      height = 400;
      type = 'kagi';
      dataFormat = 'json';
      dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
