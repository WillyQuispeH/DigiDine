import { personStore } from "../zustand";

const usePerson = () => {
  const { person, isValid: isValidPerson } = personStore((state) => ({
    person: state.person,
    isValid: state.isValid,
  }));

  const { setPerson } = personStore();

  return {
    setPerson,
    isValidPerson,
    person,
  };
};

export default usePerson;
