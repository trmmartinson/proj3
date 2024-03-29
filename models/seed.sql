use houses;
delete from agents;
delete from homes;
truncate table agents;
truncate table homes;
insert into homes
    (zipcode, image_url, createdAt, updatedAt, address, price,agent_id,beds, baths, lot_size, square_feet, description) 
    values (55423, "1.jpg", "2019-05-08 18:54:41", "2019-05-08 18:54:41",
    "1234 Main Street, Corkville MN 55423", 330000, 1, 3 , 2, 0.25, 1400, "description one"
   );
insert into homes
    (zipcode, image_url, createdAt, updatedAt, address, price,agent_id, beds, baths, lot_size, square_feet, description) 
    values (55423, "2.jpg", "2019-05-08 18:54:41", "2019-05-08 18:54:41",
    "1235 Main Street, Corkville MN 55423", 220000,1, 3, 4, 1, 900, "description 2"
   );

insert into homes
    (zipcode, image_url, createdAt, updatedAt, address, price,agent_id, beds, baths, lot_size, square_feet, description) 
    values (55423, "3.jpg", "2019-05-08 18:54:41", "2019-05-08 18:54:41",
    "1236 Main Street, Corkville MN 55423", 190000,2, 3, 4, 1.25, 1700, "description three"
   );

insert into homes
    (zipcode, image_url, createdAt, updatedAt, address, price,agent_id, beds, baths, lot_size, square_feet, description) 
    values (55423, "4.jpg", "2019-05-08 18:54:41", "2019-05-08 18:54:41",
    "1237 Main Street, Corkville MN 55423", 150000,1, 5, 2.5, 5, 1500, "description four"
   );



insert into agents (email, name, image_url,agency,phone,createdAt,updatedAt)
   values
    ("tom", "Chris Barley", "agent10.jpg", "SNL Properties", 
        "952-555-1212", "2019-05-08 19:00:00", "2019-05-08 10:10:11"); 
insert into agents (email, name, image_url,agency,phone,createdAt,updatedAt)
     values
    ("tom", "Agent Two", "agenttwo.jpg", "ACME Real Estate", 
        "612-555-1212", "2019-05-08 19:00:00","2019-05-08 10:10:11"); 
insert into agents (email, name, image_url,agency,phone,createdAt,updatedAt)
     values
    ("tom", "Agent Three", "agentthree.jpg", "ABC Homesales", 
      "651-555-1212", "2019-05-08 19:00:00","2019-05-08 10:10:11"); 



