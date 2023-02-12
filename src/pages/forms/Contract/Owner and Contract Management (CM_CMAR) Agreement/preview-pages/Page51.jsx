import helperFragments from "../helper-fragments";

export default function (props) {
  const Highlighted = helperFragments.HighlightedText({
    highlighted: props.nottoBeHighlighted,
  });

  return (
    <div className="mt-28">
      <p className="ml-12 mb-12">
        This Agreement is executed the day and year first written above.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <p className="mb-4 font-bold">OWNER:</p>
          <p className="mb-4 font-bold">
            DURHAM PUBLIC SCHOOLS BOARD <br /> EDUCATION
          </p>
          <div className="mb-4">
            <p>_______________________________________</p>
            <p>
              <span className={`${props?.nottoBeHighlighted}`}>F38</span>, Chair
            </p>
          </div>
          <p className="mb-4">Attest:</p>
          <div className="mb-12">
            <p>_______________________________________</p>
            <p>[Corporate Seal]</p>
          </div>

          <p className="mb-8 text-justify">
            This instrument has been pre-audited in the manner required by the
            School Budget and Fiscal Control Act.
          </p>

          <div>
            <p>
              <span className={`${props?.nottoBeHighlighted}`}>F40</span>
            </p>
            <p>___________________, Finance Officer</p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-bold">CONSTRUCTION MANAGER:</p>
          <p className="mb-4">
            <span className={`${props?.nottoBeHighlighted}`}>F37</span>
          </p>
          <div className="mb-4">
            <p>_______________________________________</p>
            <p>
              <span className={`${props?.nottoBeHighlighted}`}>F39</span>,
              President
            </p>
          </div>
          <p className="mb-4">Attest:</p>
          <div>
            <p>_______________________________________</p>
            <p className="mb-3">Corporate Secretary</p>
            <p>[Corporate Seal]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
