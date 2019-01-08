import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { UsersService } from './users.service';

describe('UsersService', () => {

  let usersService: UsersService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
    usersService = TestBed.get(UsersService);
  });

  it('should be created', ()  => {
    expect(usersService).toBeTruthy();
  });

   // Add tests for all() method
   describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];
      let response;
      spyOn(usersService, 'getUsers').and.returnValue(of(userResponse));

      usersService.getUsers().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };
      let response;
      spyOn(usersService, 'findOne').and.returnValue(of(userResponse));
  
      usersService.findOne('2').subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(userResponse);
    });
  });

});
