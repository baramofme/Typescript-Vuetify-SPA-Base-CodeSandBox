<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-layout row wrap>
      <v-flex xs12 v-for="player in players" :key="player.number"
        style="max-width:400px">
        <v-card :color="cardColor(player)" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">{{player.number}} - {{player.firstName}} {{player.lastName}}</div>
                  <div>{{player.pos}}</div>
                  <div>{{player.ht}} {{player.wt}}</div>
                  <div>{{player.age}} - {{player.exp}}</div>
                  <div>{{player.college}}</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media
                  :src="player.pic"
                  height="125px"
                  contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'roster',
  data() {
    return {
      players: [
        {
          number: 11,
          firstName: "Carson",
          lastName: "Wentz",
          pos: "IR",
          age: 24,
          ht: "6-5",
          wt: "237",
          exp: "2",
          college: "North Dakota State",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2573079.png&w=350&h=254"
        },
        {     
          number: 9,
          firstName: "Nick",
          lastName: "Foles",
          pos: "QB",
          age: 28,
          ht: "6-6",
          wt: "243",
          exp: "6",
          college: "Arizona",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14877.png&w=350&h=254"
        },
        {     
          number: 7,
          firstName: "Nate",
          lastName: "Sudfeld",
          pos: "QB",
          age: 24,
          ht: "6-6",
          wt: "227",
          exp: "2",
          college: "Indiana",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2979501.png&w=350&h=254"
        },
        {     
          number: 36,
          firstName: "Jay",
          lastName: "Ajayi",
          pos: "RB",
          age: 24,
          ht: "6-0",
          wt: "223",
          exp: "3",
          college: "Boise State",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2573300.png&w=350&h=254"
        },
        {     
          number: 38,
          firstName: "Kenyon",
          lastName: "Barner",
          pos: "RB",
          age: 27,
          ht: "5-9",
          wt: "195",
          exp: "4",
          college: "Oregon",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15921.png&w=350&h=254"
        },
        {     
          number: 29,
          firstName: "LaGarrette",
          lastName: "Blount",
          pos: "RB",
          age: 31,
          ht: "6-0",
          wt: "250",
          exp: "8",
          college: "Oregon",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13213.png&w=350&h=254"
        },
        {     
          number: 30,
          firstName: "Corey",
          lastName: "Clement",
          pos: "RB",
          age: 23,
          ht: "5-10",
          wt: "220",
          exp: "R",
          college: "Wisconsin",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3045260.png&w=350&h=254"
        },
        {     
          number: 34,
          firstName: "Darnell",
          lastName: "Pumphrey",
          pos: "RB",
          age: 23,
          ht: "5-9",
          wt: "176",
          exp: "R",
          college: "San Diego State",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3047519.png&w=350&h=254"
        },
        {     
          number: 28,
          firstName: "Wendell",
          lastName: "Smallwood",
          pos: "RB",
          age: 23,
          ht: "5-10",
          wt: "208",
          exp: "2",
          college: "West Virginia",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3042429.png&w=350&h=254"
        },
        {     
          number: 43,
          firstName: "Darren",
          lastName: "Sproles",
          pos: "IR",
          age: 34,
          ht: "5-6",
          wt: "190",
          exp: "13",
          college: "Kansas State",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8544.png&w=350&h=254"
        },
        {     
          number: 13,
          firstName: "Nelson",
          lastName: "Agholor",
          pos: "WR",
          age: 24,
          ht: "6-0",
          wt: "198",
          exp: "3",
          college: "USC",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971618.png&w=350&h=254"
        },
        {     
          number: 22,
          firstName: "Shelton",
          lastName: "Gibson",
          pos: "WR",
          age: 22,
          ht: "5-11",
          wt: "191",
          exp: "R",
          college: "West Virginia",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3042417.png&w=350&h=254"
        },
        {     
          number: 10,
          firstName: "Mack",
          lastName: "Hollins",
          pos: "WR",
          age: 24,
          ht: "6-4",
          wt: "221",
          exp: "R",
          college: "North Carolina",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2991662.png&w=350&h=254"
        },
        {     
          number: 17,
          firstName: "Alshon",
          lastName: "Jeffrey",
          pos: "WR",
          age: 27,
          ht: "6-3",
          wt: "218",
          exp: "6",
          college: "South Carolina",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14912.png&w=350&h=254"
        },
        {     
          number: 14,
          firstName: "Marcus",
          lastName: "Johnson",
          pos: "WR",
          age: 23,
          ht: "6-1",
          wt: "204",
          exp: "1",
          college: "Texas",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971618.png&w=350&h=254"
        },
        {     
          number: 82,
          firstName: "Torrey",
          lastName: "Smith",
          pos: "WR",
          age: 28,
          ht: "6-0",
          wt: "205",
          exp: "7",
          college: "Maryland",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14032.png&w=350&h=254"
        },
        {     
          number: 87,
          firstName: "Brent",
          lastName: "Celek",
          pos: "TE",
          age: 32,
          ht: "6-4",
          wt: "255",
          exp: "11",
          college: "Cincinnati",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/10605.png&w=350&h=254"
        },
        {     
          number: 88,
          firstName: "Trey",
          lastName: "Burton",
          pos: "TE",
          age: 26,
          ht: "6-3",
          wt: "235",
          exp: "4",
          college: "Florida",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16974.png&w=350&h=254"
        },
        {     
          number: 86,
          firstName: "Zach",
          lastName: "Ertz",
          pos: "TE",
          age: 27,
          ht: "6-5",
          wt: "250",
          exp: "5",
          college: "Stanford",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15835.png&w=350&h=254"
        },
        {     
          number: 62,
          firstName: "Jason",
          lastName: "Kelce",
          pos: "C",
          age: 30,
          ht: "6-3",
          wt: "295",
          exp: "7",
          college: "Cincinnati",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14124.png&w=350&h=254"
        },
        {     
          number: 79,
          firstName: "Brandon",
          lastName: "Brooks",
          pos: "G",
          age: 28,
          ht: "6-5",
          wt: "335",
          exp: "6",
          college: "Miami (OH)",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14962.png&w=350&h=254"
        },
        {     
          number: 73,
          firstName: "Isaac",
          lastName: "Seumalo",
          pos: "G",
          age: 24,
          ht: "6-4",
          wt: "303",
          exp: "2",
          college: "Oregon State",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2978247.png&w=350&h=254"
        },
        {     
          number: 67,
          firstName: "Chance",
          lastName: "Warmack",
          pos: "G",
          age: 26,
          ht: "6-2",
          wt: "323",
          exp: "5",
          college: "Alabama",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15814.png&w=350&h=254"
        },
        {     
          number: 61,
          firstName: "Stefen",
          lastName: "Wisniewski",
          pos: "G",
          age: 26,
          ht: "6-3",
          wt: "305",
          exp: "7",
          college: "Penn State",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/169.png&w=350&h=254"
        },
        {     
          number: 66,
          firstName: "Will",
          lastName: "Beatty",
          pos: "OT",
          age: 32,
          ht: "6-6",
          wt: "319",
          exp: "9",
          college: "Connecticut",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12610.png&w=350&h=254"
        },
        {     
          number: 65,
          firstName: "Lane",
          lastName: "Johnson",
          pos: "OT",
          age: 27,
          ht: "6-6",
          wt: "317",
          exp: "5",
          college: "Oklahoma",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15797.png&w=350&h=254"
        },
        {     
          number: 71,
          firstName: "Jason",
          lastName: "Peters",
          pos: "IR",
          age: 35,
          ht: "6-4",
          wt: "328",
          exp: "14",
          college: "Arkansas",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/6012.png&w=350&h=254"
        },
        {     
          number: 72,
          firstName: "Halapoulivaati",
          lastName: "Vaitai",
          pos: "OT",
          age: 24,
          ht: "6-6",
          wt: "320",
          exp: "2",
          college: "TCU",
          pic : "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971557.png&w=350&h=254"
        }     
      ]    
    }
  },
  methods:{
    cardColor: function (player) {
      switch(player.pos) {
          case 'QB':
              return "cyan darken-2"
          case 'RB':
              return "green darken-2"
          case 'WR':
          case 'TE': 
              return "blue darken-2"
          case 'IR': 
              return "red darken-2"
          default:
              return "orange darken-2"
      }
    }        
  }
}
</script>
