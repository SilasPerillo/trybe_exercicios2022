// will

const locationByEmploye = (employe) => employe.responsibleFor
  .map((animalID) => data.species.find(({ id }) => animalID === id).location);

const speciesByEmploye = (employe) => employe.responsibleFor
  .map((animalID) => data.species.find(({ id }) => animalID === id).name);

const createValueOfKey = (key, employe) => {
  const { id, firstName, lastName } = employe;
  if (key === 'id') return id;
  if (key === 'fullName') return `${firstName} ${lastName}`;
  if (key === 'species') return speciesByEmploye(employe);
  if (key === 'locations') return locationByEmploye(employe);
};

const createObjEmploye = (employe) => {
  const keysOfObj = ['id', 'fullName', 'species', 'locations'];
  return keysOfObj
    .reduce((obj, key) => ({ ...obj, [key]: createValueOfKey(key, employe) }), {});
};

function getEmployeesCoverage(info) {
  const coverageAll = data.employees.map((employe) => createObjEmploye(employe));
  if (info === undefined) return coverageAll;

  const { name, id: idInfo } = info;
  const resultSearch = coverageAll
    .find(({ fullName, id }) => fullName.split(' ').includes(name) || id === idInfo);
  try {
    if (resultSearch) return resultSearch;
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
