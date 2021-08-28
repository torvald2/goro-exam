<template>
  <div>
    <div class="flex">
      <div class="flex-1 p-10 py-5">
        <!-- <h1 class="text-2xl font-bold">TestContent</h1> -->
        <div id="paper"></div>
      </div>
      <div class="mt-10 py-10">
        <select-map />
        <form-map
          @sendData="getFormData"
          v-if="getModeMap == 0"
          ref="formMapComponent"
        />
        <solar-form @sendData="getSolarData" v-if="getModeMap == 1" />
      </div>
    </div>
    <div class="flex p-10 py-5">
      <!-- <h1 class="text-2xl font-bold">TestContent</h1> -->
      <table-data
        v-bind:data-planets="getPlanets"
        ref="tableDataComponent"
        :key="componentKey"
      />
      <houses-table
        class="px-4"
        ref="tableHousesComponent"
        :key="componentKey"
      />
    </div>
  </div>
</template>

<script>
import { Origin, Horoscope } from "circular-natal-horoscope-js";
import astrology from "astrochart-modified";
import ephemeris from "ephemeris";
import FormMap from "./Form.vue";
import SolarForm from "./SolarForm.vue";
import SelectMap from "./SelectMap.vue";
import TableData from "./TableComponent.vue";
import HousesTable from "./HousesComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TestContent",
  components: {
    SolarForm,
    FormMap,
    SelectMap,
    TableData,
    HousesTable,
  },
  computed: mapGetters([
    "getPlanets",
    "getCuspsDegrees",
    "getModeMap",
    "getHouses",
  ]),
  methods: {
    ...mapActions(["setPlanetsDegrees", "setCuspsDegrees", "setHousesDegrees"]),
    getPlanetsHoroscope: function (horoscope) {
      var planets = {};
      horoscope.CelestialBodies.all.forEach((element) => {
        planets[element.label] = [
          element.ChartPosition.Ecliptic.DecimalDegrees,
          element.ChartPosition.Ecliptic.ArcDegreesFormatted30,
        ];
      });

      return planets;
    },
    getCuspsHoroscope: function (horoscope) {
      var cuspsDegrees = [];
      horoscope.ZodiacCusps.forEach((element) => {
        cuspsDegrees.push(element.ChartPosition.Horizon.DecimalDegrees);
      });

      return cuspsDegrees;
    },
    getHoroscope: function (data) {
      var horoscope = new Horoscope({
        origin: new Origin({
          year: data.year,
          month: data.month - 1, // 0 = January, 11 = December!
          date: data.date,
          hour: data.hour,
          minute: data.minute,
          // СПб 59.97770755245601, 30.289192765690085
          latitude: 59.97,
          longitude: 30.28,
        }),
        houseSystem: "placidus",
        zodiac: "tropical",
        aspectPoints: ["bodies", "points", "angles"],
        aspectWithPoints: ["bodies", "points", "angles"],
        aspectTypes: ["major", "minor"],
        customOrbs: {},
        language: "en",
      });

      return horoscope;
    },
    getFormData: function (data) {
      // FormMap.check();
      this.horoscope = this.getHoroscope(data);

      this.setPlanetsDegrees(this.horoscope);
      this.setCuspsDegrees(this.horoscope);
      this.setHousesDegrees(this.horoscope);
      console.log(this.getHouses);

      var newData = {
        planets: this.getPlanets,
        cusps: this.getCuspsDegrees,
      };
      document.getElementById("paper").innerHTML = "";
      var radix = new astrology.Chart("paper", 600, 600).radix(newData);

      radix.addPointsOfInterest({
        As: [newData.cusps[0]],
        Ic: [newData.cusps[3]],
        Ds: [newData.cusps[6]],
        Mc: [newData.cusps[9]],
      });

      radix.aspects();

      this.componentKey += 1;
    },
    getSolarData: function (data) {
      this.horoscope = this.getHoroscope(data);

      // this.setPlanetsDegrees(this.horoscope);
      // this.setCuspsDegrees(this.horoscope);
      // this.setHousesDegrees(this.horoscope);

      var solarDate = new Date(
        data.solarYear,
        data.month - 1,
        data.date,
        data.hour,
        data.minute
      );
      var ephemerisPlanets = ephemeris.getAllPlanets(solarDate, 59.97, 30.28);

      var sunDegreesSolar = ephemerisPlanets.observed.sun.apparentLongitudeDd;
      const sunDegreesHoroscope =
        this.horoscope.CelestialBodies.sun.ChartPosition.Ecliptic
          .DecimalDegrees;

      // ИЛИ
      // Узнать изменение градуса солнца за одну секунду
      // и прибавить/вычесть столько секунд, чтобы получить соляр
      // .............
      var SPS = 0; // speed per second

      ephemerisPlanets = ephemeris.getAllPlanets(
        new Date(Math.floor(solarDate / 1000) * 1000),
        59.97,
        30.28
      );
      var ephemerisPlanets1 = ephemeris.getAllPlanets(
        new Date((Math.floor(solarDate / 1000) - 1) * 1000),
        59.97,
        30.28
      );
      SPS = Math.abs(
        ephemerisPlanets.observed.sun.apparentLongitudeDd -
          ephemerisPlanets1.observed.sun.apparentLongitudeDd
      );

      var countSecondTo = (sunDegreesSolar - sunDegreesHoroscope) / SPS;

      if (countSecondTo > 0) {
        solarDate = new Date(
          (Math.floor(solarDate / 1000) - countSecondTo) * 1000
        );
      } else {
        solarDate = new Date(
          (Math.floor(solarDate / 1000) + countSecondTo) * 1000
        );
      }

      console.log(solarDate);

      var dataRadix = {
        planets: this.getPlanetsHoroscope(this.horoscope),
        cusps: this.getCuspsHoroscope(this.horoscope),
      };

      var solarData = {
        year: solarDate.getFullYear(),
        month: solarDate.getMonth() + 1, // 0 = January, 11 = December!
        date: solarDate.getDate(),
        hour: solarDate.getHours(),
        minute: solarDate.getMinutes(),
      };

      var solar = this.getHoroscope(solarData);
      var dataTransit = {
        planets: this.getPlanetsHoroscope(solar),
        cusps: this.getCuspsHoroscope(solar),
      };

      document.getElementById("paper").innerHTML = "";
      var chart = new astrology.Chart("paper", 800, 800, {
        MARGIN: 100,
        SYMBOL_SCALE: 0.8,
      });
      var radix = chart.radix(dataRadix);

      // Aspect calculation
      // default is planet to planet, but it is possible add some important points:
      radix.addPointsOfInterest({
        As: [dataRadix.cusps[0]],
        Ic: [dataRadix.cusps[3]],
        Ds: [dataRadix.cusps[6]],
        Mc: [dataRadix.cusps[9]],
      });

      var transit = radix.transit(dataTransit);
      transit.aspects();
      this.componentKey += 1;
    },
  },
  data() {
    return {
      horoscope: null,
      solar: null,
      componentKey: 0,
    };
  },
  mounted() {
    var date = new Date();

    this.horoscope = new Horoscope({
      origin: new Origin({
        year: date.getFullYear(),
        month: date.getMonth(), // 0 = January, 11 = December!
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        // СПб 59.97770755245601, 30.289192765690085
        latitude: 59.97,
        longitude: 30.28,
      }),
      houseSystem: "placidus",
      zodiac: "tropical",
      aspectPoints: ["bodies", "points", "angles"],
      aspectWithPoints: ["bodies", "points", "angles"],
      aspectTypes: ["major", "minor"],
      customOrbs: {},
      language: "en",
    });

    this.setPlanetsDegrees(this.horoscope);
    this.setCuspsDegrees(this.horoscope);
    this.setHousesDegrees(this.horoscope);

    var data = {
      planets: this.getPlanets,
      cusps: this.getCuspsDegrees,
    };
    // var houses = this.getHouses;
    console.log(this.horoscope);
    var chart = new astrology.Chart("paper", 600, 600).radix(data);

    // Aspect calculation
    // default is planet to planet, but it is possible add some important points:
    // chart.addPointsOfInterest({
    //   As: [houses[1][0]],
    //   Ic: [houses[4][0]],
    //   Ds: [houses[7][0]],
    //   Mc: [houses[10][0]],
    // });
    chart.aspects();
  },
};
</script>