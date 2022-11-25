import { Injectable } from '@angular/core';
import { Client } from '@core/model/client';

@Injectable()
export class ClientService {
  constructor() {}

  getClient(): Client {
    return new Client(
      1,
      'John',
      'Doe',
      'test@gmail.com',
      '1234567890',
      '123 Main St',
      'New York',
      'Male',
      '12345',
      'USA',
      'test',
      'test',
      'test'
    );
  }

  //create method to post a client
  postClient(client: Client) {
    console.log(client);
  }

  //create method to post login
  postLogin(login: string, password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      console.log('Login accepted');
    } else {
      console.log('Login rejected');
    }
  }
}
