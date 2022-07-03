import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProject, findProject } from "../../redux/slices/projectSlice";
import BudgetComponent from "../../components/TypeFormLikePage/BudgetComponent";

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
    {
      title: "BUDGET APPLICATION",
      budget: "",
      kickoffDate: "",
      wrapUpDate: "",
      notesAndJust: "",
    },
  ]);

  const DisplayForm = () => {
    if (phase <= 1) {
      return (
        <FormComponent
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          submitReply={submitReply}
        />
      );
    } else {
      return <BudgetComponent />;
    }
  };

  const changePhase = (phaseNow) => {
    console.log("questions.length > phaseNow = ", questions.length, phaseNow);
    if (questions.length - 1 > phaseNow) {
      setPhase((phaseNow += 1));
    } else {
      submitReply();
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

  // useEffect(() => {
  //   const lookForProject = () => {
  //     const field = {
  //       _id: "62c0dac5a38139000437e607"
  //     };

  //     console.log("this is the _id in the form ============>>>>>>>>",field._id)
  //     dispatch(findProject(field))
  //   }
  //   lookForProject()
  // }, [phase])

  return (
    <>
      <DisplayForm />
    </>
  );
}

export default Form;
