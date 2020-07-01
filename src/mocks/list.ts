import faker from "faker";

enum Status {
  Created = "Created",
  Completed = "Completed"
}

export type Item = {
  id: string;
  title: string;
  status: Status;
  content: string;
};

const MAX_LENGTH = 10;

export default function getList(): Item[] {
  const list = [];
  for (let index = 0; index < MAX_LENGTH; index++) {
    list.push({
      id: faker.random.uuid(),
      title: faker.name.jobTitle(),
      status: Status.Created,
      content: faker.lorem.sentence()
    });
  }

  return list;
}
