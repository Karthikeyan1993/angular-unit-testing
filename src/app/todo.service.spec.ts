import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from './todo.service';


describe('TodoService', () => {
  let httpMock: HttpTestingController;
  let service: TodoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodoService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud return todo data', () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      },
    ];

    service.getAllTodos().subscribe((response: any[]) => {
      expect(response.length).toBe(2);
      expect(response[0].completed).toBeFalse();
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos');
    expect(req.request.method).toEqual('GET');
    req.flush(data);
  });
});
