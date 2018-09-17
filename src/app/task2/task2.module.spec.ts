import { Task2Module } from './task2.module';

describe('Task2Module', () => {
  let task2Module: Task2Module;

  beforeEach(() => {
    task2Module = new Task2Module();
  });

  it('should create an instance', () => {
    expect(task2Module).toBeTruthy();
  });
});
