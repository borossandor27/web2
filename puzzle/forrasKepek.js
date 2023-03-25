var forrasKepek = {
  mokus: {
    src: "./puzzle_kepek/mokus.png",
    kepek: {
      2: {
        0: "mokus-0.png",
        1: "mokus-1.png",
        2: "mokus-2.png",
        3: "mokus-3.png",
      },
      3: {
        0: "mokus-0.png",
        1: "mokus-1.png",
        2: "mokus-2.png",
        3: "mokus-3.png",
        4: "mokus-4.png",
        5: "mokus-5.png",
        6: "mokus-6.png",
        7: "mokus-7.png",
        8: "mokus-8.png",
      },

      4: {
        0: "mokus-0.png",
        1: "mokus-1.png",
        2: "mokus-2.png",
        3: "mokus-3.png",
        4: "mokus-4.png",
        5: "mokus-5.png",
        6: "mokus-6.png",
        7: "mokus-7.png",
        8: "mokus-8.png",
        9: "mokus-9.png",
        10: "mokus-10.png",
        11: "mokus-11.png",
        12: "mokus-12.png",
        13: "mokus-13.png",
        14: "mokus-14.png",
        15: "mokus-15.png",
      },
    },
  },

  papagaj: {
    src: "./puzzle_kepek/papagaj.png",
    kepek: {
      2: {
        0: "papagaj-0.png",
        1: "papagaj-1.png",
        2: "papagaj-2.png",
        3: "papagaj-3.png",
      },
      3: {
        0: "papagaj-0.png",
        1: "papagaj-1.png",
        2: "papagaj-2.png",
        3: "papagaj-3.png",
        4: "papagaj-4.png",
        5: "papagaj-5.png",
        6: "papagaj-6.png",
        7: "papagaj-7.png",
        8: "papagaj-8.png",
      },
      4: {
        0: "papagaj-0.png",
        1: "papagaj-1.png",
        2: "papagaj-2.png",
        3: "papagaj-3.png",
        4: "papagaj-4.png",
        5: "papagaj-5.png",
        6: "papagaj-6.png",
        7: "papagaj-7.png",
        8: "papagaj-8.png",
        9: "papagaj-9.png",
        10: "papagaj-10.png",
        11: "papagaj-11.png",
        12: "papagaj-12.png",
        13: "papagaj-13.png",
        14: "papagaj-14.png",
        15: "papagaj-15.png",
      },
    },
  },
  kenguru: {
    src: "./puzzle_kepek/kenguru.png",
  },
  krokodil: {
    src: "./puzzle_kepek/krokodil.png",
  },
  pingvin: {
    src: "./puzzle_kepek/pingvin.png",
  },
  tengericsillag: {
    src: "./puzzle_kepek/tengericsillag.png",
  },
};
for (const [key, value] of Object.entries(forrasKepek)) {
  console.log(`${key}: ${value}`);
}
const map = new Map(Object.entries(forrasKepek));
console.log(map);
