import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ListStudent = (props) => {
  const { DataStudent, DataKhoa, DataClass } = props;
  const [dataS, setStudent] = useState([...DataStudent]);
  const [dataNewStudent, setDataNewStudent] = useState([]);

  const [displayClass, setDisplayClass] = useState("none");
  const [displayStudent, setDisplayStudent] = useState("none");
  const [khoaID, setKhoaID] = useState();
  const [classID, setClassID] = useState();

  const groupBy = (keys) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      // Thay vì tạo một khóa duy nhất cho mỗi giá trị được nhóm theo giá trị, giờ đây chúng ta đang duyệt qua (và xây dựng)
      // toàn bộ cấu trúc đối tượng cho mọi giá trị mảng:
      keys.reduce((builder, key, index) => {
        if (index !== keys.length - 1) {
          // Xây dựng cấu trúc lồng nhau được nhóm theo cấu trúc
          builder[obj[key]] = builder[obj[key]] || {};
        } else {
          builder[obj[key]] = (builder[obj[key]] || []).concat(obj);
        }
        return builder[obj[key]];
      }, objectsByKeyValue);

      return objectsByKeyValue;
    }, {});

  useEffect(() => {
    setDataNewStudent(groupBy(["khoa", "lop"])(dataS));
  }, [DataKhoa]);
  const handleShowClass = (value) => {
    if (displayClass == "none") {
      setDisplayClass("");
    } else {
      setDisplayClass("none");
    }

    setKhoaID(value[0]);
  };
  const handleShowStudent = (value2) => {
    if (displayStudent == "none") {
      setDisplayStudent("");
    } else {
      setDisplayStudent("none");
    }
    setClassID(value2[0]);
  };
  // console.log("dataNewStudent=>", dataNewStudent);

  return (
    <>
      <div>
        <table className="tableList">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Khoa</th>
              <th>Lớp</th>
              <th>Ngày sinh</th>
            </tr>
          </thead>
          <tbody>
            {dataNewStudent != []
              ? Object.entries(dataNewStudent).map((value, key) => (
                  <>
                    {DataKhoa.map((elementAA, keyAA) => {
                      if (elementAA.id == value[0]) {
                        return (
                          <tr
                            className="titleKhoa"
                            key={keyAA}
                            onClick={() => handleShowClass(value)}
                          >
                            <td colSpan="4">
                              {elementAA.name}{" "}
                              <FontAwesomeIcon
                                icon={
                                  displayClass == "" && value[0] == khoaID
                                    ? faAngleUp
                                    : faAngleDown
                                }
                              />
                            </td>
                          </tr>
                        );
                      }
                    })}

                    {value[0] == khoaID
                      ? Object.entries(value[1]).map((value2, key) => (
                          <>
                            {DataClass.map((classItem, keyAA) => {
                              if (classItem.id == value2[0]) {
                                return (
                                  <tr
                                    key={keyAA}
                                    style={{ display: displayClass }}
                                    onClick={() => handleShowStudent(value2)}
                                  >
                                    <td colSpan="4">
                                      {classItem.name}{" "}
                                      <FontAwesomeIcon
                                        icon={
                                          displayStudent == "" &&
                                          value2[0] == classID
                                            ? faAngleUp
                                            : faAngleDown
                                        }
                                      />
                                    </td>
                                  </tr>
                                );
                              }
                            })}
                            {value2[0] == classID
                              ? value2[1].map((value3, keyBB) => {
                                  return (
                                    <tr
                                      key={keyBB}
                                      style={{ display: displayStudent }}
                                    >
                                      <td>{value3.name}</td>
                                      <>
                                        {DataKhoa.map((khoa, keyKhoa) => {
                                          if (khoa.id == value3.khoa) {
                                            return <td>{khoa.name} </td>;
                                          }
                                        })}
                                        {DataClass.map(
                                          (classStudent, keyKhoa) => {
                                            if (classStudent.id == value3.lop) {
                                              return (
                                                <td>{classStudent.name}</td>
                                              );
                                            }
                                          }
                                        )}
                                      </>
                                      <td>{value3.birthday}</td>
                                    </tr>
                                  );
                                })
                              : null}
                          </>
                        ))
                      : null}
                  </>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListStudent;
