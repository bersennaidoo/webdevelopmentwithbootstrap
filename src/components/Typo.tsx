import React from "react";

function Typo() {
  return (
    <div className="container">
      <h1 className="mb-5">Typography</h1>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <br />
      <br />

      <p className="h1">Heading 1 Paragraph</p>
      <p className="h2">Heading 2 Paragraph</p>
      <p className="h3">Heading 3 Paragraph</p>
      <p className="h4">Heading 4 Paragraph</p>
      <p className="h5">Heading 5 Paragraph</p>
      <p className="h6">Heading 6 Paragraph</p>

      <br />
      <br />

      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>

      <br />
      <br />

      <p className="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quisquam possimus asperiores facilis consequuntur adipisci, debitis neque distinctio nesciunt quam provident sunt perspiciatis similique nostrum tempora quos quidem cum. Non.
      </p>

      <br /><br />

      <blockquote className="blockquote">
        <p>This is a blockquote</p>
      </blockquote>

      <br /><br />

      <p className="fw-bold">This is bold text</p>
      <p className="fw-bolder">
        This is bolder text (relative to the parent element).
      </p>
      <p className="fw-semibold">This is semibold text</p>
      <p className="fw-medium">This is a medium weight</p>
      <p className="fw-normal">This is a normal weight</p>
      <p className="fw-light">This is light weight text</p>
      <p className="fw-lighter">
        This is lighter weight text (relative to the parent element).
      </p>
      <p className="fst-italic">This is italic text.</p>
      <p className="fst-normal">This is text with normal font style</p>

      <br /><br />

      <p className="lh-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae perspiciatis autem, voluptatibus in quia assumenda natus sed nemo exercitationem sequi, porro numquam mollitia. Rerum, illo labore odit explicabo in tempora!
      </p>
      <p className="lh-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed expedita enim, alias laborum tempore laboriosam aut et sapiente aperiam, ullam ab, voluptatum suscipit optio commodi sint temporibus! Et, dicta labore!
      </p>
      <p className="lh-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatem aperiam nemo in sit perspiciatis nisi qui. Expedita accusantium eum, aspernatur porro dolore eligendi ut repellendus corporis, quis nobis doloribus?
      </p>
      <p className="lh-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis repudiandae quod velit? Beatae pariatur amet repellendus cum debitis, quo ad vero repellat et dolore quisquam quia! Dignissimos, laboriosam vitae?
      </p>

      <br /><br />

      <p className="text-lowercase">LOWERCASED text</p>
      <p className="text-uppercase">uppercase text</p>
      <p className="text-capitalize">capitalized text</p>

      <br /><br />

      <p className="text-start">Start aligned text on all viewport sizes</p>
      <p className="text-center">Center aligned text on all viewport sizes</p>
      <p className="text-end">End aligned text on all viewport sizes</p>

      <p className="text-sm-end">
        Start aligned text on viewports sized SM (small) or wider
      </p>
    </div>
  );
}

export default Typo;
