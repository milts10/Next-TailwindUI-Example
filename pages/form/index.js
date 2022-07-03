import FormComponent from "../../components/FormComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProject, findProject } from "../../redux/slices/projectSlice";

function Form() {
  const [phase, setPhase] = useState(0);
  const [questions, setQuestions] = useState([
    {
      title: "What’s the tilte of the new project?",
      description: "description 1",
      reply: "",
    },
    {
      title: "Description of the new project?",
      description:
        "Key info on what will make the filling curcial: for ex - great titles are  short & descriptive bla bla",
      reply: "",
    },
  ]);

  const changePhase = (phaseNow) => {
    console.log("questions.length > phaseNow = ", questions.length, phaseNow);
    if (questions.length - 1 > phaseNow) {
      setPhase((phaseNow += 1));
    } else {
      // submitReply();
    }
  };

  const project = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const handleChange = (e, phaseNow) => {
    let newArr = [...questions];

    newArr[phaseNow].reply = e.target.value;

    setQuestions(newArr);
    console.log(questions);
  };

  const submitReply = () => {
    console.log(
      "we are at the end of the FORM!! = ",
      questions[0].reply,
      questions[1].reply
    );
    const feild = {
      title: questions[0].reply,
      description: questions[1].reply,
    };
    dispatch(createNewProject(feild));
  };

  // const lookForProject = () => {
  //   const field = {
  //     _id: "62a47e56020ea30004c1f231"
  //   }
  //   dispatch()
  // }

  useEffect(() => {
    const lookForProject = () => {
      const field = {
        _id: "62c0dac5a38139000437e607"
      };

      console.log("this is the _id in the form ============>>>>>>>>",field._id)
      dispatch(findProject(field))
    }
    lookForProject()
  }, [phase])
  
 
  return (
    <>
      <FormComponent
        handleChange={handleChange}
        changePhase={changePhase}
        questions={questions[phase]}
        phase={phase}
      />
      {/* <FormComponent changePhase={changePhase} questions={questions[phase]} /> */}
    </>
  );
}

export default Form;
