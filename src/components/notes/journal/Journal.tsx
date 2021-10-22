import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import IRootState, { INotes } from "../../../interfaces/rootState";
import { NavBar } from "../../shared/NavBar";

/** React Forms **/
import { useForm} from "react-hook-form";
import moment from "moment";

/** Definición Input Forms **/
type Inputs = {
  title: string;
  body: string;
  date: string;
  url: string;
};

export const Journal: React.FunctionComponent<{}> = (props) => {

  const data: any = useSelector((state: IRootState) => state.notes);
  const currentNote: INotes = data.active;

  const { register, watch, setValue } = useForm<Inputs>();

  useEffect(() => {
    setValue("title", currentNote !== null ? currentNote.notes?.title : "");
    setValue("date", currentNote.notes?.date);
    setValue("body", currentNote !== null ? currentNote.notes?.body : "");
    setValue("url", currentNote !== null ? currentNote.notes?.url : "");

  }, [currentNote]);

  return (
    <>
      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <NavBar id={currentNote.id} note={watch()} />
          <div className="p-10 bg-base-200 mt-3">
            <small>
              {moment(parseInt(currentNote.notes?.date)).format('ll').toString()}
            </small>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Note Title</span>
              </label>
              <input
                type="text"
                placeholder="Write your title message"
                className="input"
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Description</span>
              </label>
              <textarea
                className="textarea h-24 textarea-bordered"
                placeholder="Write your body message"
                defaultValue={
                  currentNote !== null ? currentNote.notes?.body : ""
                }
                {...register("body")}
              />
            </div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="random img"
              className="mx-auto mask mask-squircle"
            />
          </div>
        </form>
      </div>
    </>
  );
};
