export default function HomePage() {
  return (
    <div className="home-container">
      <main>
        <h2>Fresh from the Oven</h2>
        <h3>Breads</h3>
        <p>
          <img
            src="/images/bread.png"
            alt="round loaf of bread on cutting board"
          />
          Our breads are made daily from highest-quality whole grain flour,
          water, salt, and yeast or sourdough starter. Simply and naturally, and
          never any preservatives. Patience is key ot achieving the proper level
          of fermentation and baking each loaf to perfection. Available in whole
          grain, sourdough, olive loaf, classic rye, and potato-onion.
        </p>
        <p className="more">
          <a href="">Learn more about our baking process...</a>
        </p>

        <h3>Muffins</h3>
        <p>
          <img src="/images/muffin.png" alt="one chocolate chip muffin" />
          Every day, we offer a large selection of muffins, including blueberry,
          multi-berry bran, corn, lemon-poppyseed, and chocolate, Our muffins
          are made from scratch each day. Stop by to see our seasonal muffin
          flavors!
        </p>
        <p className="more"><a href="">Learn more about how make our muffins...</a></p>
      </main>
      <aside>
        <h2>Hours</h2>
        <p>
          <span className="day">Monday:</span> 5am to 3pm
        </p>
        <p>
          <span className="day">Tuesday:</span> 5am to 3pm
        </p>
        <p>
          <span className="day">Wednesday:</span> 5am to 3pm
        </p>
        <p>
          <span className="day">Thursday:</span> 5am to 3pm
        </p>
        <p>
          <span className="day">Friday:</span> 5am to 3pm
        </p>
        <p>
          <span className="day">Saturday:</span> 6am to 4pm
        </p>
        <p>
          <span className="day">Sunday:</span> 6am to 4pm
        </p>
      </aside>
    </div>
  );
}
