import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  })

  it('should give an empty string for lastname attribute', () => {
    const objet = new Type() // instancie dans type la classe Type
    expect(objet.lastname).toEqual('')
  })

  it('should give a Date instance for firthdate', () => {
    const objet = new Type()
    expect(objet.birthDate).toBeInstanceOf(Date)
  })

  
});
