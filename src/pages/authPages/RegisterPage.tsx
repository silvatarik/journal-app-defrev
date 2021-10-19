import React, { useEffect } from "react";
import logging from "../../config/logging";

/** Interfaces **/
import IPage from "../../interfaces/page";

/** React Router DOM **/
import { Link } from "react-router-dom";

/** React Forms **/
import { useForm, SubmitHandler } from "react-hook-form";

/** Definición Input Forms **/
type Inputs = {
  email: string;
  password: string;
  password2: string;
};

/** Styles **/
const style = {
  inputCustom: "input input-bordered w-full mb-2",
  buttonLoad:
    "bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
};

export const RegisterPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  /** Desestructuración de las prop del Hook **/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
      >
        <p className="mb-5 text-3xl uppercase text-gray-600">REGISTER</p>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
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
        </div>

        <button className="btn btn-accent w-full" type="button">
          <Link to="/auth/register">
            <span>SIGN UP</span>
          </Link>
        </button>

        <label className="mt-2">
          <Link to="/auth/login" className="link link-secondary">
            ¿Yá estas registrado?
          </Link>
        </label>
      </form>
    </div>
  );
};
