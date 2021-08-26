export default {
    state: {
        isLogined: false,
        cuspsDegrees: [],
        planets: {},
        houses: {},
        modeMap: 0,
        solarData: {}
    },
    actions: {
        async setPlanetsDegrees(context, horoscope) {
            var planets = {}
            horoscope.CelestialBodies.all.forEach((element) => {
                planets[element.label] = [element.ChartPosition.Ecliptic.DecimalDegrees, element.ChartPosition.Ecliptic.ArcDegreesFormatted30]
            });
            context.commit('updatePlanets', planets);
        },
        async setCuspsDegrees(context, horoscope) {
            var cuspsDegrees = []
            horoscope.ZodiacCusps.forEach((element) => {
                cuspsDegrees.push(element.ChartPosition.Horizon.DecimalDegrees);
            });
            context.commit('updateCuspsDegrees', cuspsDegrees);
        },
        async setModeMap(context, mode) {
            context.commit('updateModeMap', mode);
        },
        async setHousesDegrees(context, horoscope) {
            var houses = {}
            horoscope.Houses.forEach((element) => {
                houses[element.id] = [element.ChartPosition.StartPosition.Ecliptic.DecimalDegrees, element.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30]
            })
            context.commit('updateHouses', houses);
        },
        async setSolarData(context, data) {
            context.commit('updateSolarData', data);
        }
    },
    mutations: {
        updateCuspsDegrees(state, cuspsDegrees) {
            state.cuspsDegrees = cuspsDegrees
        },
        updatePlanets(state, planets) {
            state.planets = planets;
        },
        updateModeMap(state, modeMap) {
            state.modeMap = modeMap;
        },
        updateHouses(state, houses) {
            state.houses = houses;
        },
        updateSolarData(state, solarData) {
            state.solarData = solarData;
        }
    },
    getters: {
        checkLogin(state) {
            return state.isLogined
        },
        getPlanets(state) {
            return state.planets
        },
        getCuspsDegrees(state) {
            return state.cuspsDegrees
        },
        getModeMap(state) {
            return state.modeMap
        },
        getHouses(state) {
            return state.houses
        },
        getSolarData(state) {
            return state.solarData
        }
    },
}