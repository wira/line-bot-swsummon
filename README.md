This project is created for personal usage back then in our guild's LINE group since we all were summon-addicted with no budget to do actual summons.
Most likely everything is broken if you are trying to run it now anyway, this repo is only for my archive purpose.

### Summon rates and planned sql query

QUERY: https://stackoverflow.com/questions/2417621/mysql-select-random-entry-but-weight-towards-certain-entries

`SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 10) t);`

`SELECT * FROM monster ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 10;`

MS:
  `SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);`

LND:
  `SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Light', 'Dark') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);`

LS:
  `SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE grade > 3 AND attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);`

Rates:

Mystical and Elemental Scrolls
  Nat 5 - 0.5%
  Nat 4 - 8.0%
  Nat 3 - 91.5%
Light and Dark
  Nat 5 - 0.35%
  Nat 4 - 6.0%
  Nat 3 - 93.65%
Legendary
  Nat 5 - 6.5%
  Nat 4 - 93.5%

source: https://summonerswarskyarena.info/summon-simulator/

### DB query for initialization

```postgresql
CREATE TABLE monster (
    id          serial NOT NULL PRIMARY KEY,
    name        varchar(40) NOT NULL,
    attribute   varchar(40) NOT NULL,
    grade       integer NOT NULL,
    weight      numeric(4, 2) NOT NULL,
    weightls    numeric(4, 2) DEFAULT NULL
);
```

```postgresql
INSERT INTO monster VALUES
  (DEFAULT, 'Fairy', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Fairy', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Fairy', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Yeti', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Hellhound', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Garuda', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Salamander', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Warbear', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Warbear', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Elemental', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Elemental', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Harpu', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Harpu', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Viking', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Viking', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Vagabond', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Vagabond', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Vagabond', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Harpy', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Harpy', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Harpy', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Harpy', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Harpy', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Inugami', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Inugami', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Inugami', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Inugami', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Inugami', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Serpent', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Serpent', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Serpent', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Serpent', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Serpent', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Golem', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Golem', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Golem', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Golem', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Golem', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Griffon', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Griffon', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Griffon', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Griffon', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Griffon', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Inferno', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Inferno', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Inferno', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Inferno', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Inferno', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'High Elemental', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'High Elemental', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'High Elemental', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'High Elemental', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'High Elemental', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Bearman', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Bearman', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Bearman', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Bearman', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Bearman', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Werewolf', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Werewolf', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Werewolf', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Werewolf', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Werewolf', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Amazon', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Amazon', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Amazon', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Amazon', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Amazon', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Martial Cat', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Martial Cat', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Martial Cat', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Martial Cat', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Martial Cat', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Martial Artist', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Martial Artist', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Martial Artist', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Martial Artist', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Martial Artist', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Bounty Hunter', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Bounty Hunter', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Bounty Hunter', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Bounty Hunter', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Bounty Hunter', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Imp Champion', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Imp Champion', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Imp Champion', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Imp Champion', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Imp Champion', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Mystic Witch', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Mystic Witch', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Mystic Witch', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Mystic Witch', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Mystic Witch', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Grim Reaper', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Grim Reaper', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Grim Reaper', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Grim Reaper', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Grim Reaper', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Living Armor', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Living Armor', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Living Armor', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Living Armor', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Living Armor', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Drunken Master', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Drunken Master', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Drunken Master', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Drunken Master', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Drunken Master', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Minotauros', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Minotauros', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Minotauros', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Minotauros', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Minotauros', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Lizardman', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Lizardman', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Lizardman', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Lizardman', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Lizardman', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Beast Hunter', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Beast Hunter', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Beast Hunter', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Beast Hunter', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Beast Hunter', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Penguin Knight', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Penguin Knight', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Penguin Knight', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Penguin Knight', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Penguin Knight', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Battle Mammoth', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Battle Mammoth', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Battle Mammoth', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Battle Mammoth', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Battle Mammoth', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Charger Shark', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Charger Shark', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Charger Shark', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Charger Shark', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Charger Shark', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Mummy', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Mummy', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Mummy', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Mummy', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Mummy', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Frankenstein', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Frankenstein', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Frankenstein', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Frankenstein', 'Light', 3, 93.65, DEFAULT),
  (DEFAULT, 'Frankenstein', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Elven Ranger', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Elven Ranger', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Elven Ranger', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Elven Ranger', 'Light', 3, 6, DEFAULT),
  (DEFAULT, 'Elven Ranger', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Epikion Priest', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Epikion Priest', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Epikion Priest', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Epikion Priest', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Epikion Priest', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Magical Archer', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Magical Archer', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Magical Archer', 'Wind', 3, 91.5, DEFAULT),
  (DEFAULT, 'Magical Archer', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Magical Archer', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Taoist', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Taoist', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Taoist', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Taoist', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Taoist', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Harg', 'Water', 3, 91.5, DEFAULT),
  (DEFAULT, 'Harg', 'Fire', 3, 91.5, DEFAULT),
  (DEFAULT, 'Harg', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Harg', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Harg', 'Dark', 3, 93.65, DEFAULT),
  (DEFAULT, 'Nine-Tailed Fox', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Nine-Tailed Fox', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Nine-Tailed Fox', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Nine-Tailed Fox', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Nine-Tailed Fox', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Undine', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Undine', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Undine', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Undine', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Undine', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Sylph', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Sylph', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Sylph', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Sylph', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Sylph', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Sylphid', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Sylphid', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Sylphid', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Sylphid', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Sylphid', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Succubus', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Succubus', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Succubus', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Succubus', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Succubus', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Joker', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Joker', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Joker', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Joker', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Joker', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Pierret', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Pierret', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Pierret', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Pierret', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Pierret', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Phantom Thief', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Phantom Thief', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Phantom Thief', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Phantom Thief', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Phantom Thief', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Rakshasa', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Rakshasa', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Rakshasa', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Rakshasa', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Rakshasa', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Death Knight', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Death Knight', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Death Knight', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Death Knight', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Death Knight', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Lich', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Lich', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Lich', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Lich', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Lich', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Samurai', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Samurai', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Samurai', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Samurai', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Samurai', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Kung Fu Girl', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Kung Fu Girl', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Kung Fu Girl', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Kung Fu Girl', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Kung Fu Girl', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Brownie Magician', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Brownie Magician', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Brownie Magician', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Brownie Magician', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Brownie Magician', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Kobold Bomber', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Kobold Bomber', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Kobold Bomber', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Kobold Bomber', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Kobold Bomber', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Barbaric King', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Barbaric King', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Barbaric King', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Barbaric King', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Barbaric King', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Pirate Captain', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Pirate Captain', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Pirate Captain', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Pirate Captain', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Pirate Captain', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Mermaid', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Mermaid', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Mermaid', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Mermaid', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Mermaid', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Magic Knight', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Magic Knight', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Magic Knight', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Magic Knight', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Magic Knight', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Assassin', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Assassin', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Assassin', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Assassin', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Assassin', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Neostone Fighter', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Neostone Fighter', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Neostone Fighter', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Neostone Fighter', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Neostone Fighter', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Neostone Agent', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Neostone Agent', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Neostone Agent', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Neostone Agent', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Neostone Agent', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Jack-O-Lantern', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Jack-O-Lantern', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Jack-O-Lantern', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Jack-O-Lantern', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Jack-O-Lantern', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Dice Magician', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Dice Magician', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Dice Magician', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Dice Magician', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Dice Magician', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Ninja', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Ninja', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Ninja', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Ninja', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Ninja', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Anubis', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Anubis', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Anubis', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Anubis', 'Light', 4, 6, DEFAULT),
  (DEFAULT, 'Anubis', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Horus', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Horus', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Horus', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Horus', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Horus', 'Dark', 4, 6, DEFAULT),
  (DEFAULT, 'Vampire', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Vampire', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Vampire', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Vampire', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Vampire', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Sky Dancer', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Sky Dancer', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Sky Dancer', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Sky Dancer', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Sky Dancer', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Harp Magician', 'Water', 4, 8, 93.5),
  (DEFAULT, 'Harp Magician', 'Fire', 4, 8, 93.5),
  (DEFAULT, 'Harp Magician', 'Wind', 4, 8, 93.5),
  (DEFAULT, 'Harp Magician', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Harp Magician', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Valkyrja', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Valkyrja', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Valkyrja', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Valkyrja', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Valkyrja', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Dragon', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Dragon', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Dragon', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Dragon', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Dragon', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Phoenix', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Phoenix', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Phoenix', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Phoenix', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Phoenix', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Chimera', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Chimera', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Chimera', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Chimera', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Chimera', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Oracle', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Oracle', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Oracle', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Oracle', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Oracle', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Occult  Girl', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Occult  Girl', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Occult  Girl', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Occult  Girl', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Occult  Girl', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Dragon Knight', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Dragon Knight', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Dragon Knight', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Dragon Knight', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Dragon Knight', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Monkey King', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Monkey King', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Monkey King', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Monkey King', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Monkey King', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Archangel', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Archangel', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Archangel', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Archangel', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Archangel', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Beast Monk', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Beast Monk', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Beast Monk', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Beast Monk', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Beast Monk', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Hell Lady', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Hell Lady', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Hell Lady', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Hell Lady', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Hell Lady', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Pioneer', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Pioneer', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Pioneer', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Pioneer', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Pioneer', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Polar Queen', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Polar Queen', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Polar Queen', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Polar Queen', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Polar Queen', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Sea Emperor', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Sea Emperor', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Sea Emperor', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Sea Emperor', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Sea Emperor', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Fairy King', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Fairy King', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Fairy King', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Fairy King', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Fairy King', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Panda Warrior', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Panda Warrior', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Panda Warrior', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Panda Warrior', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Panda Warrior', 'Dark', 5, 0.35, DEFAULT),
  (DEFAULT, 'Unicorn', 'Water', 5, 0.5, 6.5),
  (DEFAULT, 'Unicorn', 'Fire', 5, 0.5, 6.5),
  (DEFAULT, 'Unicorn', 'Wind', 5, 0.5, 6.5),
  (DEFAULT, 'Unicorn', 'Light', 5, 0.35, DEFAULT),
  (DEFAULT, 'Unicorn', 'Dark', 5, 0.35, DEFAULT);
```
