import React, { useState, useEffect, useCallback } from "react";
import Search from "../search/Search";
import PopupForm from "../Popup/PopupForm";
import teacherApi from "../../api/teacherApi";

const ListTeacher = (props) => {
  const { DataKhoa, DataTeacher } = props;
  const [dataTeacher, setDataTeacher] = useState([...DataTeacher]);
  const [dataNew, setDataNew] = useState([]);
  const [dataUpdate, setdataUpdate] = useState();

  const [showPopup, setshowPopup] = useState(false);
  const [widthList, setwidthList] = useState("100%");
  const [showPopupUpdate, setshowPopupUpdate] = useState(false);
  const [actionSubmit, setActionSubmit] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundRowkhoaID, setBackgroundRowkhoaID] = useState();
  const [buttonDeleteForm, setButtonDeleteForm] = useState(false);

  const openPopupHandlerCreate = () => {
    setshowPopup(true);
    setshowPopupUpdate(false);
    setwidthList("50%");
  };
  const handleClose = () => {
    setshowPopup(false);
    setshowPopupUpdate(false);
    setwidthList("100%");
    setButtonDeleteForm(false);
  };
  const handleClickUpdate = (value) => {
    setshowPopupUpdate(true);
    setwidthList("50%");
    setdataUpdate(value);
    setshowPopup(false);
    setButtonDeleteForm(true);
    setBackgroundColor("rgb(20, 173, 109)");
    setBackgroundRowkhoaID(value.id);
  };

  const handleFiltersChange = (newFilters) => {
    console.log("New filters: ", newFilters);
    if (newFilters.name) {
      newFilters.name = newFilters.name.toUpperCase();
    }
    // const result = dataTeacher.filter((data) => {
    //   return data.name == newFilters.name;
    // });
    // console.log(result);
    // setDataTeacher(result);

    if (newFilters) {
      var data = {
        phone: newFilters.phone,
        name: newFilters.name,
        birthday: newFilters.birthday,
      };
      console.log(data);

      teacherApi
        .search(data)
        .then((response) => {
          setDataTeacher(response.data);
          setActionSubmit(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  function handleTodoFormSubmit(teacher) {
    // Th??m m???i object v??o data teacher
    teacher.khoa = parseInt(teacher.khoa);
    // teacher.id = dataTeacher.length + 1;
    // const data = {
    //   ...teacher,
    // };
    // const newDataTeacher = [...dataTeacher];
    // newDataTeacher.push(newData);
    // setDataTeacher(newDataTeacher);

    var data = {
      name: teacher.name.toUpperCase(),
      khoa: teacher.khoa,
      phone: teacher.phone,
      mail: teacher.mail,
      birthday: teacher.birthday,
    };

    teacherApi
      .add(data)
      .then((response) => {
        setshowPopup(false);
        setwidthList("100%");
        alert("Th??m m???i gi??o vi??n th??nh c??ng");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  const handleDelete = (teacher) => {
    teacherApi
      .remove(teacher.id)
      .then((res, req) => {
        console.log(res.data);
        setshowPopupUpdate(false);
        setwidthList("100%");
        alert("X??a gi??o vi??n " + teacher.name + " th??nh c??ng");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function handleTodoFormUpdate(teacherUpdate) {
    // console.log(teacherUpdate);
    // const newState = dataTeacher.map((data) =>
    //   data.id === teacherUpdate.id
    //     ? {
    //         ...data,
    //         phone: teacherUpdate.phone,
    //         name: teacherUpdate.name.toUpperCase(),
    //         mail: teacherUpdate.mail,
    //         khoa: teacherUpdate.khoa,
    //         birthday: teacherUpdate.birthday,
    //       }
    //     : data
    // );
    // setDataTeacher(newState);

    var data = {
      id: teacherUpdate.id,
      phone: teacherUpdate.phone,
      name: teacherUpdate.name.toUpperCase(),
      mail: teacherUpdate.mail,
      khoa: teacherUpdate.khoa,
      birthday: teacherUpdate.birthday,
    };

    teacherApi
      .update(data)
      .then((response) => {
        setshowPopupUpdate(false);
        setwidthList("100%");
        alert("Update th??nh c??ng");
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // Function nh??m theo Key
  const groupBy = (keys) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      // Thay v?? t???o m???t kh??a duy nh???t cho m???i gi?? tr??? ???????c nh??m theo gi?? tr???, gi??? ????y ch??ng ta ??ang duy???t qua (v?? x??y d???ng)
      // to??n b??? c???u tr??c ?????i t?????ng cho m???i gi?? tr??? m???ng:
      keys.reduce((builder, key, index) => {
        if (index !== keys.length - 1) {
          // X??y d???ng c???u tr??c l???ng nhau ???????c nh??m theo c???u tr??c
          builder[obj[key]] = builder[obj[key]] || {};
        } else {
          builder[obj[key]] = (builder[obj[key]] || []).concat(obj);
        }
        return builder[obj[key]];
      }, objectsByKeyValue);

      return objectsByKeyValue;
    }, {});

  useEffect(() => {
    setDataNew(groupBy(["khoa"])(dataTeacher));
  }, [dataTeacher]);

  useEffect(() => {
    if (actionSubmit == false) {
      setDataTeacher(DataTeacher);
    }
  }, [DataTeacher, actionSubmit]);

  // console.log(dataNew);

  return (
    <div>
      {showPopup ? (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={() => handleClose()}>
              x
            </span>
            <PopupForm onSubmit={handleTodoFormSubmit} dataKhoa={DataKhoa} />
          </div>
        </div>
      ) : null}
      {showPopupUpdate ? (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={() => handleClose()}>
              x
            </span>
            <PopupForm
              onSubmit={handleTodoFormUpdate}
              dataUpdate={dataUpdate}
              dataKhoa={DataKhoa}
              buttonDelete={buttonDeleteForm}
              onDelete={handleDelete}
            />
          </div>
        </div>
      ) : null}

      <div style={{ width: widthList }}>
        <button className="addnew" onClick={() => openPopupHandlerCreate()}>
          Th??m m???i
        </button>
        <Search onSubmit={handleFiltersChange} />
        <table className="tableList">
          <thead>
            <tr>
              <th>#</th>
              <th>T??n</th>
              <th>Khoa</th>
              <th>Phone</th>
              <th>Mail</th>
              <th>Ng??y sinh</th>
            </tr>
          </thead>
          <tbody>
            {dataNew != []
              ? Object.entries(dataNew).map((data, key) => (
                  <>
                    {Object.entries(data[1]).map((data2, keyBB) => {
                      // var count = Object.keys(data2[1]).length;
                      // console.log(count); 
                      return (
                        <tr key={keyBB}>
                          <td>{data2[1].id}</td>
                          <td
                            className="rowNameTeacher"
                            style={{
                              backgroundColor:
                                data2[1].id == backgroundRowkhoaID
                                  ? backgroundColor
                                  : "",
                            }}
                            onClick={() => handleClickUpdate(data2[1])}
                          >
                            {data2[1].name}
                          </td>

                          {DataKhoa.map((khoa, key3) => {
                            if (khoa.id == data2[1].khoa && keyBB == 0) {
                              return (
                                <td key={key3} rowSpan={data[1].length}>
                                  {khoa.name}
                                </td>
                              );
                            }
                          })}

                          <td>{data2[1].phone}</td>
                          <td>{data2[1].mail}</td>
                          <td>{data2[1].birthday}</td>
                        </tr>
                      );
                    })}
                  </>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListTeacher;
