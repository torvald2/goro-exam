<template>
  <div class="flex-1 mt-5 py-5">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div class="shadow-lg overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-gray-100 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="name"
                    class="block text-gray-700 text-sm font-bold mb-2"
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
                  <!-- <t-input v-model="city" name="city" id="city" autocomplete="city"></t-input> -->
                  <t-select
                    v-model="city"
                    name="city"
                    id="city"
                    :options="['Санкт-Петербург']"
                  ></t-select>
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

                <div class="col-span-6">
                  <label
                    for="solar-year"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Год расчета</label
                  >
                  <t-select
                    class="
                      shadow
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
                    v-model="solarYear"
                    :options="calcYear"
                    variant="demo"
                  ></t-select>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="px-4 py-3 bg-gray-200 text-right sm:px-6">
          <button
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              font-medium
              rounded-md
              text-white
              bg-blue-500
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click="getFormData()"
          >
            Рассчитать соляр
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      calcYear: [2022, 2021, 2020],
      solarYear: null,
    };
  },
  methods: {
    check: function () {
      console.log(this.solarYear);
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
        solarYear: this.solarYear,
      };
      console.log(data);
      this.$emit("sendData", data);
    },
  },
  mounted: function () {
    this.solarYear = this.calcYear[0];
  },
};
</script>