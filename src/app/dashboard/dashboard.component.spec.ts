import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RestaurantService } from '../restaurant.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestaurantStubService, RestaurantList } from './test-touble';
import { of } from 'rxjs';
import { element } from 'protractor';
import { AgGridModule } from 'ag-grid-angular';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let service: RestaurantService;
  let fixture: ComponentFixture<DashboardComponent>;
  let dl: DebugElement;
  let spy;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AgGridModule.withComponents([])],
      providers: [RestaurantService],
      declarations: [DashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RestaurantService);
    dl = fixture.debugElement;
    spy = spyOn(service, 'getRestaurantList').and.returnValue(of(RestaurantList));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should have title', () => {
    expect(dl.query(By.css('p')).nativeElement.innerText).toContain('dashboard works!');
  });

  it('should have card title', () => {
    expect(dl.query(By.css('.card-title')).nativeElement.innerText).toContain('Restaurant List');
  });

  it('should have restaurant list data', () => {
    expect(component.restaurantList.length).toBeGreaterThan(0);
  });

  it('should call service getRestaurantList method', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
  });

  it('should be grid column created', () => {
    const elements = dl.nativeElement.querySelectorAll('.ag-header-cell');
    expect(elements.length).toBe(5);
    expect(elements[0].innerHTML).toContain('Restaurant ID');
    expect(elements[1].innerHTML).toContain('Restaurant Name');
    expect(elements[2].innerHTML).toContain('Cuisines');
    expect(elements[3].innerHTML).toContain('Average Cost for two');
    expect(elements[4].innerHTML).toContain('Currency');
  });

  it('should be grid object created', async () => {
    expect(component.agGrid.api).toBeTruthy();
  });

});
