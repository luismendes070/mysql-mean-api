import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { connection, query } from './database.service';

var connectionDb4free = mysql.createConnection({
  host: "db4free.net",
  user: "desafiofullstack",
  password: "*5xt#AU4gtjVUsA",
  database: "desafiodb",
});

var connectionLocalhost = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api_fullstack_challenge",
});

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

it('mysql db4free', () => {

await connectionDb4free.connect();

console.log("connection connected...");

await connectionDb4free.query('select version()',connectionDb4free);

    expect(service).toBeTruthy();
  });

it('mysql wamp', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
