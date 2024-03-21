import { faker } from '@faker-js/faker';

interface EmployeType {
  Id:string,
  Nombre: string,
  RFC: string,
  Nomina: string,
  Correo: string,
  Telefono: string,
  Calle: string,
  Municipio: string,
  Estado: string,
  Pais: string,
  Puesto: string,
  Comision: string,
}

export function createRandomUser(): EmployeType {
  return {
    Id: faker.string.uuid(),
    Nombre: faker.internet.userName(),
    RFC: faker.lorem.word(),
    Nomina: faker.lorem.word(),
    Correo: faker.internet.email(),
    Telefono: faker.phone.number(),
    Calle: faker.address.streetAddress(),
    Municipio: faker.address.city(),
    Estado: faker.address.state(),
    Pais: faker.address.country(),
    Puesto: faker.person.jobArea(),
    Comision: faker.number.int(100).toString(),
  };
}

export const USERSLIST: Array<EmployeType> = faker.helpers.multiple(createRandomUser, {count: 50, });