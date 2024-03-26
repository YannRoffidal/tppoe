// Une interface définit un CONTRAT qui va permettre d'éviter de coder dans tous les sens.

// utiliser un diamond operator (ici <T>) : ça s'appelle de la généricité (interface générique, à spécialiser par la suite)
/**
 * 
 * @interface IService
 * Define methods to be implemented in services crud class
 * @author Captain Jack Sparrow
 * @version osef.2 
 *  - add method
 */

export interface IService<T> {
    /**
     * 
     * @param item T any type specialized in your implementation
     * @returns void
     */
    add(item: T): void
}
