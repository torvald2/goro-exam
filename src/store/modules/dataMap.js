export default {
    state: {
        isLogined: false,
        cuspsDegrees: [],
        planets: {},
        houses: {},
        modeMap: 0,
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
                houses[element.id] = [element.ChartPosition.EndPosition.Ecliptic.DecimalDegrees, element.ChartPosition.EndPosition.Ecliptic.ArcDegreesFormatted30] 
            })
            context.commit('updateHouses', houses);
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
        }
    },
}