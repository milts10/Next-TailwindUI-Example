import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";
import FlowLayout from "../layout/FlowLayout";
import ProgressBar from "../layout/ProgressBar";

import NextButton from "../NextButton";
import PreviousButton from "../previousButton";

const DescriptionComponent = (props) => {
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleChangePhase = () => {
    const params = {
      _id: props._id,
      description: description,
      returnDates: true,
      returnBudget: true,
      returnCollaborationLinks: true,
    };
    dispatch(updateProject(params));
    console.log("params from Descpition child", params);
    props.changePhase(props.phase);
  };

  const handleChangePhaseBack = () => {
    props.changePhaseBack(props.phase);
  };

  return (
    <>
      {/* Background */}
      <div className="bg-soilGray-200 h-screen w-screen">
        <FlowLayout currentStep={props.phase + 1} handleNextButton={() => handleChangePhase()} handlePreviousButton={() => handleChangePhaseBack()}>
          <div className="text-center space-y-[19px] mb-[96px] mt-[129px]">
            <p className="text-[26px]">DESCRIBE YOUR PROJECT</p>
            <p className="text-[16px]">
              few key sentences on what is the goal, mission, vision of this
              project{" "}
            </p>
          </div>

          <div>
            <div className="ml-[25px]">
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                name="title"
                id="title"
                className="shadow-sm block h-[407px] w-[620px] sm:text-sm border-gray-300 rounded-md pt-[25px] pl-[48px] text-[16px]"
              />
            </div>
          </div>
          <div className="flex justify-between mt-[199px]">
            {/* <PreviousButton handleChangePhaseBack={handleChangePhaseBack} />
            <NextButton handleChangePhase={handleChangePhase} /> */}
          </div>
        </FlowLayout>
      </div>
    </>
  );
};

export default DescriptionComponent;
