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
      this.$emit("sendData", data);
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