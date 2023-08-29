function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, targetName) {
    return drivers.filter(driver => driver.name.toLowerCase() === targetName.toLowerCase());
}

const drivers = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Alice', hometown: 'Los Angeles' },
    { name: 'bObBy', hometown: 'Chicago' },
    { name: 'Charlie', hometown: 'Miami' },
    { name: 'Bobert', hometown: 'San Francisco' }
];

const matchingExact = findMatching(drivers.map(driver => driver.name), 'bobby');
console.log('Exact Match:', matchingExact);

const matchingFuzzy = fuzzyMatch(drivers.map(driver => driver.name), 'Bo');
console.log('Fuzzy Match:', matchingFuzzy);

const matchingByName = matchName(drivers, 'Bobby');
console.log('Match by Name:', matchingByName);
