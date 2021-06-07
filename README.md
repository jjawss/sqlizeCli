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
```
Database output: 

banner_challenge2=# SELECT * FROM "Pets";
 id |  name   | age | weight | gender |       breed        | storeId | ownerId | hasShots |         createdAt         |         updatedAt         
----+---------+-----+--------+--------+--------------------+---------+---------+----------+---------------------------+---------------------------
 1  | Aggie   |   4 |     42 | female | Beagle             | 3       | 3       | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 2  | Ajax    |   4 |     28 | female | Labrador Retriever | 3       |         | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 3  | Adam    |   4 |     51 | male   | Golden Retriever   | 3       | 12      | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 4  | Amie    |   3 |     17 | male   | Golden Retriever   | 1       | 6       | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 5  | Ally    |   5 |     47 | male   | Doge               | 3       |         | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 6  | Arnold  |   4 |     19 | female | Yorkshire Terrier  | 3       | 7       | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 7  | Addie   |   4 |     40 | male   | Poodle             | 2       | 8       | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 8  | Aj      |   4 |     10 | female | Beagle             | 1       | 13      | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 9  | Admiral |   4 |     13 | female | Bulldog            | 1       | 5       | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 10 | Alex    |   2 |      8 | female | Yorkshire Terrier  | 2       |         | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 11 | Amos    |   2 |     29 | male   | Golden Retriever   | 3       | 15      | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 12 | Alf     |   2 |     53 | female | Poodle             | 2       | 2       | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 13 | Abigail |   1 |     18 | female | Labrador Retriever | 1       | 4       | f        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 14 | Alexus  |   5 |     44 | female | German Shepherd    | 3       | 9       | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 15 | Allie   |   2 |     32 | male   | Bulldog            | 3       | 11      | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 16 | Aldo    |   5 |     47 | female | Labrador Retriever | 3       | 14      | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 17 | Amigo   |   3 |     21 | female | Bulldog            | 2       |         | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 18 | Ace     |   1 |     54 | female | Bulldog            | 3       | 10      | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 19 | Amber   |   2 |     23 | male   | Poodle             | 3       | 1       | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
 20 | Aires   |   4 |     16 | male   | Bulldog            | 2       |         | t        | 2021-06-07 13:58:13.13-05 | 2021-06-07 13:58:13.13-05
(20 rows)

banner_challenge2=# SELECT * FROM "Owners";
 id |  firstName  |  lastName   | phoneNumber |         createdAt          |         updatedAt          
----+-------------+-------------+-------------+----------------------------+----------------------------
 1  | Cecilia     | Charlton    |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 2  | Becky       | Blankenship |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 3  | Amy         | Lutz        |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 4  | Monet       | Kirk        |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 5  | Zarah       | Chavez      |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 6  | Lilly-Grace | Villegas    |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 7  | Ciaron      | Ritter      |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 8  | Harlee      | Bradford    |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 9  | Oakley      | Liu         |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 10 | Fahim       | Akhtar      |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 11 | Elena       | Carter      |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 12 | Becky       | Blankenship |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 13 | Rocco       | Kearney     |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 14 | Danyal      | Wilson      |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
 15 | Madison     | Barajas     |     5550109 | 2021-06-07 13:58:13.082-05 | 2021-06-07 13:58:13.082-05
(15 rows)

banner_challenge2=# SELECT * FROM "Stores";
 id |       name        |         createdAt          |         updatedAt          
----+-------------------+----------------------------+----------------------------
 1  | PetSmart          | 2021-06-07 13:58:12.967-05 | 2021-06-07 13:58:12.967-05
 2  | Petco             | 2021-06-07 13:58:12.967-05 | 2021-06-07 13:58:12.967-05
 3  | Pet Supplies Plus | 2021-06-07 13:58:12.967-05 | 2021-06-07 13:58:12.967-05
(3 rows)

```
