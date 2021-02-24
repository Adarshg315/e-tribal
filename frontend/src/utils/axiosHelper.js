import axios from "axios";

export default axios.create({
	baseURL: "https://determined-meitner-b0c027.netlify.app/",
	responseType: "json",
});
