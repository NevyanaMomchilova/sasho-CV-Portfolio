import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public jobs: any;
  constructor() {}

  ngOnInit(): void {
    this.jobs = [
      {
        position: 'Alexander Boradjiev',
        companyName: '',
        startDate: '',
        endDate: '',
        logo: '../../../assets/hero.png',
        freeText:
          'Hello HR team, my name is Alex and i am looking for a new position in your company\
          I am adaptive, friendly and looking for a new challange, let me know if you find me a good fit\
          for your comlany',
      },
      {
        position: 'Cisco Duty Manager Supervisor',
        companyName: 'Onprocess Technology',
        startDate: '01/2021',
        endDate: 'Current',
        logo: '../../../assets/opt-logo.png',
        description: [
          ' - Mentor and supporter for everyone',
          ' - Utilizing SCRUM and Kanban work methodology',
          ' - Active participation in projects and initiatives',
          ' - Understand and demonstrate company values through my behavior',
        ],
      },
      {
        position: 'Cisco Duty Manager',
        companyName: 'Onprocess Technology',
        startDate: '03/2017',
        endDate: '12/2020',
        logo: '../../../assets/opt-logo.png',

        description: [
          ' - Provide root cause analysis',
          ' - Escalation case management and resolution',
          ' - High Touch Escalation Role shall provide dedicated escalation support',
          ' - Engage with relevant Cisco teams and Cisco Supplier organizations to identify root cause of escalation',
        ],
      },
      {
        position: 'Cisco Escalations Agent Support',
        companyName: 'Onprocess Technology',
        startDate: '02/2016',
        endDate: '03/2017',
        logo: '../../../assets/opt-logo.png',

        description: [
          ' - Managing multiple queues',
          ' - Deep Cisco service operations knowledge',
          ' - Creating and implementing new tools for process optimization',
          ' - High level Multitasking and responsibility to meet expected dead lines',
        ],
      },
    ];
  }
}
