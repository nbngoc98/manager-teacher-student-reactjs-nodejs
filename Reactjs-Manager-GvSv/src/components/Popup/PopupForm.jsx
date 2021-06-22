import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import teacherApi from "../../api/teacherApi";

const errorData = {
  name: "",
  phone: "",
  birthday: "",
  mail: "",
  khoa: "",
};

const PopupForm = (props) => {
  PopupForm.propTypes = {
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func,
  };

  PopupForm.defaultProps = {
    onSubmit: null,
    onDelete: null,
  };

  const { onSubmit, dataKhoa, dataUpdate, buttonDelete, onDelete } = props;
  const [teacher, setTeacher] = useState({});
  const [errors, setErrors] = useState({ errorData });

  // console.log(buttonDelete);

  useEffect(() => {
    const data = {
      id: typeof dataUpdate == "undefined" ? "" : dataUpdate.id,
      name: typeof dataUpdate == "undefined" ? "" : dataUpdate.name,
      phone: typeof dataUpdate == "undefined" ? "" : dataUpdate.phone,
      birthday: typeof dataUpdate == "undefined" ? "" : dataUpdate.birthday,
      mail: typeof dataUpdate == "undefined" ? "" : dataUpdate.mail,
      khoa: typeof dataUpdate == "undefined" ? 0 : dataUpdate.khoa,
    };
    setTeacher(data);
  }, [dataUpdate]);

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setTeacher((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (teacher) => {
    onDelete(teacher);
  };

  const validate = () => {
    let errors = {};

    if (!teacher["name"]) {
      errors["name"] = "*Vui lòng nhập tên";
    }

    if (!teacher["mail"]) {
      errors["mail"] = "*Vui lòng nhập vào mail";
    }

    if (typeof teacher["mail"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(teacher["mail"])) {
        errors["mail"] = "*Vui lòng nhập mail hợp lệ";
      }
    }

    if (!teacher["phone"]) {
      errors["phone"] = "*Vui lòng nhập số điện thoại";
    }

    if (typeof teacher["phone"] !== "undefined") {
      if (!teacher["phone"].match(/^[0-9]{10}$/)) {
        errors["phone"] = "*Vui lòng nhập số điện thoại hợp lệ.";
      }
    }

    if (!teacher["birthday"]) {
      errors["birthday"] = "*Vui lòng chọn ngày sinh";
    }
    if (!teacher["khoa"]) {
      errors["khoa"] = "*Vui lòng chọn khoa";
    }

    setErrors(errors);
  };
  console.log("setError =>", errors);

  function handleSubmit(event) {
    event.preventDefault();
    const isValidate = validate();
    // console.log(isValidate);
    // if (isValidate) {
    //   return false;
    // }
    if (!onSubmit) return;
    if (Object.keys(errors).length === 0) {
      onSubmit(teacher);
    }
  }
  function handleUpdate(event) {
    event.preventDefault();
    if (!onSubmit) return;
    onSubmit(teacher);
  }

  return (
    <div>
      <form
        onSubmit={
          typeof dataUpdate == "undefined" ? handleSubmit : handleUpdate
        }
        className="formID"
      >
        <div className="formInput">
          <div className="widthrow">
            <div className="label-input">
              <div className="title">Họ và tên:</div>
              <div className="input">
                <input
                  type="text"
                  value={teacher.name}
                  onChange={handleValueChange}
                  name="name"
                />
                <div>
                  <span className="text-error-form">{errors.name}</span>
                </div>
              </div>
            </div>
            <div className="label-input">
              <div className="title">Email:</div>
              <div className="input">
                <input
                  type="text"
                  value={teacher.mail}
                  onChange={handleValueChange}
                  name="mail"
                />
                <span className="text-error-form">{errors.mail}</span>
              </div>
            </div>
            <div className="label-input">
              <div className="title">Điện thoại:</div>
              <div className="input">
                <input
                  type="text"
                  value={teacher.phone}
                  onChange={handleValueChange}
                  name="phone"
                />
                <div>
                  <span className="text-error-form">{errors.phone}</span>
                </div>
              </div>
            </div>
            <div className="label-input">
              <div className="title">Ngày sinh:</div>
              <div className="input">
                <input
                  type="date"
                  value={teacher.birthday}
                  onChange={handleValueChange}
                  name="birthday"
                />
                <div>
                  <span className="text-error-form">{errors.birthday}</span>
                </div>
              </div>
            </div>
            <div className="label-input">
              <div className="title">Khoa:</div>
              <div className="input">
                <select
                  className="optionSelect"
                  name="khoa"
                  value={teacher.khoa}
                  onChange={handleValueChange}
                >
                  <option value="0">Hãy chọn khoa</option>
                  {dataKhoa.map((value, key) => (
                    <option key={key} value={value.id}>
                      {value.name}
                    </option>
                  ))}
                </select>
                <div>
                  <span className="text-error-form">{errors.khoa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input className="buttonSubmitForm" type="submit" value="Save" />
      </form>
      <button
        className="buttonDelete"
        style={{ display: buttonDelete == true ? "" : "none" }}
        onClick={() => handleDelete(teacher)}
      >
        Delete
      </button>
    </div>
  );
};
export default PopupForm;
