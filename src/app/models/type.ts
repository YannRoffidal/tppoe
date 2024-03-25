export class Type {
    /**
    * @var { string } lastname of any guy or gal
    */
    public lastname: string = ''

    /**
    * @var { number } age of the cap'tain
    */

    public age: number = 0
    
    public isMale: boolean = false

    // tableau mode JS
    public skills: Array<string> = []

    // tableau mode C
    public madSkills: string[] = []

    public birthDate: Date = new Date()


}
