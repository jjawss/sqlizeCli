# sqlizeCli
Created the data for Pets using this algorithm: 
```
const createData = () => {
  let allPetNames = [
    "Abigail",
    "Ace",
    "Adam",
    "Addie",
    "Admiral",
    "Aggie",
    "Aires",
    "Aj",
    "Ajax",
    "Aldo",
    "Alex",
    "Alexus",
    "Arnold",
    "Alf",
    "Allie",
    "Ally",
    "Amber",
    "Amie",
    "Amigo",
    "Amos",
  ];
  let allOwnerIds = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    null,
    null,
    null,
    null,
    null,
  ];
  const count = 20;
  let data = [];
  let genderOptions = ["male", "female"];
  let breeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Beagle",
    "Doge",
    "Yorkshire Terrier",
    "Poodle",
  ];
  let hasShots = [true, false];

  const pickPetName = () => {
    const calculatePetName = () =>
      Math.floor(Math.random() * allPetNames.length);
    let petNameIndex = calculatePetName();
    petName = allPetNames[calculatePetName];
    allPetNames = allPetNames.splice(petNameIndex, 1);
    return petName;
  };

  const pickOwnerId = () => {
    petNameIndex = () => Math.floor(Math.random() * allOwnerNames.length);
    ownerId = allOwnerIds[ownerIdIndex];
    allOwnerIds = allOwnerIds.splice(ownerIdIndex, 1);
    return ownerId;
  };

  for (let i = 0; i < count; i++) {
    let tempId = i + 1;
    let calculatedPetName = allPetNames.splice(
      Math.floor(Math.random() * allPetNames.length),
      1
    );
    let randomNameIndex = Math.floor(Math.random() * allPetNames.length);
    // console.log("randomNameIndex", randomNameIndex);
    let calculatedOwnerId = allOwnerIds.splice(
      Math.floor(Math.random() * allOwnerIds.length),
      1
    );
    let calculatedAge = Math.floor(Math.random() * 5) + 1;
    let calculatedWeight = Math.floor(Math.random() * 50) + 5;
    let calculatedGenderIndex = Math.floor(Math.random() * 2);
    let calculatedBreedIndex = Math.floor(Math.random() * 8);
    let calculatedStoreId = Math.floor(Math.random() * 3) + 1;
    let calculatedHasShotsIndex = Math.floor(Math.random() * 2);

    data.push({
      id: tempId.toString(),
      name: calculatedPetName[0],
      age: calculatedAge,
      weight: calculatedWeight,
      gender: genderOptions[calculatedGenderIndex],
      breed: breeds[calculatedBreedIndex],
      storeId: calculatedStoreId.toString(),
      ownerId: calculatedOwnerId[0],
      hasShots: hasShots[calculatedHasShotsIndex],
      createdAt: "new Date()",
      updatedAt: "new Date()",
    });
  }
  return console.log(data);
};

createData();
```
