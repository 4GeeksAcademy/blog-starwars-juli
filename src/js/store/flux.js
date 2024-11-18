const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [], 
			person: {},
			myfavorite: [],
			planet: {},
			vehicle: {},
        },
        actions: {
            
            obtenerPersonajes: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const data = await response.json();
                    console.log(data);
                    setStore({ people: data.results });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            obtenerPlanetas: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const data = await response.json();
                    console.log(data);
                    setStore({ planets: data.results });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            obtenerVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const data = await response.json();
                    console.log(data);
                    setStore({ vehicles: data.results });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
			obtenerInfoPersonaje: async (id) => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/"+id);
                    const data = await response.json();
                    console.log(data.result);
                    setStore({ person: data.result });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
			favoritos: (item) => {
				if (getStore().myfavorite.includes(item)) {
					let aux= [] 
					aux = getStore().myfavorite.filter((favorite) => favorite != item)
					setStore ({myfavorite:aux})
				} else {
					setStore ({myfavorite:[...getStore().myfavorite,item]})
				}
			},
			obtenerInfoPlaneta: async (id) => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/"+id);
                    const data = await response.json();
                    console.log(data.result);
                    setStore({ planet: data.result });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
			obtenerInfoVehicles: async (id) => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/"+id);
                    const data = await response.json();
                    console.log(data.result);
                    setStore({ vehicle: data.result });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
        }
    };
};
export default getState;