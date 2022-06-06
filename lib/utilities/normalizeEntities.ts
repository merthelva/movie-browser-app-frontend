interface IEntity {
  id: string | number;
}

const normalizeEntities = (entities: IEntity[]) => {
  const normalized = entities.reduce((acc, cur) => {
    acc = { ...acc, [cur.id]: { ...cur } };
    return acc;
  }, {});

  return normalized;
};

export default normalizeEntities;
