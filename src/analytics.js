import ReactGA from "react-ga4";

const analyticsKey = import.meta.env.VITE_IDANALYTICS

const initializeGA = () => {
    ReactGA.initialize(analyticsKey);
};

export default initializeGA;