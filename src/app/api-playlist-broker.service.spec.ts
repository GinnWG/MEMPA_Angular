import { TestBed } from '@angular/core/testing';

import { ApiPlaylistBrokerService } from './api-playlist-broker.service';

describe('ApiPlaylistBrokerService', () => {
  let service: ApiPlaylistBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlaylistBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
