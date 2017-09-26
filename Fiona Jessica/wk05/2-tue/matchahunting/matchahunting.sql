CREATE TABLE desserts (
  id SERIAL4 PRIMARY KEY,
  image_url VARCHAR(400),
  name VARCHAR(200)
);

INSERT INTO desserts (name, image_url) VALUES ('pudding', 'https://i.pinimg.com/736x/4b/6c/ed/4b6ced07a912fe662a34e1ecae7b5a99.jpg');

INSERT INTO desserts (name, image_url) VALUES ('cheesecake', 'https://i.pinimg.com/564x/57/06/09/570609279af5156f9ad24657013882d8.jpg');

INSERT INTO desserts (name, image_url) VALUES ('mochi', 'https://mochidoki.com/media/catalog/product/cache/1/image/420x220/9df78eab33525d08d6e5fb8d27136e95/g/r/green-tea-classic-420x220.png');
