export interface TestingConcept {
  title: string;
  description: string;
  code: string;
}

export interface TestType {
  name: string;
  icon: string;
  description: string;
  whenToUse: string;
}

export interface TestingTip {
  title: string;
  description: string;
}

export const testTypes: TestType[] = [
  {
    name: 'Unit Tests',
    icon: '🧪',
    description: 'Test individual functions, services, or utilities in isolation. Fast and reliable.',
    whenToUse: 'Use for pure functions, utility methods, and service logic without dependencies.'
  },
  {
    name: 'Component Tests',
    icon: '🧩',
    description: 'Test components with their templates, including rendering, events, and bindings.',
    whenToUse: 'Use to verify component behavior, template rendering, and user interactions.'
  },
  {
    name: 'Integration Tests',
    icon: '🔗',
    description: 'Test how multiple components or services work together.',
    whenToUse: 'Use to verify that components communicate correctly and services integrate properly.'
  },
  {
    name: 'E2E Tests',
    icon: '🌐',
    description: 'Test the full application flow from the user\'s perspective using tools like Playwright or Cypress.',
    whenToUse: 'Use for critical user flows like login, checkout, or form submission.'
  }
];

export const testingConcepts: TestingConcept[] = [
  {
    title: 'Testing a Service',
    description: 'Test a service by injecting it and verifying its methods. Use TestBed for services with dependencies.',
    code: `import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    // Mock the HTTP response
    const mockUsers = [{ id: 1, name: 'John' }];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('John');
    });
  });
});`
  },
  {
    title: 'Testing a Component',
    description: 'Test components using TestBed and ComponentFixture to verify rendering and interactions.',
    code: `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display initial count', () => {
    const countEl = fixture.nativeElement.querySelector('p');
    expect(countEl.textContent).toContain('0');
  });

  it('should increment on button click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();

    const countEl = fixture.nativeElement.querySelector('p');
    expect(countEl.textContent).toContain('1');
  });
});`
  },
  {
    title: 'Testing with Signals',
    description: 'Test signal-based components by checking signal values and computed results.',
    code: `import { TestBed } from '@angular/core/testing';
import { SignalComponent } from './signal.component';

describe('SignalComponent', () => {
  let component: SignalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalComponent]
    }).compileComponents();

    component = TestBed.createComponent(SignalComponent).componentInstance;
  });

  it('should have initial count of 0', () => {
    expect(component.count()).toBe(0);
  });

  it('should update doubled when count changes', () => {
    component.count.set(5);
    expect(component.doubled()).toBe(10);
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.count()).toBe(1);
    component.increment();
    expect(component.count()).toBe(2);
  });
});`
  },
  {
    title: 'Mocking Dependencies',
    description: 'Replace real dependencies with mocks to isolate the code under test.',
    code: `import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from './data.service';

// Mock service
class MockDataService {
  getData() {
    return of([{ id: 1, name: 'Mock' }]);
  }
}

describe('DataComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataComponent],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    }).compileComponents();
  });

  it('should use mocked data', () => {
    const fixture = TestBed.createComponent(DataComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.items.length).toBe(1);
  });
});`
  },
  {
    title: 'Testing Async Operations',
    description: 'Handle async operations like HTTP calls and Promises in tests.',
    code: `import { fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService (Async)', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // No outstanding requests
  });

  it('should fetch users via HTTP', () => {
    const mockUsers = [{ id: 1, name: 'John' }];

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should handle errors', fakeAsync(() => {
    service.getUsers().subscribe({
      error: (err) => expect(err).toBeTruthy()
    });

    const req = httpMock.expectOne('/api/users');
    req.error(new ProgressEvent('Server error'));
    tick();
  }));
});`
  }
];

export const testingTips: TestingTip[] = [
  { title: 'Follow AAA Pattern', description: 'Arrange (setup), Act (execute), Assert (verify). This makes tests readable and maintainable.' },
  { title: 'Test Behavior, Not Implementation', description: 'Focus on what the code does, not how it does it. Tests should not break when you refactor internals.' },
  { title: 'Use Descriptive Test Names', description: 'Name tests with "should" or "it" patterns: "should return users when API succeeds".' },
  { title: 'Keep Tests Independent', description: 'Each test should be able to run in isolation. Never rely on the order of test execution.' },
  { title: 'Mock External Dependencies', description: 'Replace HTTP calls, databases, and third-party services with mocks for fast, reliable tests.' },
  { title: 'Test Edge Cases', description: 'Test empty inputs, null values, error states, and boundary conditions, not just the happy path.' }
];
