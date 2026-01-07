class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number, log: string) {
    this.name = name;
    this.age = age;
    this.log = log;
  }
}