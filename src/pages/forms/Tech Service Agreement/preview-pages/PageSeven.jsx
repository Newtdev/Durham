const PageSeven = ({ formData, form_fields, nottoBeHighlighted, awardee }) => {
	const vendor = !awardee ? "" : !awardee[0] ? "" : awardee[0];
	return (
		<div style={{ margin: "1in", height: "10in" }}>
			<div className="mb-2 mt-96 pt-24">
				<div className="flex mb-2 ">
					<p>10.</p>
					<div className=" ml-7">
						<p className="text-justify">
							<span className="underline underline-offset-2">NOTICE</span>.{" "}
							<span className="ml-1">
								{" "}
								Any notice, consent or other communication in connection with
								this Agreement shall be in writing, will reference this
								Agreement and may be delivered in person, by certified mail,
								return receipt requested, or by overnight carrier. The notice
								shall be effective upon the earlier of actual delivery or three
								days from mailing. All communications will be sent to the
								addresses set forth below or to such other address as may be
								designated by a party by giving written notice to the other
								party.
							</span>
						</p>
					</div>
				</div>

				<div className="ml-[-10px] mb-8">
					<div className="flex">
						<p>If to DPS:</p>
						<div className="ml-[90px]">
							<p className="underline underline-offset-2">
								Durham Public Schools
							</p>
							<p className="underline underline-offset-2">
								Director of Construction & Sustainability
							</p>
							<p className="underline underline-offset-2">
								Durham Public Schools
							</p>
							<p className="underline underline-offset-2">2011 Hamlin Road</p>
							<p className="underline underline-offset-2">Durham NC 27704</p>
						</div>
					</div>
				</div>

				<div className="ml-[-10px]">
					<div className="flex">
						<p>If to Contractor:</p>
						<div className="ml-14">
							<div
								className={`${nottoBeHighlighted} h-4 mb-[4px] border-b border-gray-900 pb-4`}>
								{vendor?.company_name}
							</div>
							<div
								className={`${nottoBeHighlighted} h-4 mb-[4px] border-b border-gray-900 pb-4`}>
								{vendor?.street}
							</div>
							<div
								className={`${nottoBeHighlighted} border-b border-gray-900 mb-[4px]`}>
								{vendor?.city + ", " + vendor?.state + ", " + vendor?.zip_code}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex mb-2">
				<p>11.</p>
				<div className=" ml-7">
					<p className="text-justify">
						{" "}
						No publicity releases (including news releases and advertising)
						using DPS’s name or in any way referencing the Durham Public
						Schools, shall be issued by Contractor without the prior written
						approval of DPS. Any inquiry which Contractor may receive from news
						media concerning this Agreement will be referred to DPS for
						coordination prior to response. Any technical paper, article,
						publication, or announcement of advances generated in connection
						with the services under this Agreement, which references DPS’s name
						or in any way references the Durham Public Schools, during the
						period of performance of the Agreement or in the future, shall
						require DPS’s prior written approval.
					</p>
				</div>
			</div>
			<div className="flex mb-2">
				<p>12.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							NO THIRD PARTY BENEFICIARIES.
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							Nothing herein is intended or shall be construed to confer upon or
							to give to any person or entity other than the parties hereto and
							their successors or permitted assigns, any rights or remedies
							under this Agreement.
						</span>
					</p>
				</div>
			</div>
			<div className="flex mb-2">
				<p>13.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">SEVERABILITY</span>.{" "}
						<span className="ml-1">
							{" "}
							Unless otherwise expressly provided herein, the rights of the
							parties hereunder are several rights, not rights jointly held with
							each other or with any other party. Any invalidity, illegality or
							limitation of the enforceability of any part of this Agreement,
							whether arising by reason of law or otherwise, shall in no way
							affect or impair the validity, legality or enforceability of this
							Agreement in all other respects.
						</span>
					</p>
				</div>
			</div>
			<div className="flex mb-2 ">
				<p>14.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">FORCE MAJEURE</span>.{" "}
						<span className="ml-1">
							{" "}
							Neither party shall be liable to the other by reason of any
							failure of performance hereunder if such failure arises out of the
							acts of governmental authority, acts of God, acts of the public
							enemy, acts of civil or military authority, fires, unavailability
							of energy resources, riots, war, or events of similar nature. Any
							party experiencing such an event shall give as prompt notice as
							possible under the circumstances and such protection from
							liability shall last
						</span>
					</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-center mt-2 courier-font text-[10pt]">
				<p>7</p>
			</div>
		</div>
	);
};

export default PageSeven;
