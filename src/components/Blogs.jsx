import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-right" className="blog-container">
      <h2 className="text-center mb-3">Mussoorire Trip</h2>
      <div className="trips">
        <img
          src="https://images.unsplash.com/photo-1547106365-bb4b17f50a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          alt="img"
        />
        <p>
          If you’re looking for a complete Mussoorie travel guide, keep reading.
          The hill stations in the north of India are some of the most beautiful
          sights your eyes can behold in this amazing country. The famous
          locations like Shimla and Manali of Himachal draw many tourists and
          are probably on your bucket list, but have you heard of Mussoorie?
          It’s the tiny, picturesque hill station underdog which you’ve never
          heard of. Sitting in Uttrakhand, it’s a smooth 30km uphill from the
          capital city of the state Dehradun. It stands at 2000 metres above sea
          level, so you’ll definitely feel the altitude and a massive drop in
          temperature! For me, it was amazing just to get here and feel cold.
          Even though it is the monsoon period right now in India; in Rajasthan,
          it still can be extremely humid and sticky. Mussoorie is quiet,
          peaceful, and sits above the clouds. It’s named the Queen of Hills and
          quite rightly so! When you alight from the bus stand, you’ll be
          greeted by the green rolling hills, rice terraces, and chilly mist
          which creates a very cool setting for a getaway.
        </p>
      </div>

      <h2 className="text-center mb-3 mt-5">Shimla Trip</h2>
      <div className="trips">
        <img
          src="https://images.unsplash.com/photo-1597074866923-dc0589150358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="img"
        />
        <p>
          Shimla is the capital of the northern Indian state of Himachal
          Pradesh, in the Himalayan foothills. Once the summer capital of
          British India, it remains the terminus of the narrow-gauge
          Kalka-Shimla Railway, completed in 1903. It’s also known for the
          handicraft shops that line The Mall, a pedestrian avenue, as well as
          the Lakkar Bazaar, a market specializing in wooden toys and crafts.
          From sky or a very high view, the beautiful hill station in Himachal
          Pradesh looks like wide half-moon shaped ridge that is at 12 km far in
          North-West of Himalayas. You will see the complete presence of Mother
          Nature everywhere in Shimla in Pine and Deodar forest ranges,
          snow-capped mountain, deep valleys, natural springs, and crystal clear
          water rivers.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
