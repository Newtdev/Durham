import { ButtonWhiteBG } from "../../../../ui";
import { InputContainer } from "../../../authentications/component";
import { DashboardButton } from "../../Components";

export const EditComponent = ({ data, cancel, loading }) => {
	return (
		<>
			<div className="mt-4">
				<InputContainer {...data} />
			</div>
			{/* <DashboardButton
								name="ADD NEW PROJECT MANAGER"
								hidden
								type="submit"
								width=""
								loading={isSubmitting}
							/> */}
			<div className="mt-2 flex gap-4 justify-items-start">
				<DashboardButton
					name="SAVE CHANGES"
					type="submit"
					hidden
					loading={loading}
				/>
				<ButtonWhiteBG name="CANCEL" onClick={cancel} />
			</div>
		</>
	);
};
