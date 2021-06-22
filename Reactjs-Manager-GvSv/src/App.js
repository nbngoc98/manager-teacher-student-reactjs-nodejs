import React, { useState, useEffect } from "react";

import "./App.scss";
import "./components/Tab/Tab.scss";
import "./components/List/List.scss";
import "./components/search/search.scss";
import "./components/Popup/Popup.scss";

import ListTeacher from "./components/List/ListTeacher";
import Tabs from "./components/Tab/Tabs";
import ListStudent from "./components/List/ListStudent";

import teacherApi from "./api/teacherApi";
import studentApi from "./api/studentApi";
import classApi from "./api/classApi";
import khoaApi from "./api/khoaApi";

const App = () => {
  const [dataTeacher, setDataTeacher] = useState([]);
  const [dataKhoa, setDataKhoa] = useState([]);
  const [dataClass, setDataClass] = useState([]);
  const [dataStudent, setDataStudent] = useState([]);

  useEffect(() => {
    const fetchDataTeacher = async () => {
      await teacherApi
        .getAll()
        .then((response) => setDataTeacher(response.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    fetchDataTeacher();
  }, [dataTeacher]);
  // console.log(dataTeacher);

  useEffect(() => {
    const fetchDataKhoa = async () => {
      await khoaApi
        .getAll()
        .then((response) => setDataKhoa(response.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    fetchDataKhoa();
  }, [dataKhoa]);

  useEffect(() => {
    const fetchDataStudent = async () => {
      await studentApi
        .getAll()
        .then((response) => setDataStudent(response.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    fetchDataStudent();
  }, [dataStudent]);

  useEffect(() => {
    const fetchDataClass = async () => {
      await classApi
        .getAll()
        .then((response) => setDataClass(response.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    fetchDataClass();
  }, [dataClass]);

  return (
    <div className="App">
      <Tabs>
        <div label="Giảng Viên">
          <ListTeacher DataTeacher={dataTeacher} DataKhoa={dataKhoa} />
        </div>
        <div label="Sinh Viên">
          <ListStudent
            DataStudent={dataStudent}
            DataKhoa={dataKhoa}
            DataClass={dataClass}
          />
        </div>
      </Tabs>
    </div>
  );
};
export default App;
