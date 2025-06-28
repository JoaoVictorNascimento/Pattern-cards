// ==== Product types ====

type Sedan = {
  drive: () => string;
};

type SUV = {
  drive: () => string;
};

type Hatch = {
  drive: () => string;
};

// ==== Abstract Factory Interface ====

type CarFactory = {
  createSedan: () => Sedan;
  createSUV: () => SUV;
  createHatch: () => Hatch;
};

// ==== Toyota Product Implementations ====

const createToyotaSedan = (): Sedan => ({
  drive: () => 'Toyota Sedan driving...',
});

const createToyotaSUV = (): SUV => ({
  drive: () => 'Toyota SUV driving...',
});

const createToyotaHatch = (): Hatch => ({
  drive: () => 'Toyota Hatch driving...',
});

// ==== Toyota Factory Implementation ====

const createToyotaFactory = (): CarFactory => ({
  createSedan: createToyotaSedan,
  createSUV: createToyotaSUV,
  createHatch: createToyotaHatch,
});

// ==== Client Code ====

const testDrive = (factory: CarFactory) => {
  const sedan = factory.createSedan();
  const suv = factory.createSUV();

  console.log(sedan.drive());
  console.log(suv.drive());
};

// ==== Usage ====

const toyotaFactory = createToyotaFactory();
testDrive(toyotaFactory);