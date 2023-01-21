import { useNavigate } from "react-router-dom";
import { ButtonWhiteBG } from "../../../../ui";
import { InputContainer } from "../../../authentications/component";
import { DashboardButton } from "../../Components";

export const EditComponent = ({ data, cancel, loading, show, onSubmit }) => {
	return (
		<form className={`${show}`} onSubmit={onSubmit}>
			<div className="mt-4">
				<InputContainer {...data} />
			</div>

			<div className="mt-2 flex gap-4 justify-items-start items-center">
				<DashboardButton
					name="SAVE CHANGES"
					type="submit"
					hidden
					loading={loading}
				/>
				<ButtonWhiteBG name="CANCEL" onClick={cancel} />
			</div>
		</form>
	);
};

export const EditIndividualComponent = (props) => {
	const { data, cancel, show, loading } = props;
	return (
		<form className={`${show}`} onSubmit={data.onSubmit}>
			<div className="mt-4">
				<InputContainer {...data} />
			</div>

			<div className="mt-2 flex gap-4 justify-items-start items-center">
				<DashboardButton
					name="SAVE CHANGES"
					type="submit"
					hidden
					loading={loading}
				/>
				<ButtonWhiteBG name="CANCEL" onClick={cancel} />
			</div>
		</form>
	);
};

export const PageNavigation = ({ next }) => {
	const navigate = useNavigate();
	return (
		<div className="mb-6">
			<p
				className="mb-4 text-gray-600 cursor-pointer "
				onClick={() => navigate("/dashboard/settings")}>
				Settings &#62;
				<span className="font-bold text-gray-900 ml-1">{next}</span>
			</p>
			<h1 className="text-gray-900 font-semibold text-3xl">{next}</h1>
		</div>
	);
};
