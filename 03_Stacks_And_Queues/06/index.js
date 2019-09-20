const Queue = require('../queue');

/**
 * DOG & CAT
 */
const ANIMAL_TYPES = {
    DOG: 'DOG',
    CAT: 'CAT',
};

/**
 * Animal abstraction
 */
class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.timeStamp = new Date();
    }
}

/**
 * Animal shelter
 */
class AnimalShelter {
    constructor() {
        this.animalQueues = Object.keys(ANIMAL_TYPES).reduce((res, type) => ({
            ...res,
            [type]: new Queue()
        }), {});
    }

    enqueue({type, name}) {
        if (!Object.values(ANIMAL_TYPES).includes(type)) {
            throw new Error('Unknown animal.')
        }
        this.animalQueues[type].enqueue(new Animal(type, name));
    }

    dequeueAny() {
        const oldestAnimals = Object.values(this.animalQueues)
            .map(q => q.getHead())
            .filter(animal => !!animal);

        if (oldestAnimals.length === 0) {
            return undefined;
        }

        const oldestAnimal = oldestAnimals.reduce((oldest, animal) => {
            if (animal.timeStamp < oldest.timeStamp) {
                oldest = animal;
            }
            return oldest;
        }, oldestAnimals[0]);

        return this.animalQueues[oldestAnimal.type].dequeue();
    }

    dequeueDog() {
        return this.animalQueues[ANIMAL_TYPES.DOG].dequeue();
    }

    dequeueCat() {
        return this.animalQueues[ANIMAL_TYPES.CAT].dequeue();
    }

    size() {
        return Object.values(this.animalQueues).reduce((sum, queue) => sum + queue.size(), 0);
    }
}

module.exports = {ANIMAL_TYPES, AnimalShelter};
