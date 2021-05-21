CREATE (FIFA:Game {title:'FIFA 21', released:2020, install_size:'50 GB', cover_image:'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/cover-athlete/common/fifa21-cover-section-2.png.adapt.320w.png'})
CREATE (Sims:Game {title:'Sims 4', released:2014, install_size:'16 GB', cover_image:'https://nerdist.com/wp-content/uploads/2020/04/Sims-4-Cover.jpg'})
CREATE (Madden:Game {title:'Madden 21', released:2020, install_size:'45 GB', cover_image:'https://www.pdvg.it/wp-content/uploads/2020/06/M21_MVP_ESRB.jpg'})
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

CREATE (Doom:Game {title:'Doom Eternal', released:2020, install_size:'68.34 GB', cover_image:'https://s3.gaming-cdn.com/images/products/2669/orig/doom-eternal-cover.jpg'})
CREATE (DoomII:Game {title:'Doom II (Classic)', released:2019, install_size:'42.6 GB', cover_image:'https://i.pinimg.com/originals/3b/65/ef/3b65efce9e10df5d4ad6de31a590cac2.png'})
CREATE (Bethesda:Dev {name:'Bethesda Softworks', creation_year:1986, country:'EEUU'})
CREATE (FPS:Genre {name:'FPS'})
CREATE    
    (Doom)-[:DEVELOPED_BY]->(Bethesda),
    (DoomII)-[:DEVELOPED_BY]->(Bethesda),
    (Doom)-[:TYPE_OF_GAME]->(FPS),
    (DoomII)-[:TYPE_OF_GAME]->(FPS)

CREATE (AlanWake:Game {title:'Alan Wake', released:2020, install_size:'9.06 GB', cover_image:'https://images-na.ssl-images-amazon.com/images/I/61Yl1RjcXsL._AC_SL1272_.jpg'}) //Remedy
CREATE (QuantumBreak:Game {title:'Quantum Break', released:2016, install_size:'42.3 GB', cover_image:'https://s1.gaming-cdn.com/images/products/1251/orig/quantum-break-cover.jpg'}) //Remedy
CREATE (HEllBlade:Game {title:'Hellblade: Senuas Sacrifice', released:2018, install_size:'20.9 GB', cover_image:'https://cdnb.artstation.com/p/assets/images/images/017/202/551/large/hugues-giboire-promoart-small.jpg?1555018143'}) //Ninja Theory
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

CREATE (TheWitcher:Game {title:'The Witcher 3', released:2015, install_size:'35 GB', cover_image:'https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64'})
CREATE (CyberPunk:Game {title:'CyberPunk2077', released:2020, install_size:'40 GB', cover_image:'https://muropaketti.com/wp-content/uploads/2020/12/cyberpunk-box.jpg'})
CREATE (CDProject:Dev {name:'CD Project RED', creation_year:1995, country:'Poland'})
CREATE (RolePlay:Genre {name:'Role Play'})
CREATE    
    (TheWitcher)-[:DEVELOPED_BY]->(CDProject),
    (CyberPunk)-[:DEVELOPED_BY]->(CDProject),
    (TheWitcher)-[:TYPE_OF_GAME]->(RolePlay),
    (CyberPunk)-[:TYPE_OF_GAME]->(RolePlay)