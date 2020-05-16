import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xpEX7fmoRfcAvjdlZ717096ouAAIAs3om_uGKOhNHFI",
  },
});
