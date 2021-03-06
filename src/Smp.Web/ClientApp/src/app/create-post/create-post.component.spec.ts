import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { CreatePostComponent } from './create-post.component';
import { CreatePostRequest } from '../models/requests/create-post-request';
import { PostsService } from '../services/posts.service';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeAll(() => {
    localStorage.setItem('currentUser', '{ "id": "id", "token": "token" }');
  });

  afterAll(() => {
    localStorage.removeItem('currentUser');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      imports: [HttpClientTestingModule, FormsModule, BrowserAnimationsModule],
      providers: [{ provide: 'BASE_URL', useValue: 'https://www.smp.org/' }],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('createPost()', () => {
    const postToId: string = 'postToId';
    const postReq: CreatePostRequest = new CreatePostRequest();
    postReq.content = 'content';
    postReq.senderId = 'id';
    postReq.receiverId = postToId;

    beforeEach(() => {
      component.postToId = postToId;
      component.createPostRequest.content = 'content';
    });

    describe('when it completes successfully', () => {
      beforeEach(() => {
        spyOn(TestBed.get(PostsService), 'createPost').and.returnValue(of('x'));
        spyOn(component.postCreated, 'emit');
      });

      it('should have emitted an event', () => {
        component.createPost();
        expect(component.postCreated.emit).toHaveBeenCalledTimes(1);
      });

      it('should have called PostsService.createPost() correctly', () => {
        component.createPost();
        expect(TestBed.get(PostsService).createPost).toHaveBeenCalledTimes(1);
        expect(TestBed.get(PostsService).createPost).toHaveBeenCalledWith(postReq);
      });
    });

    describe('when an error gets returned', () => {
      beforeEach(() => {
        spyOn(TestBed.get(PostsService), 'createPost').and.returnValue(throwError({ error: 'error-message' }));
      });

      it('should have called PostsService.createPost() correctly', () => {
        component.createPost();
        expect(TestBed.get(PostsService).createPost).toHaveBeenCalledTimes(1);
        expect(TestBed.get(PostsService).createPost).toHaveBeenCalledWith(postReq);
      });

      it('should have set the error message correctly', () => {
        component.createPost();
        expect(component.errorMessage).toEqual('error-message');
      });
    });
  });
});
