import { Task1Module } from './task1.module';

describe('Task1Module', () => {
  let task1Module: Task1Module;

  beforeEach(() => {
    task1Module = new Task1Module();
  });

  it('should create an instance', () => {
    expect(task1Module).toBeTruthy();
  });
});
