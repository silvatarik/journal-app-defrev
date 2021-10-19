import React, { useEffect } from "react";

import logging from "../../config/logging";

/** Interfaces **/
import IPage from "../../interfaces/page";

/** React Router DOM **/
import {  Link,useHistory } from 'react-router-dom'


/** React Forms **/
import { useForm, SubmitHandler } from "react-hook-form";

/** Definición Input Forms **/
type Inputs = {
  email: string;
  password: string;
};

export const LoginPage: React.FunctionComponent<IPage> = (props) => {
  /** Styles **/
  const style = {
    inputCustom: "input input-bordered w-full mb-2",
    buttonLoad:
      "bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
  };

  /** Desestructuración de las prop del Hook **/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  /** Obtenemos el historial **/
  const history = useHistory();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    history.push('/')
  };

  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-gray-600 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
        <input
          defaultValue={"juan@ejemplo.com"}
          className={
            errors.email
              ? `${style.inputCustom} input-error`
              : style.inputCustom
          }
          type="email"
          {...register("email", { required: "Cannot be empty" })}
        />
        {errors.email && (
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          </label>
        )}
        <input
          defaultValue={"1234567"}
          className={
            errors.password
              ? `${style.inputCustom} input-error`
              : style.inputCustom
          }
          type="password"
          {...register("password", { required: "Cannot be empty" })}
        />
        {errors.password && (
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          </label>
        )}
        <button
          className="btn btn-accent w-full mb-2"
          type="submit"
        >
          <span>Login</span>
        </button>
        <button
          className="btn btn-warning w-full"
          type="button"
        >
          <Link to="/auth/register"><span>SIGN UP</span></Link>
        </button>
      </form>
    </div>
  );
};
