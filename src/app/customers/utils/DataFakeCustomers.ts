import { faker } from '@faker-js/faker';

interface CustomerType {
  Id:string,
  Nombre: string,
  RFC: string,
  Razon: string,
  Correo: string,
  Telefono: string,
  Calle: string,
  Municipio: string,
  Estado: string,
  Pais: string,
}

export function createRandomCustomers(): CustomerType {
  return {
    Id: faker.string.uuid(),
    Nombre: faker.internet.userName(),
    RFC: faker.lorem.word(),
    Razon: faker.lorem.word(),
    Correo: faker.internet.email(),
    Telefono: faker.phone.number(),
    Calle: faker.address.streetAddress(),
    Municipio: faker.address.city(),
    Estado: faker.address.state(),
    Pais: faker.address.country(),
  };
}

export const CUSTOMERSLIST: Array<CustomerType> = faker.helpers.multiple(createRandomCustomers, {count: 50, });