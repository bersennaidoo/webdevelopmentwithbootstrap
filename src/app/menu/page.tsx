import React from "react";

function MenuPage() {
  return (
    <div id="menu">
      <section className="title">
        <h1>Top Bakery Items To Go</h1>
      </section>

      <section className="dish">
        <h2>
          1<br />
          Black bean purses
        </h2>
        <p className="info">
          Spicy black bean and a blend of Mexican cheeses wrapped in sheets of
          phyllo and baked until golden.
        </p>
        <p className="photo">
          <img src="/images/table.jpg" alt="" />
        </p>
        <p className="price">$3.95</p>
      </section>

      <section className="dish">
        <h2>
          2<br />
          Southwestern Napoleons
        </h2>
        <p className="info">
          Layers of light lump crab meat, bean, and corn salsa, and our handmade
          flour tortillas.
        </p>
        <p className="photo">
          <img src="/images/table.jpg" alt="" />
        </p>
        <p className="price">$7.95</p>
      </section>

      <section className="dish">
        <h2>
          3<br />
          Coconut-Corn Chowder
        </h2>
        <p className="info">
          This vegan chowder with potatoes and corn in a coconut broth is light
          and delicious.
        </p>
        <p className="photo">
          <img src="/images/table.jpg" alt="" />
        </p>
        <p className="price">$3.95</p>
      </section>

      <section className="dish">
        <h2>
          4<br />
          Jerk Rotisserie Chicken
        </h2>
        <p className="info">
          Tender chicken slow roasted on the rotisserie, flavored with spicy and
          fragrant jerk sauce and served with fried plantains and sliced mango.{" "}
          <em>Warning, very spicy!</em>
        </p>
        <p className="photo">
          <img src="/images/table.jpg" alt="" />
        </p>
        <p className="price">$12.95</p>
      </section>

      <section className="dish">
        <h2>
          5<br />
          Thai Shrimp Kebabs
        </h2>
        <p className="info">
          Skewers of shrimp marinated in lemongrass, garlic, and fish sauce then
          grilled to perfection.
        </p>
        <p className="photo">
          <img src="/images/table.jpg" alt="" />
        </p>
        <p className="price">$12.95</p>
      </section>

      <section className="dish">
        <h2>
          6<br />
          Pasta Puttanesca
        </h2>
        <p className="info">
          A rich tomato sauce simmered with garlic, olives, capers, anchovies,
          and plenty of hot red pepper flakes.
        </p>
        <p className="photo">
          <img src="/images/table.jpg" width="200" height="100" alt="" />
        </p>
        <p className="price">$12.95</p>
      </section>
    </div>
  );
}

export default MenuPage;
