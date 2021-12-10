import axiosClient from './axiosClient';

const apiCalls = {
    getTours: () => {
        return axiosClient.get('tours');
    },
    getExplore: () => {
        return axiosClient.get('explore');
    },
    getCities: () => {
        return axiosClient.get(`cities`);
    },
    getHotels: () => {
        return axiosClient.get(`hotels`);
    },
    getHotelDetail: (id) => {
        return axiosClient.get(`hotels/${id}`);
    }
}

export default apiCalls;