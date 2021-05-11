CREATE (FIFA:Game {title:'FIFA 21', released:2020, install_size:'50 GB'})
CREATE (Sims:Game {title:'Sims 4', released:2014, install_size:'16 GB'})
CREATE (Madden:Game {title:'Madden 21', released:2020, install_size:'45 GB'})
CREATE (EA:Dev {name:'Electronic Arts', creation_year:1982, country:'EEUU'})
CREATE (Sports:Genre {name:'Sports'})
CREATE (Simulation:Genre {name:'Simulation'})
CREATE
    (FIFA)-[:DEVELOPED_BY]->(EA),
    (Sims)-[:DEVELOPED_BY]->(EA),
    (Madden)-[:DEVELOPED_BY]->(EA),
    (FIFA)-[:TYPE_OF_GAME]->(Sports),
    (Sims)-[:TYPE_OF_GAME]->(Simulation),
    (Madden)-[:TYPE_OF_GAME]->(Sports)

CREATE (Doom:Game {title:'Doom Eternal', released:2020, install_size:'68.34 GB'})
CREATE (DoomII:Game {title:'Doom II (Classic)', released:2019, install_size:'42.6 GB'})
CREATE (Bethesda:Dev {name:'Bethesda Softworks', creation_year:1986, country:'EEUU'})
CREATE (FPS:Genre {name:'FPS'})
CREATE    
    (Doom)-[:DEVELOPED_BY]->(Bethesda),
    (DoomII)-[:DEVELOPED_BY]->(Bethesda),
    (Doom)-[:TYPE_OF_GAME]->(FPS),
    (DoomII)-[:TYPE_OF_GAME]->(FPS)

CREATE (AlanWake:Game {title:'Alan Wake', released:2020, install_size:'9.06 GB'}) //Remedy
CREATE (QuantumBreak:Game {title:'Quantum Break', released:2016, install_size:'42.3 GB'}) //Remedy
CREATE (HEllBlade:Game {title:'Hellblade: Senuas Sacrifice', released:2018, install_size:'20.9 GB'}) //Ninja Theory
CREATE (Remedy:Dev {name:'Remedy Entertainment', creation_year:1995, country:'Finland'})
CREATE (NinjaTheory:Dev {name:'Ninja Theory', creation_year:2000, country:'United Kingdom'})
CREATE (Action:Genre {name:'Action / Adventure'})
CREATE    
    (AlanWake)-[:DEVELOPED_BY]->(Remedy),
    (HEllBlade)-[:DEVELOPED_BY]->(NinjaTheory),
    (QuantumBreak)-[:DEVELOPED_BY]->(Remedy),
    (AlanWake)-[:TYPE_OF_GAME]->(Action),
    (HEllBlade)-[:TYPE_OF_GAME]->(Action),
    (QuantumBreak)-[:TYPE_OF_GAME]->(Action)

CREATE (TheWitcher:Game {title:'The Witcher 3', released:2015, install_size:'35 GB'})
CREATE (CDProject:Dev {name:'CD Project RED', creation_year:1995, country:'Poland'})
CREATE (RolePlay:Genre {name:'Role Play'})
CREATE    
    (TheWitcher)-[:DEVELOPED_BY]->(CDProject),
    (TheWitcher)-[:TYPE_OF_GAME]->(RolePlay)