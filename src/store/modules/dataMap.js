export default {
    actions: {
        async setPlanetsDegrees(context, horoscope) {
            var planets = {}
            horoscope.CelestialBodies.all.forEach((element) => {
                planets[element.label] = [element.ChartPosition.Ecliptic.DecimalDegrees]
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
        }
    },
    state: {
        isLogined: false,
        cuspsDegrees: [],
        planets: {},
        modeMap: 0,
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
        }
    },
}