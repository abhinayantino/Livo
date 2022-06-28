import "./index.css";

const Form = ({ children }) => {
    return (
        <div className="p-4 mt-5 row row-cols-2 justify-content-between Cform">
            {children}
        </div>
    );
};

export default Form;
