import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TodoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have table with headers', () => {
    fixture = TestBed.createComponent(TodoComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const element = compiled.querySelectorAll('th');
    expect(element.length).toBe(4);
    expect(element[0].innerText).toBe('User Id');
    expect(element[1].innerText).toBe('Id');
    expect(element[2].innerText).toBe('Title');
    expect(element[3].innerText).toBe('Completed');
  });
});
