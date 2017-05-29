const a = [];
const max = 10000000000000000000000000000;
const min = 1;
const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in interdum diam, a maximus tortor. Pellentesque efficitur ex sed enim consequat maximus. Praesent in ornare purus, in vehicula erat. Nulla dictum a risus et imperdiet. Nam at libero nec diam mattis interdum. Praesent dignissim fringilla vestibulum. Nunc sit amet cursus mauris.`

for (let i = 1; i++; i > 0) {
  a.push(Math.floor(Math.random() * (max - min)) + min + loremIpsum);
  if (a.length > 10000000) {
    a.pop();
  }
}
