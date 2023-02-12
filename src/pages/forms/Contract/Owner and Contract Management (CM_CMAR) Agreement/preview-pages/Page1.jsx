import moment from "moment";

export default function Page1(props) {
  // console.log("Page says: ", props);

  const data = props?.form_fields;
  const year = moment(props?.form_fields?.agreementDate).format("YYYY");
  // console.log(year);

  var digit_map = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  var tens_map = [
    "Zero",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  var yearInWords = "";
  var digits = year.toString().split("");
  digits.forEach(function (digit, index) {
    if (index < 2) {
      yearInWords += tens_map[digit] + " ";
    } else if (index === 2) {
      yearInWords += digit_map[digit] + " Hundred ";
    } else {
      yearInWords += digit_map[digit] + " ";
    }
  });
  const correctDate =
    yearInWords.split(" ")[0] + " " + yearInWords.split(" ")[4];

  return (
    <div className="mb-52">
      <div className="text-center font-bold mb-6">
        <p>Agreement Between</p>
        <p>Owner and Construction Manager at Risk</p>
      </div>

      <div>
        <p>AGREEMENT</p>
        <p className="mb-4">
          Made this{" "}
          <span className={`${props?.nottoBeHighlighted}`}>
            {moment(props?.form_fields?.agreementDate).format("Do")}
          </span>{" "}
          day of
          <span className={`${props?.nottoBeHighlighted}`}>
            {moment(props?.form_fields?.agreementDate).format("MMMM")}
          </span>{" "}
          in the year of Two Thousand and{" "}
          <span className={`${props?.nottoBeHighlighted}`}>{correctDate}</span>
        </p>

        <p className="mb-3">
          BETWEEN The Owner: Durham Public Schools Board of Education
        </p>
        <p className="mb-3">
          And the Construction Manager (hereinafter referred to as the “CM”):{" "}
          <span className={`${props?.nottoBeHighlighted}`}>F4</span>
        </p>
        <p className="mb-0">
          For services in connection with the Project known as:
        </p>
        <p className="mb-3">
          <span className={`${props?.nottoBeHighlighted}`}>F5</span>
        </p>
        <p className="mb-3">
          <span className="p-1 bg-pink-300 rounded-lg">
            As further described in Article 2:
          </span>
        </p>
        <p className="mb-3">
          <span className={`${props?.nottoBeHighlighted}`}>F6</span>
        </p>
        <p className="mb-3">Design Consultant:</p>
        <p className="mb-5">
          <span className={`${props?.nottoBeHighlighted}`}>F7</span>
        </p>
        <p>
          The Owner and CM, in consideration of their mutual covenants herein,
          agree as set forth below:
        </p>
      </div>
    </div>
  );
}
