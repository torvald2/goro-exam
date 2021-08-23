<template>
  <div class="flex">
    <div class="flex-1 p-10 py-5">
      <!-- <h1 class="text-2xl font-bold">TestContent</h1> -->
      <div id="paper"></div>
    </div>
    <div class="mt-10 py-10">
      <select-map />
      <form-map @sendData="getFormData" v-if="getModeMap == 0" />
      <solar-form @sendData="getSolarData" v-if="getModeMap == 1" />
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TestContent",
  components: {
    SolarForm,
    FormMap,
    SelectMap,
  },
  computed: mapGetters(["getPlanets", "getCuspsDegrees", "getModeMap"]),
  methods: {
    ...mapActions(["setPlanetsDegrees", "setCuspsDegrees"]),
    getFormData: function (data) {
      // var date = new Date();

      this.horoscope = new Horoscope({
        origin: new Origin({
          year: data.dateYear,
          month: data.dateMonth - 1, // 0 = January, 11 = December!
          date: data.dateDay,
          hour: data.hour,
          minute: data.minute,
          // СПб 59.97770755245601, 30.289192765690085
          latitude: 59.97,
          longitude: 30.28,
        }),
        houseSystem: "whole-sign",
        zodiac: "tropical",
        aspectPoints: ["bodies", "points", "angles"],
        aspectWithPoints: ["bodies", "points", "angles"],
        aspectTypes: ["major", "minor"],
        customOrbs: {},
        language: "en",
      });

      this.setPlanetsDegrees(this.horoscope);
      this.setCuspsDegrees(this.horoscope);

      var newData = {
        planets: this.getPlanets,
        cusps: this.getCuspsDegrees,
      };
      document.getElementById("paper").innerHTML = "";
      var radix = new astrology.Chart("paper", 600, 600).radix(newData);

      // Aspect calculation
      // default is planet to planet, but it is possible add some important points:
      radix.addPointsOfInterest({
        As: [newData.cusps[0]],
        Ic: [newData.cusps[3]],
        Ds: [newData.cusps[6]],
        Mc: [newData.cusps[9]],
      });

      radix.aspects();
    },
    getSolarData: function (data) {
      this.horoscope = new Horoscope({
        origin: new Origin({
          year: data.dateYear,
          month: data.dateMonth - 1, // 0 = January, 11 = December!
          date: data.dateDay,
          hour: data.hour,
          minute: data.minute,
          // СПб 59.97770755245601, 30.289192765690085
          latitude: 59.97,
          longitude: 30.28,
        }),
        houseSystem: "whole-sign",
        zodiac: "tropical",
        aspectPoints: ["bodies", "points", "angles"],
        aspectWithPoints: ["bodies", "points", "angles"],
        aspectTypes: ["major", "minor"],
        customOrbs: {},
        language: "en",
      });

      this.setPlanetsDegrees(this.horoscope);
      this.setCuspsDegrees(this.horoscope);

      var solarDate = new Date(
        data.solarYear,
        data.dateMonth - 1,
        data.dateDay,
        data.hour,
        data.minute
      );
      var ephemerisPlanets = ephemeris.getAllPlanets(solarDate, 59.97, 30.28);

      // console.log(this.horoscope);
      var sunDegreesSolar = ephemerisPlanets.observed.sun.apparentLongitudeDd;
      const sunDegreesHoroscope =
        this.horoscope.CelestialBodies.sun.ChartPosition.Ecliptic
          .DecimalDegrees;
      // console.log(sunDegrees);
      // console.log(
      //   this.horoscope.CelestialBodies.sun.ChartPosition.Ecliptic.DecimalDegrees
      // );
      // Получить UNIX тайм

      var is_ready = false;
      // Если координаты соляра меньше натала
      // то прибавлять по секунде пока погрешность не будет максимально низкая
      console.log(sunDegreesSolar);
      console.log(sunDegreesHoroscope);
      console.log(sunDegreesSolar < sunDegreesHoroscope);
      if (sunDegreesSolar < sunDegreesHoroscope && !is_ready) {
        console.log(Math.abs(sunDegreesSolar - sunDegreesHoroscope));
        while (Math.abs(sunDegreesSolar - sunDegreesHoroscope) > 0.001) {
          // Вычислить соляр спустя 1 секунду вперед
          solarDate = new Date((Math.floor(solarDate / 1000) + 100)*1000);
          console.log(solarDate);
          ephemerisPlanets = ephemeris.getAllPlanets(solarDate, 59.97, 30.28);
          sunDegreesSolar = ephemerisPlanets.observed.sun.apparentLongitudeDd;
        }
        is_ready = true;
      }
      // Если координаты соляра больше натала
      // то вычитать по секунде пока погрешность не будет максимально низкая
      if (sunDegreesSolar > sunDegreesHoroscope && !is_ready) {
        while (Math.abs(sunDegreesSolar - sunDegreesHoroscope) >= 0.001) {
          // Вычислить соляр спустя 1 секунду назад
          solarDate = new Date(Math.floor(solarDate / 1000) + 1);
          ephemerisPlanets = ephemeris.getAllPlanets(solarDate, 59.97, 30.28);
          sunDegreesSolar = ephemerisPlanets.observed.sun.apparentLongitudeDd;
        }
        is_ready = true;
      }
      console.log(solarDate);
      console.log(sunDegreesSolar);
      console.log(sunDegreesHoroscope)
      // ИЛИ
      // Узнать изменение градуса солнца за одну секунду
      // и прибавить/вычесть столько секунд, чтобы получить соляр

      // while (
      //   this.solarHoroscope.CelestialBodies.Sun.ChartPosition.Ecliptic
      //     .DecimalDegrees <
      //   this.horoscope.CelestialBodies.Sun.ChartPosition.Ecliptic.DecimalDegrees
      // ) {
      //   // TODO: прибавлять по часу и заново вычислять соляр
      // }
    },
  },
  data() {
    return {
      horoscope: null,
      solar: null,
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

    var data = {
      planets: this.getPlanets,
      cusps: this.getCuspsDegrees,
    };

    var chart = new astrology.Chart("paper", 600, 600).radix(data);

    // Aspect calculation
    // default is planet to planet, but it is possible add some important points:
    // radix.addPointsOfInterest({
    //   As: [data.cusps[0]],
    //   Ic: [data.cusps[3]],
    //   Ds: [data.cusps[6]],
    //   Mc: [data.cusps[9]],
    // });
    chart.aspects();
  },
};
</script>