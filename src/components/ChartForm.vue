<template>
  <div class="md:grid max-w-screen-sm md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form>
        <div class="shadow-lg overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="text-gray-700 text-sm font-bold mb-2"
                  >Имя</label
                >
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="given-name"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>

              <div class="col-span-6">
                <label
                  for="city"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Город</label
                >
                <input
                  v-model="city"
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="city"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label
                  for="hour"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Час</label
                >
                <input
                  v-model="hour"
                  type="text"
                  name="hour"
                  id="hour"
                  autocomplete="hour"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="minute"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Минуты</label
                >
                <input
                  v-model="minute"
                  type="text"
                  name="minute"
                  id="minute"
                  autocomplete="minute"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  for="date-day"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Число</label
                >
                <input
                  v-model="date"
                  type="text"
                  name="date-day"
                  id="date-day"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="date-month"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Месяц</label
                >
                <input
                  v-model="month"
                  type="text"
                  name="date-month"
                  id="date-month"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="date-year"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Год</label
                >
                <input
                  v-model="year"
                  type="text"
                  name="date-year"
                  id="date-year"
                  autocomplete="date-year"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-1
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="px-4 py-3 bg-gray-200 text-right sm:px-6">
        <button
          class="
            btn-calc
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            font-medium
            rounded-md
            text-white
          "
          @click="getFormData()"
        >
          Рассчитать карту
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Origin, Horoscope } from "circular-natal-horoscope-js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: null,
      year: null,
      month: null,
      date: null,
      city: null,
      hour: null,
      minute: null,
    };
  },
  methods: {
    ...mapActions(["setPlanetsDegrees", "setCuspsDegrees", "setHousesDegrees", "setName", "setBirthDate"]),
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
    getFormData: function () {
      // alert(this.name);
      var data = {
        name: this.name,
        year: this.year,
        month: this.month,
        date: this.date,
        city: this.city,
        hour: this.hour,
        minute: this.minute,
      };
 
      var birthDate = new Date(this.year, this.month-1, this.date, this.hour, this.minute)

      this.horoscope = this.getHoroscope(data);

      this.setName(data.name);
      this.setPlanetsDegrees(this.horoscope);
      this.setCuspsDegrees(this.horoscope);
      this.setHousesDegrees(this.horoscope);
      this.setBirthDate(birthDate);

      this.$router.push("/birth_map")
    },
  },
  mounted: function () {},
};
</script>

<style>
.btn-calc {
  background-color: #6156bd;
}

.btn-calc:hover {
  background-color: #51489e;
}
</style>