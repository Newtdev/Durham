import helperFragments from "../helper-fragments";

export default function (props) {
  const Highlighted = helperFragments.HighlightedText({
    highlighted: props.nottoBeHighlighted,
  });

  return (
    <div>
      <p className="text-justify">
        to negotiate and review the terms and provisions of this Agreement and
        to contribute to its substance and form.
      </p>

      <div>
        <div>
          <p className="mb-3 text-justify">
            <span className="mr-8">11.4</span>Severability
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">11.4.1</span>If any provision of this
            Agreement is held as a matter of law to be unenforceable, the
            remainder of this Agreement shall be enforceable without such
            provision.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">11.5</span>Meaning of Terms
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">11.5.1</span>References made in the
            singular shall include the plural and the masculine shall include
            the feminine or neuter.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">11.6</span>Notices
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">11.6.1</span>Whenever any provision of
            the Contract Documents requires the giving of written notice, it
            shall be deemed to have been validly given if delivered in person to
            the individual or to a member of the firm or to an officer of the
            corporation for whom it is intended or if delivered or sent by
            registered or certified mail, postage prepaid, or by facsimile,
            addressed as follows:
          </p>
        </div>

        {/* F34 */}
        <div className="mb-20">
          <div className="mb-3">
            <p>
              <span className="p-1 rounded-lg bg-pink-300">To the Owner:</span>
            </p>
            <p>
              <span className={`${props?.nottoBeHighlighted}`}>F34</span>
            </p>
          </div>

          <div className="mb-3">
            <p>With a copy to:</p>
            <p>
              <span className={`${props?.nottoBeHighlighted}`}>F35</span>
            </p>
          </div>

          <div className="mb-3">
            <p>To the CM:</p>
            <p>
              <span className={`${props?.nottoBeHighlighted}`}>F36</span>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-justify">
            <span className="mr-8">11.7</span>Compliance with Board Policies and
            Procedures
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">11.7.1</span>The CM acknowledges that
            the Owner’s policies governing conduct on the Owner’s property are
            available for review on the Owner’s website at{" "}
            <a href="www.dpsnc.net" className="text-blue-500">
              www.dpsnc.net
            </a>{" "}
            In addition to complying with the Owner’s policies, the CM agrees to
            comply with the following:
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">11.7.2</span>The CM, the contractors
            and their employees shall not possess or carry, whether openly or
            concealed, any gun, rifle, pistol, or explosive on any property
            owned by the Owner. This includes firearms locked in containers,
            vehicles or firearm racks within vehicles. The CM, the contractors
            and their employees shall not cause, encourage or aid a minor, who
            is less than 18 years old to possess or carry, whether openly or
            concealed, any weapons on any property owned by the Owner.
          </p>
        </div>
      </div>
    </div>
  );
}
