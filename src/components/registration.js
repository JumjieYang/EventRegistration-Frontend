import axios from 'axios';
let config = require('../../config');

let backendConfigurer = function () {
  switch (process.env.NODE_ENV) {
    case 'testing':
    case 'development':
      return 'http://' + config.dev.backendHost + ':' + config.dev.backendPort;
    case 'production':
      return 'https://' + config.build.backendHost + ':' + config.build.backendPort;
  }
}

let backendUrl = backendConfigurer();

let AXIOS = axios.create({
  baseURL: backendUrl,
  headers: {'Access-Control-Allow-Origin': '*'}
});

export default {
  name: 'eventregistration',
  data () {
    return {
      persons: [],
      events: [],
      theatres: [],
      performers: [],
      newPerson: '',
      personType: 'Person',
      newEvent: {
        name: '',
        date: '2017-12-08',
        startTime: '09:00',
        endTime: '11:00'
      },
      deviceId: '',
      amount: '',
      selectedPerson: '',
      selectedPersonToPay: '',
      selectedPerformer: '',
      selectedEvent: '',
      selectedEventToAssign: '',
      selectedEventToPay: '',
      errorPerson: '',
      errorEvent: '',
      errorRegistration: '',
      errorAssign: '',
      errorPay: '',
      roles: [
        {
          value: 'Person',
          label: '1'
        },
        {
          value: 'Performer',
          label: '2'
        }
      ],
      response: []
    }
  },
  created: function () {
    // Initializing persons

    AXIOS.get('/persons')
    .then(response => {
      this.persons = response.data;
      this.persons.forEach(person => this.getRegistrations(person.name));
    })
    .catch(e => { this.errorPerson = e });
    AXIOS.get('/performers')
    .then(response => {
      this.performers = response.data;
      this.persons.push(...response.data);
      this.performers.forEach(person => this.getRegistrations(person.name));
    })
    .catch(e => { this.errorPerson = e });
    AXIOS.get('/events').then(response => {
      this.events = response.data;
    }).catch(e => { this.errorEvent = e });
    AXIOS.get('/theatres').then(response => {
      this.events.push(...response.data);
    }).catch(e => { this.errorEvent = e });
  },

  methods: {

    createPerson: function (personType, personName) {
      if (personType === 'Person') {
        AXIOS.post('/persons/'.concat(personName), {}, {})
      .then(response => {
        this.persons.push(response.data);
        this.errorPerson = '';
        this.newPerson = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorPerson = e;
        console.log(e);
      });
      } else {
        AXIOS.post('/performers/'.concat(personName), {}, {})
      .then(response => {
        this.performers.push(response.data);
        this.persons.push(response.data);
        this.errorPerson = '';
        this.newPerson = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorPerson = e;
        console.log(e);
      });
      }
    },

    createEvent: function (newEvent) {
      if (!newEvent.title) {
        let event = {
          'name': newEvent.name,
          'date': newEvent.date,
          'startTime': newEvent.startTime,
          'endTime': newEvent.endTime
        }
        if (!this.events.find(x => x.name === newEvent.name)) { this.events.push(event); }
        let params = {
          'date': newEvent.date,
          'startTime': newEvent.startTime,
          'endTime': newEvent.endTime
        }
        AXIOS.post('/events/'.concat(newEvent.name), {}, {params: params})
      .then(response => {
        this.errorEvent = '';
        this.newEvent.name = this.newEvent.date = this.newEvent.startTime = this.newEvent.endTime = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorEvent = e;
        console.log(e);
      });
      } else {
        let event = {
          'name': newEvent.name,
          'date': newEvent.date,
          'startTime': newEvent.startTime,
          'endTime': newEvent.endTime,
          'title': newEvent.title
        }
        if (!this.events.find(x => x.name === newEvent.name)) {
          this.theatres.push(event);
          this.events.push(event);
        }
        let params = {
          'date': newEvent.date,
          'startTime': newEvent.startTime,
          'endTime': newEvent.endTime,
          'title': newEvent.title
        }
        AXIOS.post('/theatres/'.concat(newEvent.name), {}, {params: params})
      .then(response => {
        this.errorEvent = '';
        this.newEvent.name = this.newEvent.date = this.newEvent.startTime = this.newEvent.endTime = this.newEvent.title = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorEvent = e;
        console.log(e);
      })
      }
    },

    registerEvent: function (personName, eventName) {
      let event = this.events.find(x => x.name === eventName);
      let person = this.persons.find(x => x.name === personName);
      let params = {
        person: personName,
        event: eventName
      };
      if (!person.eventsAttended.find(x => x.name === eventName)) {
        person.eventsAttended.push(event);
      }
      AXIOS.post('/register', {}, {params: params})
      .then(response => {
        this.selectedPerson = '';
        this.selectedEvent = '';
        this.errorRegistration = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorRegistration = e;
        console.log(e);
      });
    },

    getRegistrations: function (personName) {
      AXIOS.get('/registrations/person/'.concat(personName))
      .then(response => {
        if (!response.data || response.data.length <= 0) return;

        let indexPart = this.persons.map(x => x.name).indexOf(personName);
        this.persons[indexPart].eventsAttended = [];
        this.persons[indexPart].paypals = [];
        response.data.forEach(registration => {
          this.persons[indexPart].eventsAttended.push(registration.event);
          this.persons[indexPart].paypals.push(registration.paypal);
        });
      })
      .catch(e => {
        console.log(e);
      });
    },

    assignEvent: function (performerName, eventName) {
      let performer = this.performers.find(x => x.name === performerName)
      let event = this.events.find(x => x.name === eventName)
      let params = {
        performer: performer.name,
        event: event.name
      };
      if (!performer.eventsPerformed.find(x => x.name === eventName)) {
        performer.eventsPerformed.push(event);
      }
      AXIOS.post('/assign', {}, {params: params})
      .then(response => {
        alert(response.data);
        this.selectedEventToAssign = '';
        this.selectedPerformer = '';
        this.errorRegistration = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorAssign = e;
        console.log(e);
      });
    },

    createPayment: function (paypalId, paypalAmount, eventName, personName) {
      let person = this.persons.find(x => x.name === personName);
      let params =
        {
          'person': personName,
          'event': eventName,
          'paypalId': paypalId,
          'amount': paypalAmount

        };
      AXIOS.post('/pay', {}, {params: params})
      .then(response => {
        person.paypals.push(response.data);
        this.deviceId = '';
        this.amount = '';
        this.selectedPersonToPay = '';
        this.selectedEventToPay = '';
      })
      .catch(e => {
        e = e.response.data.message ? e.response.data.message : e;
        this.errorPay = e;
        console.log(e);
      });
    }
  }
}
