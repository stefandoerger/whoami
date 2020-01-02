var animals = [
{ name: 'Whale Blue', species: 'Mammalia', where: 'Ocean-open'},
{ name: 'Shark whale', species: 'Elasmobranchii', where: 'Ocean-open'},
{ name: 'Elephant African', species: 'Mammalia', where: 'Grassland-Africa'},
{ name: 'Elephant Indian', species: 'Mammalia', where: 'Jungles Grasslands-Tropical-Asia'},
{ name: 'Giraffe male', species: 'Mammalia', where: 'Grassland-Africa Dry-Savannahs'},
{ name: 'Mule', species: 'Mammalia', where: 'Domestic'},
{ name: 'Camel', species: 'Mammalia', where: 'Desert-Africa Mid-East-Asia'},
{ name: 'Horse', species: 'Mammalia', where: 'Domestic'},
{ name: 'Cow', species: 'Mammalia', where: 'Grassland'},
{ name: 'Dolphin Bottlenose', species: 'Mammalia', where: 'Ocean-Coast'},
{ name: 'Donkey', species: 'Mammalia', where: 'Domestic'},
{ name: 'Tapir', species: 'Mammalia', where: 'Forest-tropical-rain'},
{ name: 'Shark Hammerhead', species: 'Elasmobranchii', where: 'Ocean-open'},
{ name: 'Seal fur', species: 'Mammalia', where: 'Arctic'},
{ name: 'Manatee', species: 'Mammalia', where: 'Bays'},
{ name: 'Bear Grizzly', species: 'Mammalia', where: 'Forest-coniferous'},
{ name: 'Alligator American', species: 'Reptilia', where: 'Rivers-Warm Lakes-Warm'},
{ name: 'Sturgeon Atlantic', species: 'Osteichthyes', where: 'Rivers Lakes Ocean'},
{ name: 'Lion', species: 'Mammalia', where: 'Grassland-Africa Forest-India'},
{ name: 'Bear American Black', species: 'Mammalia', where: 'Tundra Forest'},
{ name: 'Ostrich', species: 'Aves', where: 'Desert-Africa'},
{ name: 'Crocodile Saltwater', species: 'Reptilia', where: 'Ocean-Tropical'},
{ name: 'Pig', species: 'Mammalia', where: 'Grassland'},
{ name: 'Sheep', species: 'Mammalia', where: 'Domestic'},
{ name: 'Dog Saint Bernard', species: 'Mammalia', where: 'Domestic'},
{ name: 'Human', species: 'Mammalia', where: ''},
{ name: 'Deer white-tailed', species: 'Mammalia', where: 'Forests Swamps Brushland'},
{ name: 'Tuna', species: 'Osteichhyes', where: 'Ocean-open-water'},
{ name: 'Salamander Japanese', species: 'Amphibia', where: 'Streams-near'},
{ name: 'Carp', species: 'Osteichthyes', where: 'Lakes Rivers'},
{ name: 'Dog Foxhound', species: 'Mammalia', where: 'Domestic'},
{ name: 'Goat Milch', species: 'Mammalia', where: 'Domestic'},
{ name: 'Sting Ray', species: 'Elasmobranchii', where: 'Temperate-coast'},
{ name: 'Dog Pointer', species: 'Mammalia', where: 'Domestic'},
{ name: 'Kangaroo Red', species: 'Mammalia', where: 'Grassland Brushland-Australia'},
{ name: 'Cod Atlantic', species: 'Osteichtyes', where: 'Coastline-Atlantic'},
{ name: 'Dog Collie', species: 'Mammalia', where: 'Domestic'},
{ name: 'Pike Northern', species: 'Osteichthyes', where: 'Lakes-N.America'},
{ name: 'Trout brown', species: 'Osteichthyes', where: 'Streams'},
{ name: 'Dog Basset Hound', species: 'Mammalia', where: 'Woodland'},
{ name: 'Turkey', species: 'Aves', where: 'Woodland'},
{ name: 'Porcupine', species: 'Mammalia', where: 'Woodland'},
{ name: 'Trout Rainbow', species: 'Osteichthyes', where: 'Streams-near-sea'},
{ name: 'Gar longnose', species: 'Osteichthyes', where: 'Rivers-large'},
{ name: 'Beaver', species: 'Mammalia', where: 'Rivers-North-America'},
{ name: 'Dog Irish Terrier', species: 'Mammalia', where: 'Domestic'},
{ name: 'Dog Beagle', species: 'Mammalia', where: 'Woodland'},
{ name: 'Bass Large Mouth Black', species: 'Osteichthyes', where: 'Rivers-N.America Lakes-N.America'},
{ name: 'Dog Whippet', species: 'Mammalia', where: 'Domestic'},
{ name: 'Dog Boston Terrier', species: 'Mammalia', where: 'Domestic'},
{ name: 'Nutria', species: 'Mammalia', where: 'Woodland'},
{ name: 'Dog Fox Terrier', species: 'Mammalia', where: 'Woodland'},
{ name: 'Armadillo Nine-banded', species: 'Mammalia', where: 'Grassland-Southern'},
{ name: 'Fox Arctic', species: 'Mammalia', where: 'Coastline-Arctic'},
{ name: 'Woodchuck (Groundhog)', species: 'Mammalia', where: 'Grassland'},
{ name: 'Rabbit Domestic', species: 'Mammalia', where: 'Domestic'},
{ name: 'Chicken', species: 'Aves', where: 'Domestic'},
{ name: 'Dog Pekingese', species: 'Mammalia', where: '-'},
{ name: 'Haddock', species: 'Osteichthyes', where: 'Ocean-open'},
{ name: 'Cat domestic', species: 'Mammalia', where: 'Domestic'},
{ name: 'Salmon Chum', species: 'Osteichthyes', where: 'Ocean Rivers'},
{ name: 'Vulture Turkey', species: 'Aves', where: 'Fields-open'},
{ name: 'Opossum Large American', species: 'Mammalia', where: 'Woodland'},
{ name: 'Flounder Winter', species: 'Osteichthyes', where: 'Bays-shallow'},
{ name: 'Pheasant Ringnecked', species: 'Aves', where: 'Grassland'},
{ name: 'Perch', species: 'Osteichthyes', where: 'Lakes Streams'},
{ name: 'Duck Mallard', species: 'Aves', where: 'Streams Ponds'},
{ name: 'Mackerel Spanish', species: 'Osteichthyes', where: 'Ocean-shoreline-Atlantic'},
{ name: 'Platypus Duck-billed', species: 'Mammalia', where: 'Streams Ponds-in-Australia'},
{ name: 'Sea lamprey', species: 'Cyclostomata', where: 'Ocean Lakes'},
{ name: 'Bullhead Brown', species: 'Osteichthyes', where: 'Lakes'},
{ name: 'Mink American', species: 'Mammalia', where: 'Lakes-banks Streams-banks'},
{ name: 'Falcon Peregrin', species: 'Aves', where: 'Mountains Plains'},
{ name: 'Goshawk', species: 'Aves', where: 'Woodland Grassland'},
{ name: 'Bat Flying fox', species: 'Mammalia', where: 'Forest-tropical-Central-Africa'},
{ name: 'Duck Wood', species: 'Aves', where: 'Streams Ponds'},
{ name: 'Buzzard', species: 'Aves', where: 'Woodland Grassland'},
{ name: 'Bass Rock', species: 'Osteichthyes', where: 'Streams Lakes'},
{ name: 'Squirrel Gray', species: 'Mammalia', where: 'Forest-pine Forest-Hardwood Trees -Nut River-bottoms'},
{ name: 'Guinea Pig', species: 'Mammalia', where: 'Domestic'},
{ name: 'Rat Norway', species: 'Mammalia', where: 'Where-man-is-found'},
{ name: 'Gull Herring', species: 'Aves', where: 'Ocean-Shores Lake-Shores'},
{ name: 'Crow Hooded', species: 'Aves', where: 'Open-land'},
{ name: 'Rook', species: 'Aves', where: 'Open-land'},
{ name: 'Pumpkinseed', species: 'Osteichthyes', where: 'Ponds Streams'},
{ name: 'Pigeon', species: 'Aves', where: 'Where-man-is-found Fields'},
{ name: 'Guinea fowl', species: 'Aves', where: '-'},
{ name: 'Quail Bobwhite', species: 'Aves', where: 'Grassland Brushland'},
{ name: 'Magpie Black-billed', species: 'Aves', where: 'Woodland'},
{ name: 'European Jackdaw', species: 'Aves', where: 'Open-land'},
{ name: 'Hamster', species: 'Mammalia', where: 'Temperate-Europe Temperate-Asia'},
{ name: 'Kestrel lesser', species: 'Aves', where: 'Grassland'},
{ name: 'Hawk Night', species: 'Aves', where: 'Open-land'},
{ name: 'Chipmunk Eastern', species: 'Mammalia', where: 'Forests-Deciduous Brushland'},
{ name: 'Bat little brown', species: 'Mammalia', where: 'Barns Caves'},
{ name: 'Starling Common', species: 'Aves', where: 'Open-land'},
{ name: 'Frog leopard', species: 'Amphibia', where: 'Marshes Ponds Fields-open'},
{ name: 'Weasel least', species: 'Mammalia', where: 'Grassland Brushland Forest-deciduous'},
{ name: 'Mouse White-footed', species: 'Mammalia', where: 'Woodland Brushland'},
{ name: 'Mouse House', species: 'Mammalia', where: 'Where man is found'},
{ name: 'Canary', species: 'Aves', where: 'Woodland-Canary-Islands'},
{ name: 'Hummingbird', species: 'Aves', where: 'Woodland'},
{ name: 'Hummingbird Cuban bee', species: 'Aves', where: 'Forest-tropical-rain'},
{ name: 'Shrew Musked', species: 'Mammalia', where: 'Forest Brushland'},
{ name: 'Shrew dwarf', species: 'Mammalia', where: 'Grassland Woodland'},
{ name: 'Goby Philippine', species: 'Osteichtyes', where: 'Tropical-shores'},
{ name: 'Goldfish', species: 'Osteichtyes', where: 'Ponds'},
{ name: 'Toad American', species: 'Amphibia', where: 'Moist-areas Gardens'},
{ name: 'Frog Bull', species: 'Amphibia', where: 'Lakes Ponds'},
{ name: 'Eel American', species: 'Osteichthyes', where: 'Streams Ocean'},
{ name: 'Penguin Adelie', species: 'Aves', where: 'Arctic-waters'},
{ name: 'Robin', species: 'Aves', where: 'Open-land'},
{ name: 'Kiwi', species: 'Aves', where: 'Openland-New-Zealand'},
{ name: 'Fighting Fish Siamese', species: 'Osteichthyes', where: 'Streams-Tropical'},
{ name: 'Skate', species: 'Chondrichthyea', where: 'Ocean-open-water'},
{ name: 'Quail Japanese/European', species: 'Aves', where: 'Grassland'},
{ name: 'Gila Monster', species: 'Reptilia', where: 'Desert'},
{ name: 'Chameleon', species: 'Reptilia', where: 'Tropics'},
{ name: 'Cobra Indian', species: 'Reptilia', where: 'Tropics'},
{ name: 'Boa Constrictor', species: 'Reptilia', where: 'Tropical-S.America'},
{ name: 'Guppy', species: 'Osteichthyes', where: 'Rivers'},
{ name: 'Salamander Tiger', species: 'Amphibia', where: 'Streams Lakes'},
{ name: 'Swordtail Mexican', species: 'Osteichthyes', where: 'Lakes Rivers'},
{ name: 'Stickleback three spine', species: 'Osteichthyes', where: 'Brooks'},
{ name: 'Sea horse', species: 'Osteichthyes', where: 'Oceans-temperate'},
{ name: 'Hellbender', species: 'Amphibia', where: 'Rivers Streams'},
{ name: 'Herring Atlantic', species: 'Osteichthyes', where: 'Ocean-Atlantic'},
{ name: 'Chameleon Madagascar', species: 'Reptilia', where: 'Forest-tropical'},
{ name: 'Frog Cuban', species: 'Amphibia', where: 'Forest-rain'},
{ name: 'Molly', species: 'Osteichthyes', where: 'Lakes'},
{ name: 'Dogfish Pacific Spiny', species: 'Elasmobranchii', where: 'Ocean-shores'},
{ name: 'Trump', species: 'Ape', where: 'Backwards developed'},
]