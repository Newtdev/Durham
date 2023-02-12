import helperFragments from "../helper-fragments";

export default function (props) {
  const Highlighted = helperFragments.HighlightedText({
    highlighted: props.nottoBeHighlighted,
  });

  return (
    <div className="mb-52 mt-32 text-black">
      <div className="mb-6">
        <helperFragments.SimpleCapsHeading text="Article 2" bold />
        <helperFragments.SimpleCapsHeading
          text="Project Definition"
          underline
        />
      </div>
      <helperFragments.Paragraph
        body="The term “Project” when used in the Agreement shall mean the total construction of which the Work
may be a whole or part of the Project. The term “Work” required for the “Project” used in this Agreement
shall mean the various parts of total construction to be performed under this Agreement."
      />
      <div className="">
        <p>The Project name and locations are as follows:</p>
        <p className="mb-4">
          <Highlighted> F8 </Highlighted>
        </p>
        <p className="mb-4">The Project is intended for use as:</p>
        <p>
          <Highlighted> F9 </Highlighted>
        </p>
      </div>
      <div className="mb-6">
        <helperFragments.SimpleCapsHeading text="Article 3" bold />
        <helperFragments.SimpleCapsHeading
          text="CONSTRUCTION MANAGER’S BASIC SERVICES"
          underline
        />
      </div>
      <helperFragments.Paragraph
        title={"CM Basic Services"}
        marker="3.1"
        body="The CM shall perform the Basic Services described herein. It is not required that the Basic Services
be performed in the sequence in which they are described."
      />
      <helperFragments.Paragraph
        title={"Design Phase – Project Management"}
        marker="3.2"
      />

      <helperFragments.Paragraph title={"Project Management"} marker="3.2.1" />

      <helperFragments.Paragraph
        title={"Construction Management"}
        marker="3.2.1.1"
        body={`The CM shall prepare a Construction Management Plan for the Project within the time mutually
established by the Owner and CM and shall make recommendations for revisions to the plan throughout the
duration of the Project, as may be appropriate. In preparing the Construction Management Plan, the CM
shall consider the Owner’s schedule, budget, and design requirements for the Project. The CM shall then
develop various alternatives for the sequencing and management of the Project and shall make
recommendations to the Owner. The Construction Management Plan shall also include a description of the
various bid packages recommended for the Project. The Construction Management Plan shall be presented
to the Owner for acceptance. The CM shall develop a Master Schedule for the Project. The CM shall
determine the appropriate bid packages based on the available resources. The CM shall familiarize itself
with all available Project funding and work with the Owner and Design Consultant to maximize the scope and
quality of the Project based upon the available funds. The CM shall make recommendations regarding
communication among the parties in an effort to ensure the prompt and proper flow of Project information.
The CM shall outline its plan for minority business enterprise participation goals required by state law and the
Owner, including reporting all information required by state law on behalf of the Owner to the North Carolina
Department of Administration, Office of Historically Underutilized Businesses. The CM shall include a Project
safety plan covering all critical areas of the Project.`}
      />

      <helperFragments.Paragraph title={"Time Management"} marker="3.2.2" />
      <helperFragments.Paragraph title={"Master Schedule"} marker="3.2.2.1" />
    </div>
  );
}
