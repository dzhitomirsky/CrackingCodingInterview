const {expect} = require('chai');
const {AnimalShelter, ANIMAL_TYPES: {CAT, DOG}} = require('../index');

describe('AnimalShelter', () => {
    it('test animal shelter', () => {
        const pets = new AnimalShelter();

        pets.enqueue({type: DOG, name: 'Spot'});
        pets.enqueue({type: CAT, name: 'Kitty'});
        pets.enqueue({type: DOG, name: 'Volt'});
        pets.enqueue({type: CAT, name: 'Katty'});

        expect(pets.size()).to.be.equal(4);

        const kitty = pets.dequeueCat();
        expect(kitty.type).to.equal(CAT);
        expect(kitty.name).to.equal('Kitty');


        const spot = pets.dequeueDog();
        expect(spot.type).to.equal(DOG);
        expect(spot.name).to.equal('Spot');


        const oldest = pets.dequeueAny();
        expect(oldest.type).to.equal(DOG);
        expect(oldest.name).to.equal('Volt');

        const katty = pets.dequeueAny();
        expect(katty.type).to.equal(CAT);
        expect(katty.name).to.equal('Katty');

        expect(pets.size()).to.be.equal(0);
    })
});
