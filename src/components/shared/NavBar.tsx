import { useDispatch} from "react-redux";
import { ActiveNotes } from "../../actions/notesActions";
import INote from "../../interfaces/note";
import { startSaveNote } from "../../modules/notes";

interface IProps {
  id:string;
  note:INote;
}

export const NavBar = (props: IProps) => {
  const dispatch = useDispatch(); 

  const handleSave = () => {
    dispatch(ActiveNotes(props.id, props.note));
    dispatch(startSaveNote({id:props.id, notes:props.note}));
  };

  return (
    <div className="navbar mb-1 shadow-lg bg-neutral text-neutral-content">
      <div className="px-2 mx-2">
        <span className="text-lg font-bold">
          <i className="far fa-sticky-note"></i>
        </span>
      </div>
      <div className="flex-none px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <button className="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Add Picture
          </button>
        </div>
        <div className="flex items-stretch">
          <button
            className="btn btn-ghost btn-sm rounded-btn"
            onClick={handleSave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};
