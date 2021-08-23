<template>
  <div class="flex-1">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div class="shadow-lg overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-gray-100 sm:p-6">
              <div class="grid">
                <div>
                  <label
                    for="name"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Выбор карты</label
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
                    v-model="modeMap"
                    :options="['Обычная карта', 'Соляр']"
                    variant="Обычная карта"
                    @change="setData"
                  ></t-select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      modeMap: "Обычная карта",
    };
  },
  components: {
    // TSelect
  },
  computed: mapGetters(["getModeMap"]),
  methods: {
    ...mapActions(["setModeMap"]),
    setData: function () {
      // Если "тип карты", то приравнять соответсвующий режим (цифру)
      if (this.modeMap == "Обычная карта") {
        this.setModeMap(0);
      }

      if (this.modeMap == "Соляр") {
        this.setModeMap(1);
      }
    },
  },
  mounted() {
    this.setModeMap(0);
  },
};
</script>