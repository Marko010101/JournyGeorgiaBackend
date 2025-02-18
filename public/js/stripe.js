import axios from "axios";
import Stripe from "stripe";
import { showAlert } from "./alert.js";

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    "pk_test_51QtQliDBrkNOnRrjgmRuQnWkafl0b9Q9kBSBAgGpAOn6T7PlD6k6fSROuhGK5LaTrD3iuuxpjVg8n4SzJ2tjsnIS00a7Xo2wgY",
  );
  try {
    // 1. Get checkout session from the API
    const session = await axios(`/api/v1/booking/checkout-session/${tourId}`);
    // console.log(session);

    // 2. Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.replace(session.data.session.url);
  } catch (error) {
    showAlert("error", error);
  }
};
