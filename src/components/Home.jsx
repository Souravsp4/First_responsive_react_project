import React from "react";
import vg from "../assets/77.avif";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>GenTech</h1>

          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are the solution to the tech problems you face. We are leading
            tech company whose aim is to increase the problem solving ability.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            repellat quidem explicabo, sequi eveniet nisi doloremque, libero nam
            nesciunt temporibus ratione quibusdam dolores, est in autem velit
            nostrum. Eum quod quasi totam doloribus, officiis consectetur dolore
            porro magni sunt facere exercitationem amet dignissimos, voluptates
            qui beatae eveniet maxime! Enim debitis animi deserunt rem obcaecati
            molestias impedit explicabo dolores id dolore fuga, ex soluta quasi
            corporis maiores dignissimos, assumenda aliquam porro ipsum nobis
            quidem odit officiis minus perferendis. Maiores aliquid eveniet
            praesentium officiis sapiente dignissimos a mollitia qui assumenda
            placeat, et enim. Accusamus quod sunt illo accusantium distinctio
            ex. A, aut.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1> Brands </h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
