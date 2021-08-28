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
            <tbody id="houses" class="bg-white divide-y divide-gray-200">
              <tr v-for="row in dataHouses" :key="row.house">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ row.house }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ row.degrees }}
                  </div>
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
  // props: ['dataPlanets'],
  data() {
    return {
      // Перечисление планет
      dataHouses: [],
      // Перечисление домов
    };
  },
  computed: mapGetters(["getHouses"]),
  methods: {
    updateTable: function () {
      this.$forceUpdate();
    },
  },
  mounted() {
    for (var house in this.getHouses) {
      this.dataHouses.push({
        house: house,
        degrees: this.getHouses[house][1],
      });
    }
  },
};
</script>