import React from "react";
import { useSelector } from "react-redux";
import { setUser } from "../../store/test/user.slice";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store";

export default function Input() {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setUser({ name: e.target.value }));
  };

  return (
    <div>
      <br />
      <input
        id="name"
        type="text"
        placeholder="input"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
