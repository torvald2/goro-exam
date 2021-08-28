<template>
  <div class="flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="table-fixed w-96 divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Объект
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Градус
                </th>
              </tr>
            </thead>
            <tbody id="planets" class="bg-white divide-y divide-gray-200">
              <tr class="fedya" v-for="row in dataPlanets" :key="row.planet">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ row.planet }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ row.degrees }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // Перечисление планет
      dataPlanets: [],
      // Перечисление домов
    };
  },
  computed: mapGetters(["getPlanets"]),
  methods: {
    updateTable: function () {
      this.$forceUpdate();
      // this.dataPlanets = [];

      // for (var planet in this.getPlanets) {
      //   this.dataPlanets.push({
      //     planet: planet,
      //     degrees: this.getPlanets[planet][1],
      //   });
      // }
      // document.getElementById("planets").innerHTML = "";
      // console.log(this.dataPlanets)
    },
  },
  mounted() {
    for (var planet in this.getPlanets) {
      this.dataPlanets.push({
        planet: planet,
        degrees: this.getPlanets[planet][1],
      });
    }
  },
};
</script>